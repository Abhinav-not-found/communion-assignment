'use client'
import React from "react"
import Gravity, { MatterBody } from "@/fancy/components/physics/cursor-attractor-and-gravity"

export default function TeamSection() {
  return (
    <section className="w-full h-[80vh] flex flex-col relative justify-center items-center bg-white overflow-hidden mb-10">
      <h2 className="text-5xl font-bold text-black z-0 mt-10">
        Join the <span className="italic text-[#08ACEF]">Community</span>
      </h2>

      <Gravity
        attractorStrength={0.0}
        cursorStrength={0.0004}
        cursorFieldRadius={400}
        className="w-full h-full z-0 absolute"
      >
        {[...Array(80)].map((_, i) => {
          const size = Math.max(50, Math.random() * 100) // Randomized bubble sizes
          return (
            <MatterBody
              key={i}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 100}%`}
            >
              <img
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`}
                alt={`Avatar ${i}`}
                className="rounded-full object-cover border-2 border-white shadow-lg"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            </MatterBody>
          )
        })}
      </Gravity>
    </section>
  )
}
