import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Passion_One, Oregano } from "next/font/google";
import { categories } from "../data";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const passionOne = Passion_One({
  weight: "400",
  subsets: ["latin"],
});

const oregano = Oregano({
  weight: "400",
  subsets: ["latin"],
});

const CreateEventPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <h1 className="text-6xl font-bold mb-2">
        <span className={`${passionOne.className}`}>Create </span>
        <span className={`${oregano.className}`}>Event</span>
      </h1>
      <form className="space-y-4">
        <div>
          <Label htmlFor="title" className={"text-xl"}>
            Title
          </Label>
          <Input id="title" placeholder="Enter event title" className="mt-1" />
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/3">
            <Label htmlFor="date" className={"text-xl"}>
              Date
            </Label>
            <Input id="date" type="date" className="mt-1" />
          </div>
          <div className="w-2/3 ml-4">
            <Label htmlFor="category" className={"text-xl mb-1"}>
              Category
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category, index) => (
                  <SelectItem key={index} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="location" className={"text-xl"}>
            Location
          </Label>
          <Input
            id="location"
            placeholder="Enter event location"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="description" className={"text-xl"}>
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Enter event description"
            className="mt-1"
          />
        </div>
        <Button className="w-fit mt-4">Create Event</Button>
      </form>
    </div>
  );
};

export default CreateEventPage;
