import { Header } from '@/components/header'
import { ReservationForm } from '@/components/reservation-form'
import { TABLES } from '@/lib/tables'

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-1 flex-col px-4 pt-10 pb-12 sm:px-6 sm:pt-14">
      <Header />

      <main className="flex flex-1 flex-col gap-8">
        <section aria-label="Available tables" className="mx-auto w-full max-w-3xl">
          <div className="mb-2 flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase">
              Tonight&apos;s tables
            </span>
            <span className="h-0.5 flex-1 bg-joint-black" />
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {TABLES.map((table) => (
              <li
                key={table.id}
                className="border-2 border-joint-black bg-joint-cream p-3 text-joint-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <p className="text-[9px] font-bold tracking-[0.2em] text-joint-orange uppercase">
                  {table.id}
                </p>
                <p className="mt-1 text-[11px] leading-tight font-bold uppercase">
                  {table.name}
                </p>
                <p className="mt-2 text-[10px] font-bold tracking-[0.1em] text-black/50 uppercase">
                  {table.rate}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <ReservationForm />
      </main>

      <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t-2 border-joint-black pt-4 text-[9px] font-bold tracking-[0.2em] uppercase">
        <span>JOINT Billiards &amp; Lounge</span>
        <span className="text-joint-cream/80">
          Break • Pot • Chalk • Repeat
        </span>
      </footer>
    </div>
  )
}
