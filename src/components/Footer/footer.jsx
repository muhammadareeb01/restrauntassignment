import React from "react";
import LogoSection from "../../ui/footer/logo";
import QuickLinks from "../../ui/footer/quicklink";
import ContactInfo from "../../ui/footer/contact";
import Newsletter from "../../ui/footer/newsletter";

function Footer() {
  return (
    <footer className=" footer-main text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <LogoSection />
          <QuickLinks />
          <ContactInfo />
          <Newsletter />
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 py-6 flex  justify-center items-center  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex  justify-center items-center">
          <p className="text-sm">
            Copyright © 2020 demolink.com - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
