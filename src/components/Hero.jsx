import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-black">
      <div className="absolute inset-0">
        {/* Fallback hero image if provided in /public */}
        <img
          src="/shop-hero.jpg"
          alt="Tuan's Barbershop interior"
          className="w-full h-full object-cover opacity-50"
          onError={(e)=>{e.currentTarget.style.display='none'}}
        />
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <span className="inline-block uppercase tracking-widest text-[10px] sm:text-xs text-[#C6C6C6] mb-4">Tilsonburg, Ontario</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Tilsonburg’s Freshest Cuts & Cleanest Fades
          </h1>
          <p className="mt-4 text-[#C6C6C6] max-w-2xl">
            Walk-ins welcome. Book online in seconds. Precision fades, sharp lines, and premium grooming with a high-end vibe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#book" className="px-6 py-3 rounded-md bg-[#D7A83F] text-black font-semibold uppercase tracking-wide hover:bg-[#e6b94c] transition-colors">
              Book Now
            </a>
            <a href="#barbers" className="px-6 py-3 rounded-md border border-[#D7A83F] text-[#D7A83F] font-semibold uppercase tracking-wide hover:bg-[#D7A83F] hover:text-black transition-colors">
              Meet the Barbers
            </a>
          </div>
        </div>
      </div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D7A83F] to-transparent" />
    </section>
  )
}
