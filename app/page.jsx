import Hero from '@/components/Hero'
import Link from 'next/link'
import Image from 'next/image'
import films from '@/data/films.json'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-responsive mt-16 sm:mt-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Selec?ie recent?</h2>
          <Link className="text-sm text-brand-400 hover:text-brand-300" href="/filme">Vezi toate filmele ?</Link>
        </div>
        <div className="mt-6 grid-auto-fit">
          {films.slice(0,3).map((f) => (
            <Link key={f.slug} href={`/filme/${f.slug}`} className="card overflow-hidden group">
              <div className="aspect-[16/9] relative">
                <Image src={f.cover} alt={f.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-white/70 mt-1">{f.year} ? {f.duration} min</p>
                <p className="text-sm text-white/80 mt-2 line-clamp-2">{f.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-responsive mt-20 sm:mt-28">
        <div className="card p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Servicii de produc?ie video</h2>
            <p className="text-white/80 mt-2 max-w-2xl">
              De la concept la livrare: regie, imagine, sunet, post-produc?ie ?i colorizare. Echip? full-service pentru reclame, clipuri muzicale ?i emisiuni.
            </p>
          </div>
          <Link href="/productie-video" className="btn-primary">Cere ofert?</Link>
        </div>
      </section>

      <section className="container-responsive mt-20 sm:mt-28">
        <h2 className="text-2xl sm:text-3xl font-semibold">Rental camer? & echipament</h2>
        <p className="text-white/80 mt-2">?nchiriere rapid?: camere, obiective, lumini, sunet.</p>
        <div className="mt-6 grid-auto-fit">
          {[
            {name: 'Camera Cinema 6K Pro', price: '120 ?/zi'},
            {name: 'Obiectiv 24-70mm f/2.8', price: '30 ?/zi'},
            {name: 'Set lumini LED', price: '45 ?/zi'},
            {name: 'Recorder audio profesional', price: '25 ?/zi'}
          ].map((it) => (
            <div key={it.name} className="card p-5">
              <h3 className="font-medium">{it.name}</h3>
              <p className="text-sm text-white/70 mt-1">{it.price}</p>
              <div className="mt-4">
                <Link href="/rental" className="btn-ghost">Rezerv?</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-responsive mt-20 sm:mt-28 mb-20">
        <div className="card p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Festivalul nostru: CRONOGRAF</h2>
            <p className="text-white/80 mt-2 max-w-2xl">Documentar, dezbateri, invita?i interna?ionali. Tr?ie?te experien?a cinematografic?.</p>
          </div>
          <Link href="/cronograf" className="btn-primary">Descoper?</Link>
        </div>
      </section>
    </>
  )
}
