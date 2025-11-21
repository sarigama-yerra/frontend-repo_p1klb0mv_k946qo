import Services from '../components/Services'

export default function ServicesPage(){
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-6">Services</h1>
        <p className="text-[#C6C6C6] mb-10">Choose your service. Lock your time. Leave sharp.</p>
      </div>
      <Services />
    </main>
  )
}
