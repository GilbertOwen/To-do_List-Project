import { Fragment } from "react";
import Hero from "./_components/Hero";
import Introduce from "./_components/Introduce";
import Benefits from "./_components/Benefits";

export default async function HomePage() {
  return (
    <Fragment>
      <Hero></Hero>
      <Introduce></Introduce>
      <Benefits></Benefits>
    </Fragment>
  );
}
