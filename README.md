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

The Server Action sends a `POST` with a JSON body to that URL. Each booking appends one row with
these columns, in order:

| Booking ID | Customer Name | Email | Phone | Table ID | Date | Start Time | Duration | Status |
| ---------- | ------------- | ----- | ----- | -------- | ---- | ---------- | -------- | ------ |

The request is made from the server, so the browser never talks to Google directly and no CORS
setup is needed.

### Creating the Apps Script endpoint

1. Create a Google Sheet with a tab named `Bookings`.
2. In the sheet, open **Extensions → Apps Script** and paste:

```js
const SHEET_NAME = 'Bookings';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);
    sheet.appendRow([
      data['Booking ID'],
      data['Customer Name'],
      data['Email'],
      data['Phone'],
      data['Table ID'],
      data['Date'],
      data['Start Time'],
      data['Duration'],
      data['Status'],
    ]);
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

3. **Deploy → New deployment → Web app**, set *Execute as* to your account and *Who has access* to
   **Anyone**. Copy the `/exec` URL into `.env.local`.
4. Restart the dev server. The confirmation screen reports whether the row was appended.

If the variable is unset, bookings still succeed but the confirmation screen warns that the sheet
sync is disabled. If the webhook returns a non-2xx response, the form shows an error and the
booking is not confirmed.

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
