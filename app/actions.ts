'use server'

import { getTable } from '@/lib/tables'

export type BookingSummary = {
  bookingId: string
  customerName: string
  email: string
  phone: string
  tableId: string
  tableLabel: string
  date: string
  startTime: string
  duration: string
  rate: string
  total: string
  status: string
}

export type ReservationState = {
  status: 'idle' | 'error' | 'success'
  message: string
  fieldErrors: Record<string, string>
  booking: BookingSummary | null
  synced: boolean
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const TIME_PATTERN = /^([01][0-9]|2[0-3]):[0-5][0-9]$/

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

function text(formData: FormData, key: string): string {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

function todayISO(): string {
  const now = new Date()
  const month = `${now.getMonth() + 1}`.padStart(2, '0')
  const day = `${now.getDate()}`.padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

function createBookingId(date: string): string {
  const stamp = date.replaceAll('-', '')
  const suffix = (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`)
    .replace(/[^a-z0-9]/gi, '')
    .slice(0, 4)
    .toUpperCase()
  return `JNT-${stamp}-${suffix}`
}

export async function submitReservation(
  _prevState: ReservationState,
  formData: FormData,
): Promise<ReservationState> {
  const customerName = text(formData, 'fullName')
  const email = text(formData, 'email')
  const phone = text(formData, 'phone')
  const tableId = text(formData, 'table')
  const date = text(formData, 'date')
  const startTime = text(formData, 'time')
  const duration = text(formData, 'duration')

  const fieldErrors: Record<string, string> = {}

  if (customerName.length < 2) {
    fieldErrors.fullName = 'ENTER YOUR FULL NAME'
  }

  if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = 'ENTER A VALID EMAIL ADDRESS'
  }

  if (phone.replace(/\D/g, '').length < 7) {
    fieldErrors.phone = 'ENTER A VALID PHONE NUMBER'
  }

  const table = getTable(tableId)
  if (!table) {
    fieldErrors.table = 'PICK A TABLE'
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < todayISO()) {
    fieldErrors.date = 'PICK TODAY OR A FUTURE DATE'
  }

  if (!TIME_PATTERN.test(startTime)) {
    fieldErrors.time = 'PICK A START TIME'
  }

  const durationHours = Number(duration)
  if (!Number.isInteger(durationHours) || durationHours < 1 || durationHours > 4) {
    fieldErrors.duration = 'PICK A DURATION BETWEEN 1 AND 4 HOURS'
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'CHECK THE HIGHLIGHTED FIELDS AND TRY AGAIN.',
      fieldErrors,
      booking: null,
      synced: false,
    }
  }

  const bookingId = createBookingId(date)
  const durationLabel = `${durationHours} ${durationHours === 1 ? 'Hour' : 'Hours'}`

  const payload = {
    'Booking ID': bookingId,
    'Customer Name': customerName,
    Email: email,
    Phone: phone,
    'Table ID': tableId,
    Date: date,
    'Start Time': startTime,
    Duration: durationLabel,
    Status: 'CONFIRMED',
  }

  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL?.trim()

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        cache: 'no-store',
        signal: AbortSignal.timeout(15000),
      })

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`)
      }
    } catch {
      return {
        status: 'error',
        message:
          'WE COULD NOT REACH THE RESERVATION SHEET. YOUR BOOKING WAS NOT SAVED — PLEASE TRY AGAIN.',
        fieldErrors: {},
        booking: null,
        synced: false,
      }
    }
  }

  return {
    status: 'success',
    message: '',
    fieldErrors: {},
    synced: Boolean(webhookUrl),
    booking: {
      bookingId,
      customerName,
      email,
      phone,
      tableId,
      tableLabel: table?.name ?? tableId,
      date,
      startTime,
      duration: durationLabel,
      rate: table?.rate ?? '',
      total: table ? inr.format(table.ratePerHour * durationHours) : '',
      status: 'CONFIRMED',
    },
  }
}
