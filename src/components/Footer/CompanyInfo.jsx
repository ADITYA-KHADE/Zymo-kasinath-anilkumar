import React from "react";
import Zomo from "/Zymo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const CompanyInfo = () => {
  return (
    <div className="w-full md:w-[224px] md:h-[272px]">
      <div>
      <img
        src={Zomo}
        alt="Company Logo"
        className="bg-white w-[150px] mb-5 mx-auto"
      />
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:text-gray-300 font-bold mb-2">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            <span className="font-bold">Email:</span> hello@zymo.app
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            <span className="font-bold">Phone:</span> +91 9987933348
          </a>
        </li>
      </ul>
      </div>
      
      <div className=" flex flex-col  text-center items-center mb-4">
      <h1 className="font-bold p-1 ">Follow Us</h1>
        <div className="flex">
          <a href="https://www.facebook.com/zymo.official/" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/zymo.app/" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://in.linkedin.com/company/zymoapp" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://x.com/zymoapp" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.youtube.com/channel/UCHUvrPwNYxw7bukWFjhNpag" className="mr-4 hover:text-gray-300">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
