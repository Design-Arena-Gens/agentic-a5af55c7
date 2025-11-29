export const metadata = { title: 'Contacte ? OWH STUDIO' }

export default function ContactePage() {
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Contacte</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <form className="card p-6 space-y-4" action="mailto:hello@owh.studio" method="post">
          <div>
            <label className="block text-sm text-white/70">Nume</label>
            <input required name="name" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input required type="email" name="email" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Mesaj</label>
            <textarea required name="message" rows={5} className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
          </div>
          <button className="btn-primary" type="submit">Trimite</button>
        </form>
        <div className="card p-6">
          <h3 className="font-semibold">Date de contact</h3>
          <p className="text-white/80 mt-2">Email: hello@owh.studio</p>
          <p className="text-white/80">Telefon: +40 721 000 000</p>
          <p className="text-white/80 mt-4">Adres?: Str. Filmului 12, Bucure?ti</p>
        </div>
      </div>
    </div>
  )
}
