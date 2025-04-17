import React from "react";

import HeroSection from "./herosection";
import StorySection from "../Story/storysection";
import TestimonialsSection from "../Testimonials/TestimonialsSection";
import MenuSection from "../Menu/menu";
import "../../styles/home.css";
function Home() {
  return (
    <div className="home-page">
      <div>
        <HeroSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <StorySection />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <MenuSection />
      </div>
      <div>
        <TestimonialsSection />
      </div>
    </div>
  );
}

export default Home;
