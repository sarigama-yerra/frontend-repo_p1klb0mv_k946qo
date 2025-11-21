const barbers = [
  {
    name: 'Tuan',
    title: 'Owner & Master Barber',
    specialties: 'Precision fades, straight-blade detailing, premium beard sculpting',
    style: 'Clean, sharp, modern technical cuts',
    bio: 'Confident, steady-handed, and obsessed with detail. Tuan leads the shop with a commitment to precision, consistency, and service. From modern fades to clean razor finishes, every cut is intentional and refined.',
    link: '#book-tuan',
  },
  {
    name: 'Wilson',
    title: 'Senior Barber',
    specialties: 'Classic cuts, beard trims, taper fades, scissor work',
    style: 'Patient, detail-oriented',
    bio: 'Reliable and experienced, Wilson brings a classic skillset with modern polish. He takes the time to understand your look and delivers a clean, balanced cut every time.',
    link: '#book-wilson',
  },
  {
    name: 'Charlene',
    title: 'Barber',
    specialties: 'Kids cuts, scissor work, textured hairstyles',
    style: 'Friendly, creative, light touch',
    bio: 'Warm and approachable, Charlene has a natural ease with people and a precise eye for shape. Great with kids and textured hair, she blends creativity with care.',
    link: '#book-charlene',
  },
  {
    name: 'Trimar (Ice-T Cuts)',
    title: 'Barber',
    specialties: 'Urban fades, freestyle designs, beard shaping',
    style: 'High-energy, artistic, trend-forward',
    bio: 'Bold and modern, Ice-T brings edge and artistry to every session. Known for crisp fades and freestyle designs that turn heads.',
    link: '#book-icet',
  },
]

export default function Barbers({ compact = false }) {
  return (
    <section id="barbers" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Meet the Barbers</h2>
            <p className="text-[#C6C6C6] mt-2">Skilled hands. Sharp results.</p>
          </div>
          {!compact && (
            <a href="/barbers" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-[#D7A83F] text-[#D7A83F] font-semibold uppercase tracking-wide hover:bg-[#D7A83F] hover:text-black transition-colors">View All</a>
          )}
        </header>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${compact ? 'lg:grid-cols-4' : ''}`}>
          {barbers.map((b) => (
            <article key={b.name} className="group bg-[#0f0f0f] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#D7A83F]/60 transition-colors">
              <div className="h-44 bg-gradient-to-br from-[#2A2A2A] to-black flex items-end justify-end p-3">
                <div className="text-right">
                  <div className="text-xs text-[#C6C6C6]">{b.title}</div>
                  <h3 className="text-xl font-bold text-white">{b.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#C6C6C6]"><span className="text-white font-semibold">Specialties:</span> {b.specialties}</p>
                <p className="mt-2 text-sm text-[#C6C6C6]"><span className="text-white font-semibold">Style:</span> {b.style}</p>
                <p className="mt-3 text-sm text-[#C6C6C6]">{b.bio}</p>
                <a href={b.link} className="mt-4 inline-flex px-4 py-2 rounded-md bg-[#D7A83F] text-black font-semibold uppercase tracking-wide hover:bg-[#e6b94c] transition-colors">Book With {b.name}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
