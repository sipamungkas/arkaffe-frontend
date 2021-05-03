import { useState, useEffect } from "react";

import Hero from "../../components/home/hero/Hero";
import Stats from "../../components/home/stats/Stats";
import Featured from "../../components/home/featured/Featured";
import Pricing from "../../components/home/pricing/Pricing";
import Location from "../../components/home/location/Location";
import Partner from "../../components/home/partner/Partner";
import TestimonialList from "../../components/home/testimonial/TestimonialList";
import Cta from "../../components/home/cta/Cta";
import axios from "axios";

// import classes from "./Home.module.css";
const BASE_URL = process.env.REACT_APP_API;

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/testimonial`)
      .then((res) => {
        setTestimonials(res.data.getAllReview);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Hero />
      <Stats />
      <Featured />
      <Pricing />
      <Location />
      <Partner />
      {testimonials.length > 0 && (
        <TestimonialList testimonials={testimonials} />
      )}
      <Cta />
    </main>
  );
}
