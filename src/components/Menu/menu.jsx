import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import menuItems from "../../data/menudata";
import foodImage from "../../assets/menubg.png";
import grilledMeatImage from "../../assets/wrapsImage.png";
import shawarmaWrapImage from "../../assets/shawarma.png";
import "../../styles/menu.css";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function MenuSection() {
  const [filter, setFilter] = useState("Shawarma");
  const menuRef = useRef(null);

  const categories = ["Shawarma", "Grilled Meat", "Grilled Chicken"];

  const filteredItems = menuItems.filter((item) => item.category === filter);

  // GSAP animation for dotted dividers.................
  useEffect(() => {
    const paths = menuRef.current.querySelectorAll(".divider-path");

    paths.forEach((path) => {
      gsap.fromTo(
        path,
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: path,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, [filteredItems]);

  return (
    <div
      className="menu-section relative"
      style={{ background: "#e6413b" }}
      ref={menuRef}
    >
      <div className="menu-top-curve"></div>
      <div className="food-image-decoration">
        <img
          src={foodImage}
          alt="Delicious Food"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </div>

      <div className="relative z-10 max-w-5xl  mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center mb-6">
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            View Our
          </span>
          <span className="block text-7xl sm:text-6xl lg:text-9xl font-medium text-white">
            MENU
          </span>
          <span className="block text-2xl sm:text-2xl lg:text-2xl font-light text-white">
            Curated dishes for you
          </span>
        </h2>

        {/* Filter Buttons */}
        <div className="filter-buttons flex justify-center gap-0 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn menu-btn ${
                filter === category ? "active" : ""
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item, index) => {
            let gridPosition = "";
            if (index === 0) gridPosition = "top-left";
            else if (index === 1) gridPosition = "top-right";
            else if (index === 2) gridPosition = "bottom-left";
            else if (index === 3) gridPosition = "bottom-right";
            else if (index >= 4) {
              const cycleIndex = (index - 4) % 4;
              if (cycleIndex === 0) gridPosition = "top-left";
              else if (cycleIndex === 1) gridPosition = "top-right";
              else if (cycleIndex === 2) gridPosition = "bottom-left";
              else if (cycleIndex === 3) gridPosition = "bottom-right";
            }

            return (
              <React.Fragment key={index}>
                <div
                  className={`menu-item flex items-center p-4 ${gridPosition}`}
                  data-aos={
                    gridPosition.includes("left") ? "fade-left" : "fade-right"
                  }
                  data-aos-delay={index * 100}
                >
                  <div className="menu-image-wrapper mr-4">
                    <div className="menu-image-inner"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="flex flex-row items-center justify-start gap-3">
                      <p className="text-white font-bold">{item.price}</p>
                      <button className="cart-btn">
                        <span className="cart-content text-sm">
                          Add to Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {index === 0 && filteredItems.length > 1 && (
                  <div className="dotted-divider vertical top">
                    <svg width="1" height="100%" preserveAspectRatio="none">
                      <path
                        className="divider-path"
                        d="M0,0 V1000"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}
                {index === 1 && filteredItems.length > 2 && (
                  <>
                    <div className="dotted-divider horizontal left">
                      <svg width="100%" height="1" preserveAspectRatio="none">
                        <path
                          className="divider-path"
                          d="M0,0 H1000"
                          stroke="#fff"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div className="divider-gap"></div>
                    <div className="dotted-divider horizontal right">
                      <svg width="100%" height="1" preserveAspectRatio="none">
                        <path
                          className="divider-path"
                          d="M0,0 H1000"
                          stroke="#fff"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </>
                )}
                {index === 2 && filteredItems.length > 3 && (
                  <div className="dotted-divider vertical bottom">
                    <svg width="1" height="100%" preserveAspectRatio="none">
                      <path
                        className="divider-path"
                        d="M0,0 V1000"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}
                {index >= 4 &&
                  index % 2 === 0 &&
                  filteredItems.length > index + 1 && (
                    <div
                      className={`dotted-divider vertical ${
                        index % 4 === 0 ? "top" : "bottom"
                      }`}
                    >
                      <svg width="1" height="100%" preserveAspectRatio="none">
                        <path
                          className="divider-path"
                          d="M0,0 V1000"
                          stroke="#fff"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                          fill="none"
                        />
                      </svg>
                    </div>
                  )}
                {index >= 5 &&
                  index % 2 === 1 &&
                  filteredItems.length > index + 1 && (
                    <>
                      <div className="dotted-divider horizontal left">
                        <svg width="100%" height="1" preserveAspectRatio="none">
                          <path
                            className="divider-path"
                            d="M0,0 H1000"
                            stroke="#fff"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <div className="divider-gap"></div>
                      <div className="dotted-divider horizontal right">
                        <svg width="100%" height="1" preserveAspectRatio="none">
                          <path
                            className="divider-path"
                            d="M0,0 H1000"
                            stroke="#fff"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </>
                  )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="menu-side-images flex justify-between mt-8">
        <div className="menu-side-image-left">
          <img
            src={grilledMeatImage}
            alt="Grilled Meat"
            style={{ zIndex: 9999999 }}
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </div>
        <div className="menu-side-image-right relative">
          <img
            src={shawarmaWrapImage}
            alt="Shawarma Wrap"
            style={{ zIndex: 9999999 }}
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
