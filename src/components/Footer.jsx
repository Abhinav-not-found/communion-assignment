"use client";

import React, { useRef } from "react";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import NavbarLinks from "./NavbarLinks";
import TextCursorProximity from "@/fancy/components/text/text-cursor-proximity";

const Footer = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="sticky bottom-0 z-0 h-auto bg-[#08ACEF] text-white flex flex-col pt-4"
    >
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between px-2 mb-5 md:mb-0 lg:mb-0">
        <h1 className="text-4xl capitalize flex gap-2">
          <TextCursorProximity
            label="Gathering"
            className="text-xl lg:text-3xl will-change-transform font-overused-grotesk"
            styles={{
              transform: {
                from: "scale(1)",
                to: "scale(1.4)",
              },
              color: { from: "#ffffff", to: "#ff87c1" },
            }}
            falloff="gaussian"
            radius={100}
            containerRef={containerRef}
          />
          <TextCursorProximity
            label="unites"
            className="text-xl lg:text-3xl will-change-transform font-overused-grotesk"
            styles={{
              transform: {
                from: "scale(1)",
                to: "scale(1.4)",
              },
              color: { from: "#ffffff", to: "#ff87c1" },
            }}
            falloff="gaussian"
            radius={100}
            containerRef={containerRef}
          />
          <TextCursorProximity
            label="people"
            className="text-xl lg:text-3xl will-change-transform font-overused-grotesk"
            styles={{
              transform: {
                from: "scale(1)",
                to: "scale(1.4)",
              },
              color: { from: "#ffffff", to: "#ff87c1" },
            }}
            falloff="gaussian"
            radius={100}
            containerRef={containerRef}
          />
        </h1>
        <div className="text-xl flex gap-4 capitalize">
          <NavbarLinks />
        </div>
      </div>

      <p className="text-[14.5vw] w-full uppercase font-bold leading-none tracking-tight text-center -mb-14">
        communion
      </p>

      <ElasticLine
        releaseThreshold={10}
        strokeWidth={1}
        animateInTransition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.05,
        }}
      />
      <div className="flex flex-col md:flex-row lg:flex-row text-lg items-center justify-between pb-4 -mt-10 px-2">
        <p className="text-center">Copyright © 2025. All rights reserved to Communion</p>
        <p>contact@communionhub.org</p>
      </div>
    </div>
  );
};

export default Footer;
