'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotSetup24h from '@/images/screenshots/setup-24h.png'
import screenshotOnline100 from '@/images/screenshots/online-100.png'
import screenshotBankAccount from '@/images/screenshots/bank-account.png'
import screenshotMofaApproved from '@/images/screenshots/mofa-approved.png'
import screenshotActivities2500 from '@/images/screenshots/activities-2500.png'
import screenshotMainlandAccess from '@/images/screenshots/mainland-access.png'

const features = [
  {
    title: '24-Hour Setup',
    description:
      'Trade license delivered in as little as 24 hours, fully digital and ready for business.',
    image: screenshotSetup24h,
  },
  {
    title: '100% Online',
    description:
      'No Dubai visit needed. Complete everything remotely from anywhere in the world.',
    image: screenshotOnline100,
  },
  {
    title: 'Bank Account',
    description:
      'Guaranteed corporate IBAN with 26+ banking partners and fast onboarding support.',
    image: screenshotBankAccount,
  },
  {
    title: 'MoFA Approved',
    description:
      'Globally recognized LLC license approved by the Ministry of Foreign Affairs.',
    image: screenshotMofaApproved,
  },
  {
    title: '2,500+ Activities',
    description:
      '3 activity groups under 1 license — any combination you need.',
    image: screenshotActivities2500,
  },
  {
    title: 'Mainland Access',
    description: 'Operate on Dubai mainland without a separate license.',
    image: screenshotMainlandAccess,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')
  let [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt="osama"
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to run your books.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          {() => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <Tab
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 text-left ui-not-focus-visible:outline-none lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3
                        className={clsx(
                          'font-display text-lg',
                          selectedIndex === featureIndex
                            ? 'text-blue-600 lg:text-white'
                            : 'text-blue-100 hover:text-white lg:text-white',
                        )}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt="osama"
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
