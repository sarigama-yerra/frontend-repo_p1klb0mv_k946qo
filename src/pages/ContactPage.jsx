export default function ContactPage(){
  return (
    <main className="bg-black min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-6">Contact</h1>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-[#0f0f0f] border border-[#2A2A2A] rounded-xl p-6">
              <div className="text-white font-semibold">Address</div>
              <p className="text-[#C6C6C6]">1 Library Lane, Suite 103, Tillsonburg, Ontario N4G 4W3</p>
              <div className="text-white font-semibold mt-4">Phone</div>
              <a className="text-[#D7A83F]" href="tel:+12267586496">(226) 758-6496</a>
              <div className="text-white font-semibold mt-4">Hours</div>
              <ul className="text-[#C6C6C6] mt-2 space-y-1">
                <li>Mon–Thu: 9AM–9PM</li>
                <li>Friday: 6AM–7PM</li>
                <li>Saturday: 6AM–12PM</li>
                <li>Sunday: Closed</li>
              </ul>
              <div className="text-white font-semibold mt-4">Parking</div>
              <p className="text-[#C6C6C6]">Plenty of street and lot parking nearby. Use the main entrance at Library Lane.</p>
            </div>
            <form className="mt-6 bg-[#0f0f0f] border border-[#2A2A2A] rounded-xl p-6 space-y-4">
              <div>
                <label className="block text-sm text-[#C6C6C6]">Name</label>
                <input className="mt-1 w-full bg-black border border-[#2A2A2A] rounded-md px-3 py-2 text-white" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-[#C6C6C6]">Email</label>
                <input className="mt-1 w-full bg-black border border-[#2A2A2A] rounded-md px-3 py-2 text-white" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm text-[#C6C6C6]">Message</label>
                <textarea className="mt-1 w-full bg-black border border-[#2A2A2A] rounded-md px-3 py-2 text-white" rows="4" placeholder="How can we help?" />
              </div>
              <button type="button" className="inline-flex px-6 py-3 rounded-md bg-[#D7A83F] text-black font-semibold uppercase tracking-wide hover:bg-[#e6b94c] transition-colors">Send</button>
            </form>
          </div>
          <div>
            <div className="aspect-video rounded-xl overflow-hidden border border-[#2A2A2A]">
              <iframe title="Map" className="w-full h-full" src="https://www.google.com/maps?q=1%20Library%20Lane,%20Tillsonburg,%20Ontario&output=embed"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
