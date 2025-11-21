import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Matt R.',
    text: 'Best fades in town. Attention to detail is elite. The shop vibe is clean and professional.',
  },
  {
    name: 'Jerome T.',
    text: 'Booked online, in the chair fast, out looking sharp. Highly recommend the razor finish.',
  },
  {
    name: 'Sofia L.',
    text: 'Took my son for a kids cut—patient, friendly, and the cut was perfect.',
  }
]

export default function Testimonials(){
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold text-white">What Clients Say</h2>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t)=> (
            <div key={t.name} className="bg-[#0f0f0f] border border-[#2A2A2A] rounded-xl p-6">
              <Quote className="text-[#D7A83F]" />
              <p className="mt-3 text-[#C6C6C6]">{t.text}</p>
              <div className="mt-4 text-white font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
