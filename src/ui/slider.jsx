import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialSlider({ testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    fade: true,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="bg-gray-100 w-full text-center py-4 text-gray-600">
        No testimonials available.
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          .testimonial-slide {

          // width:80%;
            text-align: left;
          }=

          .testimonial-slide p {
            margin: 0; /* Ensure no extra margins interfere with positioning */
          }

          .slick-dots li button:before {
            color: #e02424;
            font-size: 12px;
          }

          .slick-dots li.slick-active button:before {
            color: #e02424;
          }
        `}
      </style>
      <div className="bg-gray-100 w-full">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full">
              <div className="relative testimonial-slide">
                <p className="text-gray-600 text-base leading-relaxed italic">
                  ‘{testimonial.quote}’
                </p>
                <div className="mt-6 md:mt-8">
                  <p className="text-xl font-semibold text-red-600">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm  w-32">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TestimonialSlider;
