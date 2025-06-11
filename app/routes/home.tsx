import type { Route } from "./+types/home";

import { Baner, InspirationWallSlider, Products, RoomCarousel, Rooms } from "~/components/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  
  return (
    <main>
      <Baner />
      <Rooms />
      <Products />
      <RoomCarousel />
      <InspirationWallSlider />
    </main>
  )
}
