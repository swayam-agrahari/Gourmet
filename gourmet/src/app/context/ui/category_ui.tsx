"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";



export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[16rem] mt-8 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"> 
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    id:1,
    img:'https://ik.imagekit.io/beats/attachments/1709044993179_74081.png',
  },
  {
    id:2,
    img:'https://ik.imagekit.io/beats/attachments/1709044993179_74081.png',
  },
  {
    id:3,
    img:'https://ik.imagekit.io/beats/attachments/1709044993179_74081.png',
  },
  {
    id:4,
    img:'https://ik.imagekit.io/beats/attachments/1709044993179_74081.png',
  },
  {
    id:5,
    img:'https://ik.imagekit.io/beats/attachments/1709044993179_74081.png',
  },
];
