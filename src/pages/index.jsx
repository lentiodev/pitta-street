import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryMenu } from '@/components/PrimaryMenu'
import { SecondaryMenu } from '@/components/SecondaryMenu'
import { Testimonials } from '@/components/Testimonials'
import { Events } from '@/components/Events'

export default function Home() {
  return (
    <>
      <Head>
        <title>PittaStreat - A unique taste of traditional Greek street food</title>
        <meta
          name="description"
          content="The delicious taste of the traditional Mediterranean food."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryMenu />
        <SecondaryMenu />
        <Events />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
