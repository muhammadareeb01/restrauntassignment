import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";

function Menu() {
  return (
    <>
      <h1 className="text-3xl text-center p-10">Menu Page</h1>
    </>
  );
}

function Order() {
  return (
    <>
      <h1 className="text-3xl text-center p-10">Order Page</h1>
    </>
  );
}

function Story() {
  return (
    <>
      <h1 className="text-3xl text-center p-10">Story Page</h1>
    </>
  );
}

function Location() {
  return (
    <>
      <h1 className="text-3xl text-center p-10">Location Page</h1>
    </>
  );
}

function ContactUs() {
  return (
    <>
      <h1 className="text-3xl text-center p-10">Contact Us Page</h1>
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {location.pathname !== "/" && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/story" element={<Story />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
