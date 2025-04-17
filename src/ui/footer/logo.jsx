import React from "react";
import logo from "../../assets/logo.jpg"; // Corrected path

function LogoSection() {
  return (
    <div className="text-white flex flex-col items-center">
      <img
        src={logo}
        alt="Digital Solutions Logo"
        className="w-36 sm:w-48 md:w-56 h-16 sm:h-20 md:h-24 object-contain mb-4"
      />
      <p className="text-sm leading-relaxed text-center max-w-xs">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
}

export default LogoSection;