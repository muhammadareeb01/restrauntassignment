import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaBell } from "react-icons/fa";
import NavLink from "../../ui/navbarlink";
import logo from "../../assets/logo.jpg";
import "../../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 768); 
  const [activeLink, setActiveLink] = useState("/");
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      console.log("checking...............", newState);
      return newState;
    });
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY <= 70) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinksLeft = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/order", label: "Order" },
  ];

  const navLinksRight = [
    { href: "/story", label: "Story" },
    { href: "/location", label: "Location" },
    { href: "/contact", label: "Contact Us" },
    {
      href: "/profile",
      label: <FaUser className="navbar-icon" />,
      isIcon: true,
    },
    {
      href: "/notifications",
      label: <FaBell className="navbar-icon" />,
      isIcon: true,
    },
  ];

  const linkVariants = {
    open: {
      scaleX: 1,
      originX: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      scaleX: 0,
      originX: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const mobileMenuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <nav
      className={`navbar w-full ${isVisible ? "visible" : "hidden"} ${
        isAtTop ? "at-top" : "scrolled"
      }`}
    >
      <div className="navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <label
          htmlFor="check"
          className={`navbar-hamburger-wrapper ${isOpen ? "open" : "closed"}`}
        >
          <input
            type="checkbox"
            id="check"
            checked={isOpen}
            onChange={toggleMenu}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="desktop-links"
              className="navbar-links"
              initial="closed"
              animate="open"
              exit="closed"
              variants={linkVariants}
            >
              <div className="navbar-links-left">
                {navLinksLeft.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    isActive={activeLink === link.href}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <a href="/" className="navbar-logo">
                <img
                  src={logo}
                  alt="Digital Solutions Logo"
                  className="h-6 w-auto object-contain"
                />
              </a>
              <div className="navbar-links-right">
                {navLinksRight.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    isActive={activeLink === link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={link.isIcon ? "navbar-icon-link" : ""}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="navbar-mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              {[...navLinksLeft, ...navLinksRight].map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isActive={activeLink === link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`${
                    link.isIcon
                      ? "navbar-icon-link"
                      : "text-white text-lg font-medium hover:text-red-600 transition-colors"
                  } ${link.isIcon ? "flex items-center" : ""}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
