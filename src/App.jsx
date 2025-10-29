import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1516302350523-8e0b3a2a7f4b?q=80&w=1600&auto=format&fit=crop",
  about: "https://images.unsplash.com/photo-1526403224746-0b4a7c8d8d6b?q=80&w=1600&auto=format&fit=crop",
  facility: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
  veterans: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
  contact: "https://images.unsplash.com/photo-1475855581690-80accde3ae57?q=80&w=1600&auto=format&fit=crop",
  gallery1: "https://images.unsplash.com/photo-1519723894445-6a9b3b6f2f3b?q=80&w=800&auto=format&fit=crop",
  gallery2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  gallery3: "https://images.unsplash.com/photo-1496611654493-86d6a0e6d5e4?q=80&w=800&auto=format&fit=crop",
  gallery4: "https://images.unsplash.com/photo-1514511011646-0b7f6c6a4c3d?q=80&w=800&auto=format&fit=crop"
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <Hero />
        <About />
        <Services />
        <VeteransProgram />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-2xl font-bold text-gray-100">RR</div>
          <div>
            <div className="text-xl font-semibold text-logo">The Recoil Room</div>
            <div className="text-sm text-gray-400">recoilroomrange.shop</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#veterans" className="hover:text-white">Veterans</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#booking" className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-2 rounded-md font-semibold">Book</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Recoil Room — Precision · Community · Recovery
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl">
          Veteran-owned indoor shooting range offering lane rentals, training, and our Recoil Room Veterans Recovery program. Clean, safe, and professional — built by shooters for shooters.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#booking" className="inline-block px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold">Book a Lane</a>
          <a href="#veterans" className="inline-block px-6 py-3 rounded-lg border border-gray-700 text-gray-300">Veterans Program</a>
        </div>
      </motion.div>

      <div className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800 to-black">
        <img src={IMAGES.hero} alt="Range hero" className="w-full h-72 md:h-96 object-cover opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
    </section>
  )
}
