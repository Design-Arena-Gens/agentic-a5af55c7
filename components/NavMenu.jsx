"use client"
import Link from 'next/link'
import { useState } from 'react'

const items = [
  { href: '/filme', label: 'Filme' },
  { href: '/productie-video', label: 'Produc?ie video' },
  { href: '/emisiuni', label: 'Emisiuni' },
  { href: '/rental', label: 'Rental' },
  { href: '/bilete', label: 'Bilete' },
  { href: '/despre', label: 'Despre' },
  { href: '/contacte', label: 'Contacte' },
  { href: '/cronograf', label: 'CRONOGRAF' },
]

export function NavMenu() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <button
        aria-label="Deschide meniul"
        onClick={() => setOpen(!open)}
        className="md:hidden btn-ghost px-3 py-2"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <ul className={`md:flex items-center gap-2 hidden`}>
        {items.map((i) => (
          <li key={i.href}>
            <Link className="px-3 py-2 rounded-full hover:bg-white/10 text-sm" href={i.href}>{i.label}</Link>
          </li>
        ))}
      </ul>
      {open && (
        <ul className="md:hidden absolute left-0 right-0 mt-2 p-2 bg-black/70 backdrop-blur border-t border-white/10">
          {items.map((i) => (
            <li key={i.href}>
              <Link onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg hover:bg-white/10" href={i.href}>{i.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
