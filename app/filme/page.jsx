import Link from 'next/link'
import Image from 'next/image'
import films from '@/data/films.json'

export const metadata = { title: 'Filme ? OWH STUDIO' }

export default function FilmePage() {
  return (
    <div className="container-responsive py-12 sm:py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold">Arhiv? filme</h1>
          <p className="text-white/80 mt-2">Selec?ie de produc?ii OWH STUDIO.</p>
        </div>
      </div>
      <div className="mt-8 grid-auto-fit">
        {films.map((f) => (
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
    </div>
  )
}
