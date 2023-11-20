import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-700 py-16"
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
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Our Story
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          The company started with small street food markets in 2019 and it grow through the years.
          We can proudly say now that we can cover big musical events, weddings, and many other special occasions.
          </p>
          <Button href="#" color="white" className="mt-10">
            See more
          </Button>
        </div>
      </Container>
    </section>
  )
}
