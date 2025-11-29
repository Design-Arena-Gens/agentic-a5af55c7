import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative hero-gradient">
      <div className="container-responsive py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Studio de film modern.
            <span className="block text-white/70">Pove?ti care r?m?n.</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-xl text-base sm:text-lg">
            OWH STUDIO creeaz? filme de autor, emisiuni memorabile ?i reclame ?ndr?zne?e. 
            ?nchiriaz? echipament, descoper? arhiva noastr? ?i achizi?ioneaz? bilete la urm?toarele proiec?ii.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/filme" className="btn-primary">Vezi arhiva de filme</Link>
            <Link href="/rental" className="btn-ghost">?nchiriere camer?</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
