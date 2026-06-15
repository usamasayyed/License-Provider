import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <div className="mb-8 flex justify-center">
        <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/20">
          🏆 Dubai's #1 Free Zone Business Setup Partner
        </span>
      </div>
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Start Your Dubai{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Business</span>
        </span>{' '}
        in 24 Hours
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        100% online company formation. MoFA approved license, guaranteed bank account, visa services — from anywhere in the world.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="#get-started-today">Start My Business Today</Button>
        <Button
          href="#features"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">See How It Works</span>
        </Button>
      </div>
      <div className="mt-36 lg:mt-44 pb-12 border-b border-slate-200">
        <dl className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:max-w-none lg:grid-cols-4 text-center">
          <div className="flex flex-col gap-y-2">
            <dt className="text-base leading-7 text-slate-600">Businesses</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">5,000+</dd>
          </div>
          <div className="flex flex-col gap-y-2">
            <dt className="text-base leading-7 text-slate-600">Setup Time</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">24hrs</dd>
          </div>
          <div className="flex flex-col gap-y-2">
            <dt className="text-base leading-7 text-slate-600">Online</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">100%</dd>
          </div>
          <div className="flex flex-col gap-y-2">
            <dt className="text-base leading-7 text-slate-600">Countries</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">50+</dd>
          </div>
        </dl>
      </div>
    </Container>
  )
}
