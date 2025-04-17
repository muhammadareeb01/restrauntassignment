import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactInfo() {
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Contact Info</h3>
      <ul className="space-y-3">
        <li className="flex items-center text-sm">
          <FaPhone className="mr-2 text-lg" />
          <span>Phone: 1-123-456-7890</span>
        </li>
        <li className="flex items-center text-sm">
          <FaEnvelope className="mr-2 text-lg" />
          <span>Email: info@demolinks.com</span>
        </li>
        <li className="flex items-center text-sm">
          <FaMapMarkerAlt className="mr-2 text-lg" />
          <span>Head Office: lorem ipsum, Surprise, AZ 85378</span>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;