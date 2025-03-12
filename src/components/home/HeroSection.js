import React from 'react'
import { Passion_One, Oregano } from 'next/font/google'
import Link from 'next/link'
import { MoveDownRight } from 'lucide-react'
import VariableFontHoverByRandomLetter from "@/fancy/components/text/variable-font-hover-by-random-letter"


const passionOne = Passion_One({
  weight: '400',
  subsets: ['latin'],
})
const oregano = Oregano({
  weight: '400',
  subsets: ['latin'],
})

const HeroImage = ({ src, className }) => {
  return (
    <div
      style={{ backgroundImage: `url('${src}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      className={`rounded-xl ${className}`}
    ></div>
  )
}

const HeroSection = () => {
  return (
    <section className="h-screen z-20">
      <div className="py-8">
        <h1 className="text-center text-7xl mt-8 mb-4">
          <span className={`${passionOne.className} text-primary uppercase tracking-tight`}>
            Connecting{" "}
          </span>
          <span className={`${oregano.className}`}>Faiths, </span>
          <span className={`${passionOne.className} text-primary uppercase tracking-tight`}>
            Inspiring{" "}
          </span>
          <span className={`${oregano.className}`}>Unity</span>
        </h1>
        <p className="text-center text-3xl text-muted-foreground">
          Bridging communities through innovation and shared experiences.
        </p>
      </div>
      <div className="mt-20 flex gap-20">
        <div className="w-1/2">
          <h1 className="text-7xl font-semibold">
            <span className={`${passionOne.className}`}>Connecting </span>
            <span className={`${oregano.className}`}>People </span>
            <span className={`${passionOne.className}`}>Across Faiths & </span>
            <span className={`${oregano.className}`}>Interests</span>
          </h1>
          <p className="mt-8 text-lg">
            Communion connects diverse communities, blending spirituality with innovation. Engage,
            inspire, and build lasting connections.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link href="/event" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Explore Events</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
            <Link
              href="/about"
              className="rounded-full px-5 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#08ACEF] text-[#08ACEF] "
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#08ACEF] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-[#08ACEF] transition duration-300 group-hover:text-white ease">
                Learn more
              </span>
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative ml-40">
          <div className="flex gap-2">
            <HeroImage
              src="https://communionhub.org/static/media/hero-1.e9ab6d260ce2077bcebe.avif"
              className="w-60 h-60"
            />
            <HeroImage
              src="https://communionhub.org/static/media/hero-5.a3a92fc524360c0dc26e.avif"
              className="w-60 h-60 mt-14"
            />
          </div>
          <HeroImage
            src="https://communionhub.org/static/media/hero-3.22dd2495b007dee69115.avif"
            className="w-[20rem] h-44 -mt-12 -ml-20"
          />
          <div className="bg-[#04ADEF] w-32 h-14 rounded-full absolute top-[15.5rem] right-[16rem] outline-8 outline-white flex items-center justify-center">
            <VariableFontHoverByRandomLetter
              label="unity"
              staggerDuration={0.03}
              className="rounded-full items-center flex justify-center cursor-pointer align-text-top text-2xl text-white uppercase"
              fromFontVariationSettings="'wght' 400, 'slnt' 0"
              toFontVariationSettings="'wght' 900, 'slnt' 0"
            />
          </div>
          <div className="bg-[#04ADEF] w-20 h-20 rounded-full absolute -top-[2rem] right-[16rem] outline-8 outline-white flex items-center justify-center">
            <MoveDownRight className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
