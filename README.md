import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

// Single-file React app for recoilroomrange.shop
// Tailwind is used for styling (no import needed). This file defaults-export a React component.

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <Hero />
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
          <div className="w-12 h-12 rounded-md bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-2xl font-bold">RR</div>
          <div>
            <div className="text-xl font-semibold">Recoil Room</div>
            <div className="text-sm text-gray-400">recoilroomrange.shop</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#veterans" className="hover:text-white">Veterans</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#booking" className="hover:text-white">Book a Lane</a>
          <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-black px-3 py-2 rounded-md font-semibold">Contact</a>
        </nav>
        <div className="md:hidden text-sm">Menu</div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Recoil Room — Precision · Community · Recovery</h1>
        <p className="mt-4 text-gray-300 max-w-xl">Veteran-owned indoor shooting range offering lane rentals, training, and our Recoil Room Veterans Recovery program. Clean, safe, and professional — built by shooters for shooters.</p>
        <div className="mt-6 flex gap-4">
          <a href="#booking" className="inline-block px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold">Book a Lane</a>
          <a href="#veterans" className="inline-block px-6 py-3 rounded-lg border border-gray-700 text-gray-300">Veterans Program</a>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-400">
          <li>Open: Mon–Sat • 10:00–20:00</li>
          <li>4 lanes · Up to 25 yd s</li>
          <li>Lane rate: $30/hr</li>
          <li>Memberships & gift cards available</li>
        </ul>
      </motion.div>

      <div className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800 to-black">
        <div className="h-72 md:h-96 flex items-center justify-center">
          {/* Replace with a hero image for production (use an image URL or imported asset) */}
          <div className="text-center text-gray-400">
            <div className="text-2xl font-semibold">Your Range Image Here</div>
            <div className="text-sm mt-2">High-resolution photo of lane / shooters / inside the facility</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="mt-12">
      <h2 className="text-2xl font-bold">Range Info & Services</h2>
      <p className="text-gray-400 mt-2 max-w-2xl">We offer hourly lane rentals, private training, events, and memberships. Safety is our top priority — all shooters must follow posted rules and complete a brief safety orientation on first visit.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-850">
          <CardContent>
            <h3 className="text-lg font-semibold">Lane Rentals</h3>
            <p className="text-gray-400 mt-2">$30 / hour per lane. Rentals include basic targets and lane time.</p>
            <ul className="mt-4 text-gray-400">
              <li>Up to 2 shooters per lane</li>
              <li>Longer distances on select lanes</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Training & Classes</h3>
            <p className="text-gray-400 mt-2">Basic pistol safety, advanced tactics, and private coaching by vetted instructors.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold">Memberships</h3>
            <p className="text-gray-400 mt-2">Monthly plans for frequent shooters. Members get priority booking and discounts on training.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function VeteransProgram() {
  return (
    <section id="veterans" className="mt-12">
      <h2 className="text-2xl font-bold">Recoil Room Veterans Recovery</h2>
      <p className="text-gray-400 mt-2 max-w-2xl">Our veterans program pairs certified instructors with veterans for skill-building, community, and therapeutic shooting sessions. We run group sessions twice weekly and offer sliding-scale pricing and grant-supported slots.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg p-6 bg-gradient-to-br from-gray-800 to-gray-900">
          <h3 className="font-semibold">Program Highlights</h3>
          <ul className="mt-3 text-gray-300 list-disc list-inside">
            <li>Group classes twice weekly</li>
            <li>Qualified, veteran instructors</li>
            <li>Grant-supported spots available</li>
            <li>Safe, supportive environment</li>
          </ul>
        </div>

        <div className="rounded-lg p-6 bg-gray-850">
          <h3 className="font-semibold">How to Apply</h3>
          <p className="text-gray-300 mt-2">Email our program coordinator with your name, service dates, and a brief note about why you'd like to join. We can assist with transportation for qualifying vets.</p>
          <div className="mt-4">
            <a href="mailto:programs@recoilroomrange.shop" className="inline-block px-4 py-2 rounded-md bg-gray-100 text-gray-900 font-semibold">Email the Program</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="mt-12">
      <h2 className="text-2xl font-bold">Gallery</h2>
      <p className="text-gray-400 mt-2">Photos from the range, training sessions, and events. Replace placeholders with production photos.</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-40 rounded-md bg-gray-800 flex items-center justify-center text-gray-500">Photo {i + 1}</div>
        ))}
      </div>
    </section>
  )
}

function Booking() {
  return (
    <section id="booking" className="mt-12">
      <h2 className="text-2xl font-bold">Book a Lane</h2>
      <p className="text-gray-400 mt-2">Instant booking coming soon. For now, request a booking using the form or call us directly.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="space-y-4 bg-gray-850 rounded-lg p-6">
          <label className="block">
            <span className="text-sm text-gray-300">Name</span>
            <input className="mt-1 block w-full rounded bg-gray-900 border border-gray-700 px-3 py-2" placeholder="Your name" />
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Email</span>
            <input className="mt-1 block w-full rounded bg-gray-900 border border-gray-700 px-3 py-2" placeholder="you@example.com" />
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Date & Time</span>
            <input type="datetime-local" className="mt-1 block w-full rounded bg-gray-900 border border-gray-700 px-3 py-2" />
          </label>

          <Button className="w-full">Request Booking</Button>
        </form>

        <div className="rounded-lg p-6 bg-gradient-to-br from-gray-800 to-gray-900">
          <h3 className="font-semibold">Walk-ins & Rentals</h3>
          <p className="text-gray-300 mt-2">We accept walk-ins based on availability. Firearm rentals and ammo sales are available onsite. Please bring valid ID and follow our safety rules.</p>
          <div className="mt-4 space-y-2 text-gray-300">
            <div className="flex items-center gap-2"><Phone size={16} /> (555) 555-5555</div>
            <div className="flex items-center gap-2"><MapPin size={16} /> Bryan, OH</div>
            <div className="flex items-center gap-2"><Mail size={16} /> info@recoilroomrange.shop</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mt-12">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="text-gray-400 mt-2">Questions? Bookings? Partner inquiries? Drop us a line or visit during business hours.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg p-6 bg-gray-850">
          <h4 className="font-semibold">Address</h4>
          <p className="text-gray-300 mt-2">[Street Address]<br />Bryan, OH</p>
        </div>

        <div className="rounded-lg p-6 bg-gray-850">
          <h4 className="font-semibold">Hours</h4>
          <p className="text-gray-300 mt-2">Mon–Sat: 10:00–20:00<br />Sun: Closed</p>
        </div>

        <div className="rounded-lg p-6 bg-gray-850">
          <h4 className="font-semibold">Get in touch</h4>
          <p className="text-gray-300 mt-2">Email: info@recoilroomrange.shop<br />Phone: (555) 555-5555</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-800 bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Recoil Room — All rights reserved.</div>
        <div className="text-sm">Veteran-owned • Safety-first • Bryan, OH</div>
      </div>
    </footer>
  )
}
