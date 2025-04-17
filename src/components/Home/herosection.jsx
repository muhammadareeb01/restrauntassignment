
import React from "react";
import { Link } from "react-router-dom";
import wrapsImage from "../../assets/wrapsImage.png";
import bikeAnimation from "../../assets/delivery-scooter.gif";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-red-curve" />
      <div className="hero-black-curve">
        <div className="hero-image-fill" />
      </div>
      <div className="discount-wrapper">
        <div className="discount-delivery-row">
          <div
            className="delivery-info"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={bikeAnimation}
              alt="Bike Animation"
              className="bike-icon"
            />
            <div className="delivery-text">
              <span>DELIVERY SERVICE</span>
              <span className="available">AVAILABLE 24/7</span>
            </div>
          </div>
          <div className="discount-rotator">
            <div
              className="discount-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="text-5xl discount-percentage sm:text-lg">
                20
              </span>
              <p className="text-2xl discount-off sm:text-xl">
                % <p className="text-2xl sm:text-xl discount-off">OFF</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-content w-full mx-auto  z-10 relative">
        <div className="hero-split flex flex-col md:flex-row items-left justify-between">
          <div className="hero-image lg:w-w-1/2 md:w-1/2 flex justify-center md:justify-start">
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src={wrapsImage}
              alt="Wraps"
              className="w-3/4 md:w-3/4 max-w-md object-contain hero-image-content"
            />
          </div>
          <div className="hero-text w-1/2 md:w-1/2 lg:text-center text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="block h1">Welcome to</span>
              <span className="block h2" style={{ color: "#E6413B" }}>
                Sean Anyanwu
              </span>
            </h1>
            <p className="text-gray-300 mb-6 sm:mb-2 sm:text-center lg:text-center  hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center btn-div">
              <div>
                <Link to="/order">
                  <button className="bg-red-600 order button text-white sm:px-3 sm:py-1 sm:text-sm md:px-6 md:py-3 rounded-full hover:bg-red-700 transition font-medium">
                    Order Now
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/menu">
                  <button className="bg-red-600 order button text-white sm:px-3 sm:py-1 sm:text-sm md:px-6 md:py-3 rounded-full hover:bg-red-700 transition font-medium">
                    Go to Our Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
