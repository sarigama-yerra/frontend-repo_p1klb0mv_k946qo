export default function AboutPage(){
  return (
    <main className="bg-black min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-4">Our Story</h1>
            <p className="text-[#C6C6C6] mb-4">Tuan built this shop on precision and pride. From day one, the goal was simple: deliver clean, consistent cuts in a space that feels high-end and welcoming. Today, Tuan’s Barbershop is a pillar in Tillsonburg—known for sharp fades, razor finishes, and a standard of service that keeps clients coming back.</p>
            <p className="text-[#C6C6C6] mb-4">Every barber on the team brings skill and character. We’re technicians and hosts—focused on detail, timing, and making sure you leave confident. Community matters to us. We support local initiatives and treat every client like a regular.</p>
            <p className="text-[#C6C6C6]">Whether it’s your weekly clean-up or a full transformation, we’ve got the hands for it.</p>
          </div>
          <div>
            <div className="aspect-video rounded-xl overflow-hidden border border-[#2A2A2A]">
              <img src="/shop-hero.jpg" alt="Shop Interior" className="w-full h-full object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
            </div>
            <div className="mt-6 bg-[#0f0f0f] border border-[#2A2A2A] rounded-xl p-6">
              <div className="text-white font-extrabold text-xl">Tuan’s Barbershop</div>
              <p className="text-[#C6C6C6] mt-2">1 Library Lane, Suite 103, Tillsonburg, Ontario N4G 4W3</p>
              <a href="tel:+12267586496" className="text-[#D7A83F] mt-2 inline-block">(226) 758-6496</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
