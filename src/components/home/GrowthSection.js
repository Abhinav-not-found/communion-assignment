"use client"
import { useState, useEffect, useRef } from "react"
import NumberTicker from "@/fancy/components/text/basic-number-ticker"

const StatItem = ({ value, label }) => {
  return (
    <div className="text-center">
      <p className="text-5xl font-bold">
        <NumberTicker
          from={0}
          target={value}
          autoStart={true}
          transition={{ duration: 2, type: "tween", ease: "easeInOut" }}
        />
        {value < 100 ? "%" : "+"}
      </p>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}

const GrowthSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const stats = [
    { value: 98, label: "Opportunities Expanded" },
    { value: 89, label: "Attendee Satisfaction" },
    { value: 15000, label: "Engaged Participants" },
  ]

  return (
    <section ref={sectionRef} className="py-20">
      <h1 className="text-6xl text-center mb-8">
        Transforming Potential into Impact
      </h1>
      <div className="flex justify-center gap-20">
        {isVisible &&
          stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
      </div>
    </section>
  )
}

export default GrowthSection
