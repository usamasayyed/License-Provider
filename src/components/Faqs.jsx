import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How long does it take to get my trade license?',
      answer:
        'With FastLicense, you can get your Dubai trade license in as little as 18 hours once all documents are submitted.',
    },
    {
      question: 'Do I need to travel to Dubai to set up my company?',
      answer: 'No, our process is 100% online. You can complete the entire setup from the comfort of your home anywhere in the world.',
    },
    {
      question: 'Are there any hidden fees in your pricing?',
      answer:
        'Absolutely not. We believe in 100% transparency. The price you see is the price you pay, with no surprise costs.',
    },
  ],
  [
    {
      question: 'Will you help me open a corporate bank account?',
      answer:
        'Yes! We partner with leading UAE banks and will guide you through the entire account opening process.',
    },
    {
      question:
        'Do you provide residency visa support?',
      answer:
        'Yes, our packages include full support for investor and employee visas, making your relocation seamless.',
    },
    {
      question:
        'What documents do I need to provide?',
      answer:
        'Usually, all we need is a clear passport copy, a recent utility bill for proof of address, and your proposed company names.',
    },
  ],
  [
    {
      question: 'Can I own 100% of my company as a foreigner?',
      answer:
        'Yes, recent changes in UAE law allow expats to have 100% foreign ownership in most business activities, especially in Free Zones.',
    },
    {
      question: 'Do I need to rent a physical office?',
      answer: 'Not necessarily. Many of our Free Zone packages include a virtual office or flexi-desk setup, which is sufficient for your license.',
    },
    {
      question: 'What types of business activities are allowed?',
      answer:
        'There are thousands of permitted activities, ranging from e-commerce and IT consulting to trading and logistics. We will help you choose the right one.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and someone will get back to you right away.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
