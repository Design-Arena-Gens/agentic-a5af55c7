export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-responsive py-10 text-sm text-white/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>? {new Date().getFullYear()} OWH STUDIO. Toate drepturile rezervate.</p>
        <p className="opacity-80">Creat cu drag pentru cinema.</p>
      </div>
    </footer>
  )
}
