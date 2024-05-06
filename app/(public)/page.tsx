import { Fragment } from "react";
import Hero from "./_components/Hero";
import Introduce from "./_components/Introduce";
import Benefits from "./_components/Benefits";
import Sidebar from "./_components/Sidebar";

export default async function HomePage() {
  return (
      <div className="snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen">
        <Sidebar></Sidebar>
        <Hero></Hero>
        <Introduce></Introduce>
        <Benefits></Benefits>
      </div>
  );
}
