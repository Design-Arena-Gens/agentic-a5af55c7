import Image from 'next/image'
import films from '@/data/films.json'

export async function generateStaticParams() {
  return films.map(f => ({ slug: f.slug }))
}

export function generateMetadata({ params }) {
  const film = films.find(f => f.slug === params.slug)
  return { title: film ? `${film.title} ? OWH STUDIO` : 'Film ? OWH STUDIO' }
}

export default function FilmPage({ params }) {
  const film = films.find(f => f.slug === params.slug)
  if (!film) return <div className="container-responsive py-16">Film indisponibil.</div>

  return (
    <article className="container-responsive py-8 sm:py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="card overflow-hidden">
          <div className="aspect-[16/9] relative">
            <Image src={film.cover} alt={film.title} fill className="object-cover"/>
          </div>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold">{film.title}</h1>
          <p className="text-white/70 mt-2">{film.year} ? {film.duration} min</p>
          <p className="mt-6 text-white/80 leading-relaxed">{film.synopsis}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {Object.entries(film.crew).map(([role, name]) => (
              <div key={role} className="bg-white/5 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-white/60">{role}</p>
                <p className="mt-1 font-medium">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
