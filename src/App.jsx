import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BarbersPage from './pages/BarbersPage'
import ServicesPage from './pages/ServicesPage'
import BookingPage from './pages/BookingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barbers" element={<BarbersPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
