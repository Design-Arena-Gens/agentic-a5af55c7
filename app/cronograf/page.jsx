export const metadata = { title: 'CRONOGRAF ? OWH STUDIO' }

export default function CronografPage() {
  const program = [
    { time: '10:00', title: 'Selec?ie scurtmetraje', hall: 'Sala 1' },
    { time: '12:00', title: 'Masterclass: Montaj creativ', hall: 'Sala 2' },
    { time: '16:00', title: 'Documentar competi?ie', hall: 'Sala 1' },
    { time: '19:00', title: 'Gala de deschidere', hall: 'Sala 1' },
  ]
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">CRONOGRAF</h1>
      <p className="text-white/80 mt-2 max-w-2xl">Festival de film documentar organizat de OWH STUDIO.</p>
      <div className="mt-8 grid gap-4">
        {program.map((p) => (
          <div key={p.title} className="card p-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-white/70 text-sm w-16">{p.time}</span>
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-white/70 text-sm">{p.hall}</p>
              </div>
            </div>
            <a className="btn-ghost" href="/bilete">Bilete</a>
          </div>
        ))}
      </div>
    </div>
  )
}
