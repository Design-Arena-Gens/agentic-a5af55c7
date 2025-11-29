export const metadata = { title: 'Produc?ie video ? OWH STUDIO' }

export default function ProductieVideoPage() {
  const list = [
    { title: 'Concept & regie', desc: 'Dezvolt?m idei memorabile ?i le transform?m ?n pove?ti vizuale.' },
    { title: 'Imagine & lumin?', desc: 'Operatori experimenta?i ?i pachete de lumin? flexibile.' },
    { title: 'Sunet', desc: '?nregistrare pe platou ?i design de sunet ?n post-produc?ie.' },
    { title: 'Montaj & colorizare', desc: 'Flux complet de post: edit, VFX u?or, grading profesional.' },
  ]
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Produc?ie video</h1>
      <p className="text-white/80 mt-2 max-w-2xl">Servicii end-to-end pentru reclame, clipuri muzicale, corporate ?i documentar.</p>
      <div className="mt-8 grid-auto-fit">
        {list.map((i) => (
          <div key={i.title} className="card p-6">
            <h3 className="font-semibold text-lg">{i.title}</h3>
            <p className="text-white/80 mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a href="mailto:hello@owh.studio" className="btn-primary">Solicit? ofert?</a>
      </div>
    </div>
  )
}
