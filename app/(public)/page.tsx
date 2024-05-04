import { Fragment } from "react";
import Hero from "./_components/Hero";
import Introduce from "./_components/Introduce";
import Benefits from "./_components/Benefits";

export default async function HomePage() {
  return (
      <div className="snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen">
        <Hero></Hero>
        <Introduce></Introduce>
        <Benefits></Benefits>
      </div>
  );
}
