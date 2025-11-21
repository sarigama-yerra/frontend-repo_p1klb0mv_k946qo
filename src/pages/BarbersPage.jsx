import Barbers from '../components/Barbers'

export default function BarbersPage(){
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-6">Meet the Barbers</h1>
        <p className="text-[#C6C6C6] mb-10">Four pros. One standard: clean, consistent, quality cuts.</p>
      </div>
      <Barbers />
    </main>
  )
}
