"use client"

import { Passion_One, Oregano } from "next/font/google"
import Image from "next/image"
import DragElements from "@/fancy/components/blocks/drag-elements"

const passionOne = Passion_One({
  weight: "400",
  subsets: ["latin"],
})

const oregano = Oregano({
  weight: "400",
  subsets: ["latin"],
})

const Page = () => {
  return (
    <div className="h-fit lg:h-screen bg-white mb-20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 px-6 md:px-0">
          <h1 className="text-6xl font-bold mb-2">
            <span className={`${passionOne.className}`}>About </span>
            <span className={`${oregano.className}`}>Us</span>
          </h1>
          <p className="text-xl mt-4">
            Communion is not just another platform—it's a vibrant space that
            unites diverse faiths, beliefs, and traditions. By promoting
            collaboration and connection, we're fostering a world where
            differences become strengths and unity becomes the norm.
          </p>
          <br />
          <p className="text-xl">
            At Communion, we're committed to organizing events that foster
            connections, inspire personal and professional growth, and bring
            people together to share meaningful experiences. From workshops to
            conferences, every event is designed to leave a lasting impact on
            our attendees.
          </p>
        </div>

        <div className="lg:w-1/2 pb-40 md:pb-60 lg:pb-0 h-fit flex items-center justify-center">
          <DragElements dragMomentum={false} className="p-10">
            <div className="lg:p-4 rounded-xl">
              <Image
                src="https://communionhub.org/static/media/moments-2.1ffdbef7fa235e0af2be.avif"
                alt="community picture"
                width={500}
                height={500}
                className="rounded-xl object-cover"
                draggable={false}
              />
            </div>
          </DragElements>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between mt-20">
        <div className="grid grid-cols-2 grid-rows-2 md:flex md:justify-between mt-4 lg:mt-0 lg:flex-row gap-5">
          <Image
            src={
              "https://communionhub.org/static/media/Container-1.ed46993cc886354b9c97.png"
            }
            height={150}
            width={150}
            alt="team picture"
            className="rounded-full md:pt-10 md:mt-10"
          />
          <Image
            src={
              "https://communionhub.org/static/media/Container-2.05468f1ff1c09404bc8c.png"
            }
            height={150}
            width={150}
            alt="team picture"
            className="rounded-full md:pb-10 md:mb-10"
          />
          <Image
            src={
              "https://communionhub.org/static/media/Container-3.2855f4dce539517a8939.png"
            }
            height={150}
            width={150}
            alt="team picture"
            className="rounded-full md:pt-10 md:mt-10"
          />
          <Image
            src={
              "https://communionhub.org/static/media/Container-4.bea586801475a5e10084.png"
            }
            height={150}
            width={150}
            alt="team picture"
            className="rounded-full md:pb-10 md:mb-10"
          />
        </div>
        <div className="lg:w-1/2 lg:ml-20 px-6 md:px-0">
          <h1 className={`text-6xl font-bold ${passionOne.className}`}>
            Our Social Expert Team
          </h1>
          <p className="text-xl mt-4">
            Our expert team blends technology, spirituality, and community
            engagement to create an inclusive platform where everyone can
            connect, share, and grow. Meet the passionate people behind
            Communion's vision!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
