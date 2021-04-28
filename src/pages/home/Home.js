import Hero from "../../components/home/Hero";
import Stats from "../../components/home/Stats";
import Featured from "../../components/home/Featured";
import Pricing from "../../components/home/Pricing";
import Location from "../../components/home/Location";
import Partner from "../../components/home/Partner";

// import classes from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Featured />
      <Pricing />
      <Location />
      <Partner />
    </main>
  );
}
