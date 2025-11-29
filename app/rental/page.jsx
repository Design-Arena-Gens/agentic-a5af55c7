export const metadata = { title: 'Rental ? OWH STUDIO' }

export default function RentalPage() {
  const gear = [
    { name: 'Camera Cinema 6K Pro', price: '120 ?/zi', spec: 'Baterii + media incluse' },
    { name: 'Obiectiv 24-70mm f/2.8', price: '30 ?/zi', spec: 'EF mount' },
    { name: 'Set lumini LED', price: '45 ?/zi', spec: '2x panel + standuri' },
    { name: 'Recorder audio profesional', price: '25 ?/zi', spec: 'XLR, 32-bit float' },
  ]
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Rental camer? & echipament</h1>
      <p className="text-white/80 mt-2 max-w-2xl">Pre?uri transparente, ridicare rapid?. Selecteaz? ?i scrie-ne pentru disponibilitate.</p>
      <div className="mt-8 grid-auto-fit">
        {gear.map((g) => (
          <div key={g.name} className="card p-6">
            <h3 className="font-semibold text-lg">{g.name}</h3>
            <p className="text-white/70 text-sm mt-1">{g.spec}</p>
            <p className="mt-3">{g.price}</p>
            <div className="mt-4">
              <a className="btn-ghost" href={`mailto:rental@owh.studio?subject=Rezervare: ${encodeURIComponent(g.name)}`}>Rezerv?</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
