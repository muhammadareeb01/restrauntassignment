import React from "react";

function NavLink({ href, children, onClick, isActive, className = "" }) {
  return (
    <div className="navlink-container">
      <a
        href={href}
        className={`transition-colors duration-300 ${isActive ? "text-red-600" : "text-gray-300"} hover:text-white ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
      <div className={`navlink-underline ${isActive ? "active" : ""}`} />
    </div>
  );
}

export default NavLink;