"use client";

import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-100 via-white to-blue-200 text-gray-600">
      <div className="container mx-auto px-5 py-8">
        {/* Footer Top */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <h2 className="text-lg font-medium text-gray-900">GHULAM MUNEER UDDIN</h2>
            <p className="mt-2 text-sm">Frontend Developer | UI/UX Designer</p>
          </div>
          <div className= "flex justify-center items-center space-x-4 mt-5 w-full sm:mt-0 ">
            <Link href="https://www.facebook.com/ghulam.muneeruddin" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://vercel.com/ghulam-muneer-uddins-projects" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <IoLogoVercel size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/ghulam-muneer-uddin-942a8728b/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/00Muneer12" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaGithub size={24} />
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-600">
            © 2024 GHULAM MUNEER UDDIN. All rights reserved. | Powered by{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
