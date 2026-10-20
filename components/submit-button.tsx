'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      suppressHydrationWarning
      className="group flex w-full items-center justify-center gap-3 border-2 border-joint-black bg-joint-black px-6 py-4 text-sm font-bold tracking-[0.2em] text-joint-cream uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus-visible:ring-4 focus-visible:ring-joint-orange focus-visible:ring-offset-2 focus-visible:ring-offset-joint-cream active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:cursor-wait disabled:opacity-80 sm:text-base"
    >
      {pending ? (
        <>
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-joint-cream border-t-transparent"
            aria-hidden="true"
          />
          SAVING YOUR TABLE…
        </>
      ) : (
        'CONFIRM RESERVATION →'
      )}
    </button>
  )
}
