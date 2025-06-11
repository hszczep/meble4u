import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import { Button } from "~/components/ui/button"

import DiningPng from '~/assets/home/dining.svg';
import LivingPng from '~/assets/home/living.svg';
import BedroomPng from '~/assets/home/bedroom.svg';

const rooms = [
  {
    title: "Inner Peace",
    subtitle: "Bed Room",
    image: LivingPng,
  },
  {
    title: "Modern White",
    subtitle: "Dining Room",
    image: DiningPng,
  },
  {
    title: "Modern Brown",
    subtitle: "Dining Room",
    image: BedroomPng,
  },
  {
    title: "Modern Peace",
    subtitle: "Dining Room",
    image: DiningPng,
  },
]

export default function RoomCarousel() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 bg-[#faf6f1] rounded-2xl shadow-md">
      <div className="max-w-md space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <Button className="bg-yellow-600 text-white hover:bg-yellow-700">
          Explore More
        </Button>
      </div>

      <div className="w-full max-w-lg relative">
        <Carousel>
          <CarouselContent>
            {rooms.map((room, index) => (
              <CarouselItem key={index}>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 rounded-tr-xl">
                    <p className="text-sm text-gray-500">
                      0{index + 1} — {room.subtitle}
                    </p>
                    <p className="text-lg font-semibold">{room.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  )
}
