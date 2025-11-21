import Hero from '../components/Hero'
import Services from '../components/Services'
import Barbers from '../components/Barbers'
import Instagram from '../components/Instagram'
import Testimonials from '../components/Testimonials'

export default function Home(){
  return (
    <main>
      <Hero />
      <Services />
      <Barbers compact />
      <Instagram />
      <Testimonials />
      <section id="book" className="bg-[#0a0a0a] py-16 border-t border-[#D7A83F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-4">Book Now</h2>
          <p className="text-[#C6C6C6] mb-6">Use our Setmore booking platform to lock in your time.</p>
          <a href="https://my.setmore.com/" target="_blank" rel="noreferrer" className="inline-flex px-6 py-3 rounded-md bg-[#D7A83F] text-black font-semibold uppercase tracking-wide hover:bg-[#e6b94c] transition-colors">Open Setmore</a>
        </div>
      </section>
    </main>
  )
}
