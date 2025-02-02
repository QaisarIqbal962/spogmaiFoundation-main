import React from "react";
import { FaPhone } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Getintouch = () => {
  return (
    <div>
      <h1 className="text-2xl font-mdium text-gray-700">
      
      <div className="mt-[3rem]">
        <h1 className="text-2xl font-mdium text-gray-700">
          Our Social Media Links
        </h1>
        <ul className="flex gap-4 text-2xl text-blue-500 my-[1rem] ">
          <Link to="https://www.facebook.com/spogmaifoundation">
          <li className="border border-blue-300 hover:border-blue-500 p-2">
              <FaFacebookSquare />
          </li>
          </Link>
          <Link>
          <li className="border border-blue-300 hover:border-blue-500 p-2">
              <FaTwitterSquare />
          </li>
          </Link>
          <Link to="https://www.youtube.com/@tahirfidaofficial1497">
          <li className="border border-blue-300 hover:border-blue-500 p-2">
              <FaYoutubeSquare />
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Getintouch;
