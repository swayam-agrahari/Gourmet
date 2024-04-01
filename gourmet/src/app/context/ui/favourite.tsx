import * as React from "react"

import { Card, CardContent } from "./card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"


export function CarouselSpacing() {
  return (
    <div className="items-center ml-6">
      <h1 className='text-4xl ml-36 mt-4 pb-4 font-semibold text-black   '>Your Favourite</h1>
    <Carousel className=" max-w-[1600px] h-[400px]  mb-10 ml-36  ">
      <CarouselContent className="ml-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/6 md:basis-1/6 lg:basis-1/6">
            <div className="border border-gray-200  ">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                 
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fsnacks_1_1_.png&w=1080&q=75"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
