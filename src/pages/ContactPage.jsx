import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaFileDownload,
} from "react-icons/fa";
import resumePDF from "../assets/Deepak_Resume.pdf";

export default function Contact() {
  const contacts = [
    {
      icon: (
        <FaLinkedin
          size={40}
          className="text-blue-700 transition-transform duration-300 group-hover:scale-110 bounce-once"
        />
      ),
      label: "LinkedIn",
      link: "https://linkedin.com/in/thecodebydeepak",
      display: "linkedin.com/in/thecodebydeepak",
      color: "hover:bg-blue-100",
    },
    {
      icon: (
        <FaGithub
          size={40}
          className="text-gray-900 transition-transform duration-300 group-hover:scale-110 bounce-once"
        />
      ),
      label: "GitHub",
      link: "https://github.com/TheCodeByDeepak",
      display: "github.com/TheCodeByDeepak",
      color: "hover:bg-gray-200",
    },
    {
      icon: (
        <FaEnvelope
          size={40}
          className="text-red-600 transition-transform duration-300 group-hover:scale-110 bounce-once"
        />
      ),
      label: "Email",
      link: "mailto:thecodebydeepak@gmail.com",
      display: "thecodebydeepak@gmail.com",
      color: "hover:bg-red-100",
    },
    {
      icon: (
        <FaPhone
          size={40}
          className="text-green-600 transition-transform duration-300 group-hover:scale-110 bounce-once"
        />
      ),
      label: "Phone",
      link: "tel:9359717732",
      display: "+91 93597 17732",
      color: "hover:bg-green-100",
    },
    {
      icon: (
        <FaFileDownload
          size={40}
          className="text-indigo-600 transition-transform duration-300 group-hover:scale-110 bounce-once"
        />
      ),
      label: "Download Resume",
      link: resumePDF,
      display: "PDF Resume",
      color: "hover:bg-indigo-100",
      download:"Deepak_Resume.pdf",
     
    },
  ];

  return (
    <>
      <style>{`
        /* Fade in and slide up animation */
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-slide-up {
          animation: fadeSlideUp 0.6s ease forwards;
        }

        /* Icon bounce on hover */
        @keyframes bounceOnce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .bounce-once:hover {
          animation: bounceOnce 0.5s;
        }

        /* Underline slide effect */
        .underline-slide {
          position: relative;
        }

        .underline-slide::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background-color: currentColor;
          transition: width 0.3s ease;
        }

        .group:hover .underline-slide::after {
          width: 100%;
        }

        /* SVG text rotate and scale on hover */
        .svg-text {
          transition: transform 0.3s ease;
          cursor: pointer;
          transform-origin: center;
          display: inline-block;
        }
        .svg-text:hover {
          transform: rotate(5deg) scale(1.05);
        }

        /* Background gradient slow shifting animation */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .bg-gradient-animate {
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>

      <section
        id="contact"
        className="py-24 px-8 bg-gradient-to-r from-indigo-100 via-white to-indigo-100 min-h-screen flex flex-col items-center bg-gradient-animate"
      >
        <h2 className="text-5xl font-extrabold text-indigo-800 mb-16 tracking-wide flex items-center gap-4">
          <span>📬</span> Get In Touch
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-20 space-y-12 md:space-y-0 max-w-5xl w-full justify-center">
          {/* Contact Links */}
          <div className="flex flex-col gap-10 w-full md:w-1/2">
            {contacts.map(({ icon, label, link, display, color, download }, idx) => (
              <a
                key={idx}
                href={link}
                {...(download ? { download } : {})}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-8 py-5 rounded-lg bg-white shadow-lg transition-all duration-300 transform hover:scale-105 ${color} animate-fade-slide-up`}
                style={{ animationDelay: `${idx * 150}ms` }}
                aria-label={label}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                  {icon}
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <span className="font-semibold text-2xl text-indigo-900 underline-slide">
                    {label}
                  </span>
                  <span className="text-gray-600 text-sm truncate max-w-xs">
                    {display}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Decorative SVG */}
          <div className="hidden md:flex items-center justify-center w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="320"
              height="320"
              fill="none"
              viewBox="0 0 320 320"
            >
              <circle cx="160" cy="160" r="160" fill="#6366F1" fillOpacity="0.1" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="48"
                fill="#4F46E5"
                fontWeight="700"
                fontFamily="sans-serif"
                className="svg-text"
              >
                Let&apos;s Connect
              </text>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
