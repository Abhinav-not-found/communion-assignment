"use client";

import React, { useRef } from "react";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import NavbarLinks from "./NavbarLinks";
import TextCursorProximity from "@/fancy/components/text/text-cursor-proximity";

const Footer = () => {
  const containerRef = useRef(null); // Ensure the ref is set

  return (
    <div
      ref={containerRef} // Attach the containerRef here
      className="sticky bottom-0 z-0 h-auto bg-[#08ACEF] text-white flex flex-col pt-4"
    >
      <div className="flex justify-between px-2">
        <h1 className="text-4xl capitalize flex gap-2">
          <TextCursorProximity
            label="Gathering"
            className="text-3xl will-change-transform font-overused-grotesk"
            styles={{
              transform: {
                from: "scale(1)",
                to: "scale(1.4)",
              },
              color: { from: "#ffffff", to: "#ff87c1" },
            }}
            falloff="gaussian"
            radius={100}
            containerRef={containerRef} // Pass the ref
          />
          <TextCursorProximity
            label="unites"
            className="text-3xl will-change-transform font-overused-grotesk"
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
            className="text-3xl will-change-transform font-overused-grotesk"
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
      <div className="flex text-lg justify-between pb-4 -mt-10 px-2">
        <p>Copyright © 2025. All rights reserved to Communion</p>
        <p>contact@communionhub.org</p>
      </div>
    </div>
  );
};

export default Footer;
