# JOINT — Billiards & Lounge Reservations

A responsive Next.js (App Router) booking app for the JOINT billiards lounge. Brutalist/retro
styling: vibrant orange background, cream surfaces, monospace type, and hard black borders with
offset shadows.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Booking flow

`app/page.tsx` renders `components/reservation-form.tsx`, a client component that submits through
the Server Action `submitReservation` in `app/actions.ts`. The action validates the fields, builds a
booking ID (`JNT-YYYYMMDD-XXXX`), and POSTs the row to Google Sheets.

State is managed with `useActionState`, so the form shows a pending state while the action runs and
swaps to a confirmation panel on success.

## Google Sheets integration

Set the webhook URL in `.env.local` (see `.env.example`):

```bash
NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfy.../exec
```

The Server Action sends a `POST` with a JSON body to that URL, shaped like:

```json
{
  "Booking ID": "JNT-20261021-ABCD",
  "Customer Name": "Asha Patel",
  "Email": "asha@example.com",
  "Phone": "+91 98765 43210",
  "Table ID": "T3",
  "Date": "2026-10-25",
  "Start Time": "18:30",
  "Duration": "2 Hours",
  "Status": "CONFIRMED"
}
```

The script appends one row per booking with these columns, in order:

| Booking ID | Customer Name | Email | Phone | Table ID | Date | Start Time | Duration | Rate | Total | Status |
| ---------- | ------------- | ----- | ----- | -------- | ---- | ---------- | -------- | ---- | ----- | ------ |

The request is made from the server, so the browser never talks to Google directly and no CORS
setup is needed. The action reads the script's JSON reply and fails the booking if it returns
`{ "ok": false }`, since Apps Script always answers HTTP 200 even on errors.

### Creating the Apps Script endpoint

1. Create a Google Sheet with a tab named `Bookings`.
2. In the sheet, open **Extensions → Apps Script** and paste:

```js
const SHEET_NAMES = ['Bookings', 'Reservations'];

const RATES = {
  T1: 250,
  T2: 250,
  T3: 300,
  T4: 400,
  T5: 500,
  T6: 800,
};

function text(value) {
  return String(value == null ? '' : value).trim();
}

function findSheet(ss) {
  for (const name of SHEET_NAMES) {
    const sheet = ss.getSheetByName(name);
    if (sheet) return sheet;
  }
  const sheets = ss.getSheets();
  if (sheets.length > 0) return sheets[0];
  throw new Error(`No sheet tab found. Expected one of: ${SHEET_NAMES.join(', ')}`);
}

function parseDurationHours(raw) {
  const match = text(raw).match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : NaN;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('No POST payload received.');
    }

    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      throw new Error(`Invalid JSON payload: ${parseError.message}`);
    }

    const name = text(data['Customer Name']);
    const tableId = text(data['Table ID']);
    const date = text(data['Date']);
    const startTime = text(data['Start Time']);

    if (!name || !tableId || !date || !startTime) {
      throw new Error('Missing required booking fields (Customer Name, Table ID, Date, Start Time).');
    }

    const hourlyRate = RATES[tableId] || 250;
    let durationHours = parseDurationHours(data['Duration']);
    if (!Number.isFinite(durationHours) || durationHours <= 0) {
      durationHours = 1;
    }
    const totalAmount = hourlyRate * durationHours;
    const bookingId =
      text(data['Booking ID']) || `BK-${Math.floor(100000 + Math.random() * 900000)}`;
    const status = text(data['Status']) || 'CONFIRMED';

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      throw new Error(
        'No active spreadsheet. Re-deploy this script from the sheet it should write to.',
      );
    }
    const sheet = findSheet(ss);

    sheet.appendRow([
      bookingId,
      name,
      text(data['Email']),
      text(data['Phone']),
      tableId,
      date,
      startTime,
      `${durationHours} Hr(s)`,
      `₹${hourlyRate.toFixed(2)}`,
      `₹${totalAmount.toFixed(2)}`,
      status,
    ]);

    return jsonResponse({ ok: true, result: 'success', bookingId, totalAmount });
  } catch (error) {
    return jsonResponse({ ok: false, result: 'error', error: error.toString() });
  } finally {
    lock.releaseLock();
  }
}
```

3. **Deploy → New deployment → Web app**, set *Execute as* to your account and *Who has access* to
   **Anyone**. Copy the `/exec` URL into `.env.local`. The script writes to a tab named `Bookings`
   (or `Reservations`), falling back to the first tab.
4. Restart the dev server. The confirmation screen reports whether the row was appended.

If the variable is unset, bookings still succeed but the confirmation screen warns that the sheet
sync is disabled. If the webhook returns a non-2xx response or `{ "ok": false }`, the form shows an
error and the booking is not confirmed.

## Project structure

```
app/
  actions.ts          Server Action: validate, create booking, POST to Sheets
  layout.tsx          Fonts, metadata, global shell
  page.tsx            Landing page: header, table list, reservation form
components/
  header.tsx          Retro JOINT logotype and subtitle
  reservation-form.tsx  Form fields, validation errors, confirmation screen
  submit-button.tsx   Submit button with useFormStatus pending state
lib/
  tables.ts           Shared table catalog (IDs, labels, rates)
```
