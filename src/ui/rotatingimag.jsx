import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function RotatingCircleImage({ dimmedImageSrc, overlayImageSrc }) {
  const borderRef = useRef(null);
  const overlayImageRef = useRef(null); // Ref for the overlay image

  useEffect(() => {
    // Continuous border rotation
    if (borderRef.current) {
      gsap.to(borderRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  // Handle hover effect for overlay image zoom
  const handleMouseEnter = () => {
    gsap.to(overlayImageRef.current, {
      scale: 1.2, // Zoom in the overlay image
      duration: 0.5,
      ease: "power3.out",
    });
  };

  // Handle mouse leave to reset the overlay image
  const handleMouseLeave = () => {
    gsap.to(overlayImageRef.current, {
      scale: 1, // Reset to original size
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div className="story-food-image lg:w-1/2 w-full md:w-full sm:w-full flex justify-center">
      <div className="rotating-image-container">
        <div className="rotating-border" ref={borderRef}></div>
        <div
          className="circle-image-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={dimmedImageSrc}
            alt="Story Food Background"
            className="dimmed-image"
          />
          <img
            src={overlayImageSrc}
            alt="Overlay Wraps"
            className="overlay-image"
            ref={overlayImageRef}
          />
        </div>
      </div>
    </div>
  );
}

export default RotatingCircleImage;