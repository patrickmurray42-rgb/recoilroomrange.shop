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

function About() {
  return (
    <section id="about" className="py-16 border-t border-gray-800">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img src={IMAGES.about} alt="About" className="rounded-xl shadow-lg object-cover h-80 w-full" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-4">About The Recoil Room</h2>
          <p className="text-gray-300 mb-4">
            Founded by veterans, The Recoil Room is built around precision, safety, and brotherhood. Whether you're a seasoned marksman or a beginner, our goal is to provide a world-class shooting experience in a clean and secure environment.
          </p>
          <p className="text-gray-300">
            We also serve our local community through our Veterans Recovery Program — using marksmanship and camaraderie to support mental health and healing for those who’ve served.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-16 border-t border-gray-800">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-4">Our Facility & Services</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• 4 modern, climate-controlled lanes</li>
            <li>• Firearm rentals & bulk ammo</li>
            <li>• Private instruction and safety training</li>
            <li>• Veteran group events and therapy sessions</li>
            <li>• Retail and gear sales</li>
          </ul>
        </motion.div>
        <img src={IMAGES.facility} alt="Facility" className="rounded-xl shadow-lg object-cover h-80 w-full" />
      </div>
    </section>
  )
}

function VeteransProgram() {
  return (
    <section id="veterans" className="py-16 border-t border-gray-800">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img src={IMAGES.veterans} alt="Veterans Program" className="rounded-xl shadow-lg object-cover h-80 w-full" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-4">Recoil Room Veterans Recovery</h2>
          <p className="text-gray-300 mb-4">
            Our Veterans Recovery Program helps service members reconnect, rebuild focus, and find peace through precision shooting and camaraderie. Sessions are held twice weekly and combine skill-building with supportive discussion.
          </p>
          <a href="#contact" className="inline-block px-6 py-3 mt-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
            Join Our Veterans Program
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Gallery() {
  const gallery = [IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4]
  return (
    <section id="gallery" className="py-16 border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((src, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }}>
            <img src={src} alt={`gallery-${i}`} className="rounded-lg object-cover h-48 w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Booking() {
  return (
    <section id="booking" className="py-16 border-t border-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-4">Book a Lane</h2>
      <p className="text-gray-300 mb-6">
        Ready to hit the range? Reserve your lane today and experience The Recoil Room difference.
      </p>
      <a href="#contact" className="inline-block px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
        Reserve Now
      </a>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-gray-800">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            Have questions, want to learn more about our veteran program, or ready to book a session? Get in touch below.
          </p>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-2"><MapPin size={18}/> Bryan, Ohio</p>
            <p className="flex items-center gap-2"><Phone size={18}/> (555) 123-4567</p>
            <p className="flex items-center gap-2"><Mail size={18}/> info@recoilroomrange.shop</p>
          </div>
        </motion.div>

        <form
          action="https://formspree.io/f/xwkggkll"
          method="POST"
          className="bg-gray-800 rounded-xl p-6 space-y-4 shadow-lg"
        >
          <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-100" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-100" />
          <textarea name="message" rows="4" placeholder="Your Message" className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-100"></textarea>
          <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} The Recoil Room — Veteran Owned & Operated
    </footer>
  )
}
