import React from "react";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaHeart, FaMusic } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="border-t border-black mt-10 px-4 py-8 text-center w-full">
      {/* Main Flex Container */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 px-4">
        {/* Text Section */}
        <div className="text-left">
          <p className="text-base sm:text-lg font-medium mb-2">Thanks for stopping by!</p>
          <p className="text-sm sm:text-base md:text-lg max-w-xl">
            <span className="text-orange-500 font-semibold">Curious</span> to{" "}
            <span className="text-blue-500 font-semibold">collaborate</span>? Let's{" "}
            <span className="text-purple-500 font-semibold">make</span> it happen!
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Email */}
          <a
            href="mailto:thecodebydeepak@gmail.com"
            className="p-3 rounded-full border-2 border-black hover:border-transparent hover:bg-[#D44638] hover:text-white transition-colors duration-300"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/thecodebydeepak"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border-2 border-black hover:border-transparent hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/TheCodeByDeepak"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border-2 border-black hover:border-transparent hover:bg-black hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Signature */}
      <p className="mt-6 text-xs sm:text-sm text-gray-700 flex flex-wrap justify-center items-center gap-1">
        Made with
        <FaHeart className="text-red-500 animate-pulse"/>
        <FaMusic className="text-yellow-500" />
       
        by <span className="font-semibold ml-1">TheCodeByDeepak</span> © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
