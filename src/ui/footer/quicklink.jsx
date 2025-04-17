import React from "react";
import { Link } from "react-router-dom";

function QuickLinks() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "Get Started", path: "/get-started" },
    { name: "FAQ", path: "/faq" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  console.log("QuickLinks component is rendering"); // Debugging (optional, can remove)
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-sm hover:text-gray-300 transition-colors relative 
                         after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                         after:h-[1px] after:bg-white after:w-0 
                         hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLinks;
