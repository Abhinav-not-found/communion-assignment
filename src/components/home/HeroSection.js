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
    <section className="h-screen z-20 mb-[32rem] md:mb-0">
      <div className="py-8">
        <h1 className="text-center text-7xl mt-8 mb-4 leading-16 md:leading-16 lg:leading-normal">
          <span className={`${passionOne.className} text-primary uppercase tracking-tight`}>
            Connecting{" "}
          </span>
          <span className={`${oregano.className}`}>Faiths, </span>
          <span className={`${passionOne.className} text-primary uppercase tracking-tight`}>
            Inspiring{" "}
          </span>
          <span className={`${oregano.className}`}>Unity</span>
        </h1>
        <p className="text-center w-11/12 m-auto md:w-11/12 lg:w-full text-3xl text-muted-foreground">
          Bridging communities through innovation and shared experiences.
        </p>
      </div>
      <div className="mt-20 flex flex-col md:flex-row md:gap-0 lg:gap-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl md:text-7xl text-center md:text-left font-semibold">
            <span className={`${passionOne.className}`}>Connecting </span>
            <span className={`${oregano.className}`}>People </span>
            <span className={`${passionOne.className}`}>Across Faiths & </span>
            <span className={`${oregano.className}`}>Interests</span>
          </h1>
          <p className="mt-8 text-center md:text-start text-lg">
            Communion connects diverse communities, blending spirituality with innovation. Engage,
            inspire, and build lasting connections.
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
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
        <div className="w-full md:w-1/2 relative ml-8 mt-20 md:mt-0 lg:mt-0 md:ml-24 lg:ml-40">
          <div className="flex gap-2">
            <HeroImage
              src="https://communionhub.org/static/media/hero-1.e9ab6d260ce2077bcebe.avif"
              className= "w-40 md:w-60  h-40 md:h-60"
            />
            <HeroImage
              src="https://communionhub.org/static/media/hero-5.a3a92fc524360c0dc26e.avif"
              className= "w-40 md:w-60  h-40 md:h-60 md:mt-14"
            />
          </div>
          <HeroImage
            src="https://communionhub.org/static/media/hero-3.22dd2495b007dee69115.avif"
            className=" w-[20.5rem] h-36 md:w-[20rem] mt-2 md:h-44 md:-mt-12 md:-ml-20"
          />
          <div className="bg-[#04ADEF] w-24 h-8 md:w-32 md:h-14 rounded-full absolute top-32 right-44 md:top-56 lg:top-[15.5rem] lg:right-[16rem] outline-6 md:outline-8 outline-white flex items-center justify-center">
            <VariableFontHoverByRandomLetter
              label="unity"
              staggerDuration={0.03}
              className="rounded-full items-center flex justify-center cursor-pointer align-text-top text-lg md:text-2xl text-white uppercase"
              fromFontVariationSettings="'wght' 400, 'slnt' 0"
              toFontVariationSettings="'wght' 900, 'slnt' 0"
            />
          </div>
          <div className="bg-[#04ADEF] w-14 h-14 md:w-20 md:h-20 rounded-full absolute -top-8 lg:-top-[2rem] right-48 md:right-[10rem] lg:right-[16rem] outline-4 md:outline-8 outline-white flex items-center justify-center">
            <MoveDownRight className="w-6 h-6 md:w-10 md:h-10 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
