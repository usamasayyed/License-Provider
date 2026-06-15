'use client'

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <div className="max-w-lg">
            <p className="font-display text-base font-semibold text-blue-200">
              Get In Touch
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
              Start Your Dubai Journey
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-100">
              Fill the form and our expert will contact you within 60 seconds. Free consultation, no obligation.
            </p>
            
            <ul className="mt-8 space-y-4 text-blue-100">
              <li className="flex gap-3 items-center">
                <span className="text-xl">⚡</span>
                <span>Reply within 60 seconds</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-xl">📞</span>
                <span>Call, WhatsApp, or Email</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-xl">🌍</span>
                <span>Available 24/7, 365 days</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-xl">🛡️</span>
                <span>Free consult, no pressure</span>
              </li>
            </ul>

            <div className="mt-10 pt-10 border-t border-blue-500/30 text-blue-100 space-y-4">
              <div className="flex gap-3 items-center">
                <span className="text-xl">📧</span>
                <a href="mailto:hello@fastlicenseuae.com" className="hover:text-white transition">hello@fastlicenseuae.com</a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-xl">📱</span>
                <a href="tel:800391" className="hover:text-white transition">800-FZ1 (800-391)</a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-xl">📍</span>
                <span>Meydan Hotel, Dubai, UAE</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/20 p-8 sm:p-10">
            <h3 className="text-2xl font-display font-medium text-slate-900">Free Consultation</h3>
            <p className="mt-2 text-slate-600 mb-8">Expert calls you within 60 seconds.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900">Full Name *</label>
                  <input type="text" id="name" placeholder="John Smith" className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" required />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-900">WhatsApp *</label>
                  <input type="tel" id="whatsapp" placeholder="+91 98765 43210" className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900">Email *</label>
                  <input type="email" id="email" placeholder="you@company.com" className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" required />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-slate-900">Country *</label>
                  <input type="text" id="country" placeholder="India, UK, Pakistan..." className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="activity" className="block text-sm font-medium text-slate-900">Business Activity</label>
                  <input type="text" id="activity" placeholder="e.g. Trading, IT..." className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-slate-900">Package</label>
                  <select id="package" className="mt-2 block w-full rounded-md border-0 py-3 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-white">
                    <option value="">Select package</option>
                    <option value="starter">Starter ($9)</option>
                    <option value="business">Small Business ($15)</option>
                    <option value="enterprise">Enterprise ($39)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900">Message</label>
                <textarea id="message" rows={3} placeholder="Any questions..." className="mt-2 block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
              </div>

              <Button type="submit" className="w-full text-center justify-center py-3 text-lg" color="blue">
                Get Free Consultation →
              </Button>
              
              <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                <span>🔒</span> Secure & confidential. Expert calls within 60 seconds.
              </p>
            </form>
          </div>

        </div>
      </Container>
    </section>
  )
}
