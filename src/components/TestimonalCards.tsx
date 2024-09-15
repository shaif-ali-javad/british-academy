"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Our testimonials</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "They provide good quality education. Excellent teachers who are very friendly and  helpful especially Shyamala Ma'am. Thanks a lot.",
    name: "Rahul Murali",
    // title: "A Tale of Two Cities",
  },
  {
    quote:
      "Great place for academic teaching for IELTS. experienced tutors who have done IELTS exam. So there is no 2nd thought about British.",
    name: "Nikhil Babu",
    // title: "Hamlet",
  },
  {
    quote: "It is a great experience to learn from trainers. I got a score of 7.0 bands on the IELTS today. That makes me really delighted.",
    name: "Asheera Fisal",
    // title: "A Dream Within a Dream",
  },
  {
    quote:
      "I had a great learning experience with British academy. My coach Ms Sneha Mathew was always there to help and guide.",
    name: "Rajath NK",
    // title: "Pride and Prejudice",
  },
];
