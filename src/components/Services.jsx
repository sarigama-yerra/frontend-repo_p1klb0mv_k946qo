import { Scissors, Sparkles, Baby, BadgeCheck, Ruler, Wand2 } from 'lucide-react'

const services = [
  { name: 'Men’s Haircut', desc: 'Clean, classic, or modern cuts tailored to you.', price: 'From $30', icon: Scissors },
  { name: 'Fade Cut', desc: 'Precision fades with razor-sharp detailing.', price: 'From $35', icon: Ruler },
  { name: 'Beard Trim', desc: 'Tidy shape and length with clean edges.', price: 'From $15', icon: BadgeCheck },
  { name: 'Beard Sculpt & Line-Up', desc: 'Premium sculpt with razor finish.', price: 'From $25', icon: Sparkles },
  { name: 'Hot Towel Shave', desc: 'Traditional hot towel and close shave.', price: 'From $30', icon: Wand2 },
  { name: 'Kids Cut', desc: 'Gentle, patient cuts for kids.', price: 'From $20', icon: Baby },
  { name: 'Senior Cut', desc: 'Respectful care and timeless styles.', price: 'From $22', icon: BadgeCheck },
  { name: 'Grooming Packages', desc: 'Bundle hair + beard for a full refresh.', price: 'From $50', icon: Sparkles },
  { name: 'Razor / Straight Blade Finish', desc: 'Ultra-clean razor finish.', price: 'From $10', icon: Wand2 },
  { name: 'Custom Designs (Ice-T specialty)', desc: 'Freestyle designs by Ice-T Cuts.', price: 'From $40', icon: Sparkles },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-16 border-t border-[#D7A83F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Services</h2>
          <p className="text-[#C6C6C6] mt-2">Sharp, consistent, and tailored to your look.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="group relative bg-[#111] border border-[#2A2A2A] hover:border-[#D7A83F]/50 rounded-xl p-5 transition-colors">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md bg-black border border-[#2A2A2A]"><s.icon className="text-[#D7A83F]" size={22} /></div>
                <span className="text-xs text-[#C6C6C6] uppercase tracking-wider">{s.price}</span>
              </div>
              <h3 className="mt-4 text-white text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-sm text-[#C6C6C6]">{s.desc}</p>
              <div className="mt-4">
                <a href="#book" className="inline-flex px-4 py-2 rounded-md bg-[#D7A83F] text-black font-semibold uppercase tracking-wide hover:bg-[#e6b94c] transition-colors">Book Now</a>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#D7A83F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
