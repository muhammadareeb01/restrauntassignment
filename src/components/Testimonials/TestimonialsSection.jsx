import React from "react";
import TestimonialSlider from "../../ui/slider";
import { testimonials } from "../../data/testimonialsData";
import wrapImage from "../../assets/left.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import '../../styles/test.css'
function TestimonialSection() {
  return (
    <section className="bg-gray-100 w-full overflow-hidden relative">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] md:gap-6 lg:gap-8 relative">
          {/* Left Div: Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <img
              src={wrapImage}
              alt="Food Wrap"
              className="w-full h-auto max-h-64 lg:max-h-96 object-cover"
            />
          </div>

          {/* Quotation Mark Box */}
          <div className="absolute quotation-box hidden lg:block">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-2xl" />
          </div>

          {/* Right Div: Testimonial Content */}
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:items-start lg:text-left px-4 sm:px-6 md:px-8 py-6"
            data-aos="fade-left"
          >
            <div className="mb-6 md:mb-8 lg:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-playfair">
                Client
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 font-playfair">
                Reviews
              </h2>
            </div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;