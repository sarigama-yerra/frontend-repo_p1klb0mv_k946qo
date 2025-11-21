export default function BookingPage(){
  return (
    <main className="bg-black min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-4">Book Your Cut</h1>
        <p className="text-[#C6C6C6] mb-8">Pick your barber, service, and time. You’ll get a confirmation instantly.</p>
        <div className="rounded-xl overflow-hidden border border-[#2A2A2A]">
          <iframe title="Setmore" src="https://my.setmore.com/" className="w-full h-[70vh] bg-[#0a0a0a]"></iframe>
        </div>
        <p className="text-[#C6C6C6] mt-4 text-sm">Having trouble? Use the button below to open Setmore in a new tab.</p>
        <a href="https://my.setmore.com/" target="_blank" rel="noreferrer" className="mt-3 inline-flex px-6 py-3 rounded-md bg-[#D7A83F] text-black font-semibold uppercase tracking-wide hover:bg-[#e6b94c] transition-colors">Open Setmore</a>
      </section>
    </main>
  )
}
