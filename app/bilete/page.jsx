export const metadata = { title: 'Bilete ? OWH STUDIO' }

export default function BiletePage() {
  const events = [
    { title: 'Cronici de Cartier', date: '12 decembrie, 19:00', location: 'Cinema Elvire Popesco' },
    { title: 'Luminile Ora?ului', date: '22 decembrie, 20:30', location: 'Cinema Muzeul ??ranului' },
  ]
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Bilete</h1>
      <p className="text-white/80 mt-2 max-w-2xl">Rezerv? locul la urm?toarele proiec?ii ?i evenimente speciale.</p>
      <div className="mt-8 grid gap-4">
        {events.map((e) => (
          <div key={e.title} className="card p-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg">{e.title}</h3>
              <p className="text-white/80 text-sm">{e.date} ? {e.location}</p>
            </div>
            <a className="btn-primary" href={`mailto:boxoffice@owh.studio?subject=Bilet: ${encodeURIComponent(e.title)}`}>Rezerv? bilet</a>
          </div>
        ))}
      </div>
    </div>
  )
}
