"use client"

import React, { useRef } from "react"
import NavbarLinks from "./NavbarLinks"
import Link from "next/link"
import VariableFontCursorProximity from "@/fancy/components/text/variable-font-cursor-proximity"

const Navbar = () => {
  const containerRef = useRef(null)

  return (
    <nav className="flex items-center justify-between h-14 px-4 md:px-0 lg:px-0" ref={containerRef}>
      <div className="text-xl font-semibold">
        <Link href={"/"}>
          <VariableFontCursorProximity
            label="Communion"
            className="text-xl font-semibold"
            fromFontVariationSettings="'wght' 400, 'slnt' 0"
            toFontVariationSettings="'wght' 900, 'slnt' -10"
            radius={100}
            containerRef={containerRef}
          />
        </Link>
      </div>
      <div className="text-lg md:text-xl lg:text-xl flex gap-4 capitalize">
        <NavbarLinks />
      </div>
    </nav>
  )
}

export default Navbar
