// src/components/StorySection.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import wrapsImage from "../../assets/wrapsImage.png";
import storyFoodImage from "../../assets/image.png";
import RotatingCircleImage from "../../ui/rotatingimag";

function StorySection() {
  const whiteCircleRef = useRef(null);

  useEffect(() => {
    if (whiteCircleRef.current) {
      gsap.to(whiteCircleRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="story-section">
      <div className="story-image" data-aos="zoom-in">
        <div className="story-image-container">
          <div className="white-circle-background" ref={whiteCircleRef}></div>

          <img
            src={wrapsImage}
            alt="Story Wraps"
            className="w-full max-w-sm object-contain story-image-content"
          />
        </div>
      </div>

      <div className="story-split gap-10 w-full">
        <div
          className="story-text md:w-1/3 max-w-[100%] mx-auto"
          style={{ width: "30%" }}
        >
          <h2 className="font-normal mb-4" data-aos="fade-up">
            <span className="block text-4xl text-right md:text-5xl">
              View Our
            </span>
            <span className="block text-5xl text-right font-bold md:text-9xl text-red-600">
              Story
            </span>
          </h2>
          <p
            className="text-gray-600 mb-6 w-1/2 ml-auto text-right"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <Link to="/story" data-aos="fade-up" data-aos-delay="200">
            <button className="beautiful-button ml-auto text-right">
              Read more
            </button>
          </Link>
        </div>
        <div className="max-w-[100%] mx-auto" style={{ width: "50%" }}>
          <RotatingCircleImage
            dimmedImageSrc={storyFoodImage}
            overlayImageSrc={wrapsImage}
          />
        </div>
      </div>
    </div>
  );
}

export default StorySection;
