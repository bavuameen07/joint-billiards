'use client'

import { useActionState, useState } from 'react'
import type { BookingSummary, ReservationState } from '@/app/actions'
import { submitReservation } from '@/app/actions'
import { TABLES } from '@/lib/tables'
import { SubmitButton } from './submit-button'

const initialState: ReservationState = {
  status: 'idle',
  message: '',
  fieldErrors: {},
  booking: null,
  synced: false,
}

const inputClass =
  'w-full border-2 border-joint-black bg-white px-3 py-3 text-sm font-bold uppercase text-joint-black transition placeholder:font-normal placeholder:uppercase placeholder:text-black/35 focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'

const DURATIONS = [1, 2, 3, 4]

function todayISO(): string {
  const now = new Date()
  const month = `${now.getMonth() + 1}`.padStart(2, '0')
  const day = `${now.getDate()}`.padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

function prettyDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  if (!year || !month || !day) return iso
  return new Date(year, month - 1, day)
    .toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .toUpperCase()
}

export function ReservationForm() {
  const [attempt, setAttempt] = useState(0)

  return (
    <FormPanel
      key={attempt}
      onRestart={() => setAttempt((value) => value + 1)}
    />
  )
}

function FormPanel({ onRestart }: { onRestart: () => void }) {
  const [state, formAction] = useActionState(submitReservation, initialState)
  const [minDate, setMinDate] = useState('')

  function syncMinDate() {
    if (!minDate) setMinDate(todayISO())
  }

  if (state.status === 'success' && state.booking) {
    return (
      <Confirmation
        booking={state.booking}
        synced={state.synced}
        onRestart={onRestart}
      />
    )
  }

  const errors = state.fieldErrors
  const showErrorBanner = state.status === 'error'

  return (
    <section
      aria-label="Reservation form"
      className="mx-auto w-full max-w-3xl border-2 border-joint-black bg-joint-cream text-joint-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="flex items-center justify-between gap-3 border-b-2 border-joint-black bg-joint-black px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] text-joint-cream uppercase sm:px-6">
        <span>Reservation Form</span>
        <span className="text-joint-orange">JOINT // 2026</span>
      </div>

      <form
        action={formAction}
        onFocusCapture={syncMinDate}
        onPointerDownCapture={syncMinDate}
        className="grid gap-5 p-5 sm:p-7 md:grid-cols-2"
      >
        {showErrorBanner && (
          <div
            role="alert"
            className="border-2 border-joint-black bg-joint-orange px-3 py-2.5 text-[10px] font-bold tracking-[0.15em] text-joint-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:col-span-2"
          >
            ✕ {state.message || 'Something went wrong. Please try again.'}
          </div>
        )}

        <Field
          label="Full Name"
          name="fullName"
          error={errors.fullName}
          className="md:col-span-2"
        >
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="E.G. ALEX BREAKRACK"
            required
            suppressHydrationWarning
            className={inputClass}
          />
        </Field>

        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="YOU@EXAMPLE.COM"
            required
            suppressHydrationWarning
            className={inputClass}
          />
        </Field>

        <Field label="Phone Number" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 555 010 2030"
            required
            suppressHydrationWarning
            className={inputClass}
          />
        </Field>

        <Field
          label="Table"
          name="table"
          error={errors.table}
          className="md:col-span-2"
        >
          <div className="relative">
            <select
              id="table"
              name="table"
              required
              defaultValue=""
              suppressHydrationWarning
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="" disabled>
                SELECT A TABLE…
              </option>
              {TABLES.map((table) => (
                <option key={table.id} value={table.id}>
                  {table.name}
                </option>
              ))}
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs font-bold"
            >
              ▼
            </span>
          </div>
        </Field>

        <Field label="Date" name="date" error={errors.date}>
          <input
            id="date"
            name="date"
            type="date"
            required
            suppressHydrationWarning
            min={minDate || undefined}
            className={inputClass}
          />
        </Field>

        <Field label="Start Time" name="time" error={errors.time}>
          <input
            id="time"
            name="time"
            type="time"
            required
            suppressHydrationWarning
            className={inputClass}
          />
        </Field>

        <Field
          label="Duration"
          name="duration"
          error={errors.duration}
          hint="MAX 4 HOURS"
          className="md:col-span-2"
        >
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {DURATIONS.map((hours, index) => (
              <label
                key={hours}
                className="flex cursor-pointer items-center justify-center border-2 border-joint-black bg-white py-3 text-xs font-bold text-joint-black transition has-[:checked]:bg-joint-black has-[:checked]:text-joint-cream has-[:focus-visible]:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-joint-orange sm:text-sm"
              >
                <input
                  type="radio"
                  name="duration"
                  value={hours}
                  defaultChecked={index === 0}
                  suppressHydrationWarning
                  className="sr-only"
                />
                {hours}&nbsp;{hours === 1 ? "HR" : "HRS"}
              </label>
            ))}
          </div>
        </Field>

        <div className="md:col-span-2">
          <SubmitButton />
          <p className="mt-3 text-center text-[9px] font-bold tracking-[0.18em] text-black/50 uppercase sm:text-[10px]">
            Tables are held for 15 minutes past the booked start time.
          </p>
        </div>
      </form>
    </section>
  )
}

