import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/barbers', label: 'Barbers' },
  { to: '/services', label: 'Services' },
  { to: '/booking', label: 'Booking' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70 border-b border-[#D7A83F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/tuan-logo.png" alt="Tuan's Barbershop" className="h-10 w-auto object-contain" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <div className="text-white font-extrabold tracking-wide text-lg">
              Tuan’s Barbershop
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({isActive})=>`text-sm uppercase tracking-wider ${isActive ? 'text-white' : 'text-[#C6C6C6] hover:text-white'} transition-colors`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#book" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#D7A83F] text-black font-semibold uppercase tracking-wide hover:bg-[#e6b94c] transition-colors">
              Book Now
            </a>
            <a href="tel:+12267586496" className="text-[#C6C6C6] hover:text-white inline-flex items-center gap-2">
              <Phone size={18} /> (226) 758-6496
            </a>
          </div>

          <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#D7A83F]/20">
          <div className="px-4 py-3 space-y-2 bg-black/90">
            {navItems.map((item)=>(
              <NavLink key={item.to} to={item.to} onClick={()=>setOpen(false)} className={({isActive})=>`block py-2 ${isActive ? 'text-white' : 'text-[#C6C6C6]'}`}>
                {item.label}
              </NavLink>
            ))}
            <a href="#book" onClick={()=>setOpen(false)} className="block py-2 text-[#D7A83F] font-semibold">Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
