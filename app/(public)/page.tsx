import { Fragment } from "react";
import Hero from "./_components/Hero";
import Introduce from "./_components/Introduce";

export default async function HomePage() {
  return (
    <Fragment>
      <Hero></Hero>
      <Introduce></Introduce>
    </Fragment>
  );
}
