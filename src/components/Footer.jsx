export default function Footer(){
  return (
    <footer className="bg-black border-t border-[#D7A83F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-extrabold text-xl">Tuan’s Barbershop</div>
          <p className="text-[#C6C6C6] mt-3">1 Library Lane, Suite 103, Tillsonburg, Ontario N4G 4W3</p>
          <a className="text-[#D7A83F] mt-2 inline-block" href="tel:+12267586496">(226) 758-6496</a>
        </div>
        <div>
          <div className="text-white font-semibold uppercase text-sm">Hours</div>
          <ul className="text-[#C6C6C6] mt-3 space-y-1">
            <li>Mon–Thu: 9AM–9PM</li>
            <li>Friday: 6AM–7PM</li>
            <li>Saturday: 6AM–12PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold uppercase text-sm">Booking</div>
          <p className="text-[#C6C6C6] mt-3">Use Setmore to book online in seconds.</p>
          <a href="#book" className="mt-3 inline-flex px-4 py-2 rounded-md bg-[#D7A83F] text-black font-semibold uppercase tracking-wide hover:bg-[#e6b94c] transition-colors">Book Now</a>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-[#C6C6C6] border-t border-[#2A2A2A]">© {new Date().getFullYear()} Tuan’s Barbershop. All rights reserved.</div>
    </footer>
  )
}
