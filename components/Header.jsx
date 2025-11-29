import Link from 'next/link'
import { NavMenu } from './NavMenu'

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10 gradient-header">
      <div className="container-responsive flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="inline-block h-8 w-8 rounded-lg bg-brand-500"></span>
          <span className="font-semibold tracking-wide">OWH STUDIO</span>
        </Link>
        <NavMenu />
      </div>
    </header>
  )
}