function Field({
  label,
  name,
  error,
  hint,
  className = '',
  children,
}: {
  label: string
  name: string
  error?: string
  hint?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <label
          htmlFor={name}
          className="text-[10px] font-bold tracking-[0.2em] uppercase"
        >
          {label}
        </label>
        {hint && (
          <span className="text-[9px] font-bold tracking-[0.15em] text-black/40 uppercase">
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p
          role="alert"
          className="mt-1.5 text-[10px] font-bold tracking-[0.12em] text-joint-orange uppercase"
        >
          ▲ {error}
        </p>
      )}
    </div>
  )
}

function Confirmation({
  booking,
  synced,
  onRestart,
}: {
  booking: BookingSummary
  synced: boolean
  onRestart: () => void
}) {
  const rows: Array<[string, string]> = [
    ['Customer Name', booking.customerName],
    ['Email', booking.email],
    ['Phone', booking.phone],
    ['Table', booking.tableLabel],
    ['Date', prettyDate(booking.date)],
    ['Start Time', booking.startTime],
    ['Duration', booking.duration],
    ['Rate', booking.rate],
    ['Total', booking.total],
    ['Status', booking.status],
  ]

  return (
    <section
      aria-live="polite"
      className="mx-auto w-full max-w-3xl border-2 border-joint-black bg-joint-cream px-5 py-8 text-center text-joint-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:px-8 sm:py-10"
    >
      <div
        aria-hidden="true"
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border-2 border-joint-black bg-joint-orange text-3xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        ✓
      </div>

      <h2
        className="text-[clamp(1.75rem,7vw,3.25rem)] leading-none font-black tracking-[-0.03em] uppercase"
        style={{ textShadow: "4px 4px 0px #FF451A" }}
      >
        Reservation Confirmed!
      </h2>

      <p className="mx-auto mt-4 max-w-md text-[11px] font-bold tracking-[0.14em] uppercase">
        Your table is locked in at JOINT. Bring your game.
      </p>

      <div className="mx-auto mt-7 max-w-md border-2 border-joint-black bg-white text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between gap-3 border-b-2 border-joint-black bg-joint-black px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-joint-cream uppercase">
          <span>Booking ID</span>
          <span className="text-joint-orange">{booking.bookingId}</span>
        </div>

        <dl className="divide-y-2 divide-black/10">
          {rows.map(([term, value]) => (
            <div
              key={term}
              className="flex flex-wrap items-baseline justify-between gap-1 px-3 py-2.5"
            >
              <dt className="text-[9px] font-bold tracking-[0.18em] text-black/50 uppercase">
                {term}
              </dt>
              <dd className="text-[11px] font-bold tracking-[0.05em] uppercase break-all">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto mt-5 max-w-md border-2 border-joint-black bg-joint-orange px-3 py-2 text-[9px] font-bold tracking-[0.14em] uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        {synced
          ? 'Row appended to the JOINT reservation sheet.'
          : 'Sheet webhook not configured — set NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL to sync bookings.'}
      </div>

      <button
        type="button"
        onClick={onRestart}
        suppressHydrationWarning
        className="mt-7 w-full max-w-md border-2 border-joint-black bg-joint-black px-6 py-4 text-sm font-bold tracking-[0.2em] text-joint-cream uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus-visible:ring-4 focus-visible:ring-joint-orange focus-visible:ring-offset-2 focus-visible:ring-offset-joint-cream active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
      >
        + Book another table
      </button>
    </section>
  )
}
