import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {
  return (

    <Carousel className=" max-w-[1600px] h-[250px]  mb-10 ml-28 ">
      <CarouselContent className="ml-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/6 md:basis-1/6 lg:basis-1/6">
            <div className="  ">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
