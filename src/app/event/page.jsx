"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { events, categories } from "../data.js";
import { Passion_One, Oregano } from "next/font/google";

const passionOne = Passion_One({ weight: "400", subsets: ["latin"] });
const oregano = Oregano({ weight: "400", subsets: ["latin"] });

const EventCard = ({ event }) => (
  <Card className="w-fit p-2 py-4">
    <CardContent>
      <h1 className="text-2xl font-semibold mb-2">{event.title}</h1>
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p className="text-muted-foreground mt-2">{event.desc}</p>
    </CardContent>
  </Card>
);

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="mt-2 mb-6 min-h-screen bg-white">
      <div className="flex items-center justify-between mb-6 px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold ">
          <span className={`${passionOne.className}`}>Upcoming </span>
          <span className={`${oregano.className}`}>Events</span>
        </h1>
        <div className="flex items-center">
          <Link href="/create-event" className="relative inline-block text-sm md:text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Add Events</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-6 px-4 md:px-0">
        {categories.map((cat, index) => (
          <Button
            key={index}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="w-full px-4 md:px-0 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => <EventCard key={index} event={event} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
