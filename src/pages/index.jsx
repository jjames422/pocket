import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Motsinger - Security with a name </title>
        <meta
          name="description"
          content="By utilizing knowledge gained from our extensive network of web development professionals, you'll have the precise guidance on when to implement strategic updates to maximize your online success, and when to make changes to avoid setbacks and complications."
          keywords="web development, programming, coding, website design, front-end, back-end, VPS, virutal machines, hosting provider, Email, Cloud"
          author="Jonathan M. James"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Reviews /> */}
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
