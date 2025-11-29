export const metadata = { title: 'Emisiuni ? OWH STUDIO' }

export default function EmisiuniPage() {
  const shows = [
    { title: 'Cadru 25', desc: 'Interviuri cu cinea?ti ?i discu?ii despre estetica imaginii.' },
    { title: 'Sunetul din spatele scenei', desc: 'Podcast video despre sound design ?n film.' },
    { title: 'Cronograf Live', desc: 'Transmisiuni live ?i Q&A cu autorii selecta?i.' },
  ]
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Emisiuni</h1>
      <p className="text-white/80 mt-2 max-w-2xl">Programe originale, conversa?ii sincere ?i perspective noi.</p>
      <div className="mt-8 grid-auto-fit">
        {shows.map((s) => (
          <div key={s.title} className="card p-6">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-white/80 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
