import Hero from "../../components/home/hero/Hero";
import Stats from "../../components/home/stats/Stats";
import Featured from "../../components/home/featured/Featured";
import Pricing from "../../components/home/pricing/Pricing";
import Location from "../../components/home/location/Location";
import Partner from "../../components/home/partner/Partner";
import TestimonialList from "../../components/home/testimonial/TestimonialList";

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
      <TestimonialList />
    </main>
  );
}
