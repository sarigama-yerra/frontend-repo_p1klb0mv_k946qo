export default function Instagram() {
  return (
    <section className="bg-[#0a0a0a] py-16 border-t border-[#D7A83F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-white">From the Feed</h2>
            <p className="text-[#C6C6C6]">Follow us on Instagram @tuan_thebarber</p>
          </div>
          <a href="https://instagram.com/tuan_thebarber" target="_blank" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-[#D7A83F] text-[#D7A83F] font-semibold uppercase tracking-wide hover:bg-[#D7A83F] hover:text-black transition-colors" rel="noreferrer">Open Instagram</a>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className="aspect-square bg-[#111] border border-[#2A2A2A] rounded-md"></div>
          ))}
        </div>
      </div>
    </section>
  )
}
