import React from "react";
import hangingImage from "../assets/icard.png";
import { FaGitAlt, FaCode, FaDatabase, FaCloud, FaRocket  } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";

import { SiReact, SiJsonwebtokens, SiSocketdotio, SiTailwindcss, SiFlutter } from "react-icons/si";


export default function About() {
  return (
    <>
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(15deg); }
          30% { transform: rotate(-10deg); }
          45% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
          75% { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }
        .wave-hand {
          display: inline-block;
          transform-origin: 70% 70%;
          animation: wave 3s infinite;
        }

        
      `}</style>

      <section id="about" className="pt-32 px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 relative">
          {/* Left: Hanging Image */}
          <div className="relative w-full md:w-1/2 flex justify-center overflow-visible">
            <img
              src={hangingImage}
              alt="Hanging decoration"
              className="
                w-[28rem] h-[28rem]
                sm:w-[36rem] sm:h-[36rem]
                md:w-[40rem] md:h-[40rem]
                lg:w-[44rem] lg:h-[44rem]
                xl:w-[48rem] xl:h-[48rem]
                object-contain
                -mt-48
                sm:-mt-56
                md:-mt-64
                lg:-mt-50
                xl:-mt-60
                animate-waveSwing
                origin-top
              "
            />
          </div>

          {/* Right: HELLO! Text + waving hand + about me text */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6">
            <div className="flex items-center gap-4">
              <h1
                className="
                  flex gap-2 font-bold
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                "
              >
                <span className="text-red-500" style={{ transform: "translateY(-6px)" }}>
                  H
                </span>
                <span className="text-orange-500" style={{ transform: "translateY(4px)" }}>
                  E
                </span>
                <span className="text-yellow-500" style={{ transform: "translateY(-3px)" }}>
                  L
                </span>
                <span className="text-green-500" style={{ transform: "translateY(5px)" }}>
                  L
                </span>
                <span className="text-blue-500" style={{ transform: "translateY(-4px)" }}>
                  O
                </span>
                <span className="text-purple-600" style={{ transform: "translateY(3px)" }}>
                  !
                </span>
              </h1>
              <span className="wave-hand text-7xl" role="img" aria-label="waving hand">
                👋
              </span>
            </div>

           {/* About me paragraph */}
<div className="max-w-3xl text-gray-700 text-lg sm:text-xl leading-relaxed space-y-6 px-0 py-0">

  <p className="opacity-90 hover:opacity-100 transition-opacity duration-500">
    I'm <span className="font-semibold text-indigo-600">Deepak Yadav</span>, a BSc Computer Science graduate passionate about building web apps and helping learners. I was recognized as <span className="font-semibold text-indigo-600">Best Tutor</span> for making complex topics clear.
  </p>

  <p className="opacity-90 hover:opacity-100 transition-opacity duration-500">
    I specialize in the <span className="font-semibold text-indigo-600">MERN stack</span> and <span className="font-semibold text-indigo-600">Flutter (Dart)</span>. I build full-stack web apps and cross-platform mobile apps with features like <span className="italic">JWT authentication</span>, <span className="italic">real-time chat</span>, secure uploads, and role-based access.
  </p>

  <p className="opacity-90 hover:opacity-100 transition-opacity duration-500">
    Whether coding or teaching, I’m dedicated to making an impact. I’m now seeking internships, freelance work, and projects to grow as a developer and educator.
  </p>

  <p className="font-semibold text-indigo-700">Let’s connect if you want:</p>
  <ul className="list-disc list-inside ml-6 text-indigo-600 space-y-1">
    <li className="hover:text-indigo-800 transition-colors duration-300 cursor-pointer">A developer who codes with purpose</li>
    <li className="hover:text-indigo-800 transition-colors duration-300 cursor-pointer">A tutor who teaches with clarity</li>
    <li className="hover:text-indigo-800 transition-colors duration-300 cursor-pointer">A Flutter dev for polished Android/iOS apps</li>
  </ul>

</div>




          </div>
          
        </div>
              {/* Experience Section aligned left */}
{/* Wrap Experience and Education/Skills/Tools side by side */}
<div className="w-full mt-16 flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">

  {/* Left: Experience */}
 <div className="md:w-1/2 -pl-2">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Experience</h2>

  {/* Robotics Teacher - EduPro Learning */}
  <div className="border-l-4 border-indigo-500 pl-4 mb-6">
    <h3 className="text-xl font-semibold text-indigo-700">Robotics Teacher</h3>
    <p className="text-gray-600 font-medium">EduPro Learning</p>
    <p className="text-sm text-gray-500 mb-2">November 2025 - Present · On-site</p>
    <p className="text-gray-700 leading-relaxed">
      I have joined EduPro Learning, an educational organization that has placed me as a Robotics Teacher at S.L. Porwal English High School.
      In this role, I teach robotics to primary section students using robotic kits to perform practical experiments.
     
    </p>
  </div>

  {/* Subject Matter Expert Experience */}
  <div className="border-l-4 border-indigo-500 pl-4 mb-6">
    <h3 className="text-xl font-semibold text-indigo-700">Subject Matter Expert - Copy Checking (Freelance)</h3>
    <p className="text-gray-600 font-medium">PW (PhysicsWallah)</p>
    <p className="text-sm text-gray-500 mb-2">Jun 2025 - Present · Remote</p>
    <p className="text-gray-700 leading-relaxed">
      Working as a Subject Matter Expert (Copy Checking) with Physics Wallah.
      Responsible for ensuring academic content accuracy, clarity, and alignment with educational objectives.
    </p>
  </div>

  {/* Freelance Developer Experience */}
  <div className="border-l-4 border-indigo-500 pl-4 mb-6">
    <h3 className="text-xl font-semibold text-indigo-700">Freelance Developer</h3>
    <p className="text-gray-600 font-medium">Self-Employed</p>
    <p className="text-sm text-gray-500 mb-2">Jan 2024 - Present · Remote</p>
    <p className="text-gray-700 leading-relaxed">
      As a freelance MERN stack developer, I've built responsive web applications for clients. My focus is on delivering clean UI, secure authentication, real-time features, and seamless user experiences.
    </p>
  </div>
  
  {/* Tutor Experience */}
  <div className="border-l-4 border-indigo-500 pl-4 mb-6">
    <h3 className="text-xl font-semibold text-indigo-700">Tutor</h3>
    <p className="text-gray-600 font-medium">Divine Classes</p>
    <p className="text-sm text-gray-500 mb-2">Jun 2022 - Jun 2024 · 1 yrs 11 months · On-site</p>
    <p className="text-gray-700 leading-relaxed">
      I have 2 years of teaching experience, during which I taught all subjects to students from classes 5th to 8th and specialized in Mathematics and Science for classes 9th and 10th.
      
    </p>
  </div>
</div>


  {/* Right: Education, Skills, Tools */}
  <div className="md:w-1/2 space-y-8">

    {/* Education */}
   <div>
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
    Education
  </h2>

  {/* Msc Computer Science */}
  <div className="border-l-4 border-green-500 pl-4 mb-4">
    <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
      
      Msc Computer Science
    </h3>
    <p className="text-gray-600 font-medium">Mumbai University</p>
    <p className="text-sm text-gray-500">2025 - 2027</p>
  </div>

  {/* BSc Computer Science */}
  <div className="border-l-4 border-green-500 pl-4 mb-4">
    <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
      
      BSc Computer Science
    </h3>
    <p className="text-gray-600 font-medium">Mumbai University</p>
    <p className="text-sm text-gray-500">2022 - 2025</p>
  </div>

  {/* HSC Maharashtra Board */}
  <div className="border-l-4 border-green-500 pl-4 mb-4">
    <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
     
      HSC
    </h3>
    <p className="text-gray-600 font-medium">Maharashtra State Board</p>
    <p className="text-sm text-gray-500">2022</p>
  </div>

  {/* SSC Maharashtra Board */}
  <div className="border-l-4 border-green-500 pl-4">
    <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
      
      SSC
    </h3>
    <p className="text-gray-600 font-medium">Maharashtra State Board</p>
    <p className="text-sm text-gray-500">2020</p>
  </div>
</div>


 {/* Skills */}
<div>
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Skills</h2>
  <ul className="list-disc list-inside text-gray-700 space-y-3">
    <li className="flex items-center gap-2">
      <span className="flex gap-1 items-center">
        <SiReact className="text-cyan-500" />
      </span>
      MERN Stack (MongoDB, Express.js, React.js, Node.js)
    </li>
    <li className="flex items-center gap-2">
      <SiFlutter className="text-sky-400" />
      Flutter & Dart (Cross-Platform App Development)
    </li>
    <li className="flex items-center gap-2">
      <SiJsonwebtokens className="text-yellow-500" />
      JWT Authentication & Role-Based Access
    </li>
    <li className="flex items-center gap-2">
      <SiSocketdotio className="text-purple-600" />
      Real-time Communication with Socket.io
    </li>
    <li className="flex items-center gap-2">
      <SiTailwindcss className="text-blue-500" />
      Responsive & Accessible UI Design
    </li>
    <li className="flex items-center gap-2">
     <MdOutlineSmartToy className="text-red-400" />
      Robotics Teaching (STEM Education)
    </li>

  </ul>
</div>

{/* Tools */}
<div>
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Tools</h2>
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-center gap-2">
      <FaGitAlt className="text-indigo-600" />
      Git & GitHub
    </li>
    <li className="flex items-center gap-2">
      <FaCode className="text-indigo-600" />
      VS Code, Android Studio
    </li>
    <li className="flex items-center gap-2">
      <FaRocket className="text-orange-500" />
      Postman
    </li>
    <li className="flex items-center gap-2">
      <FaDatabase className="text-green-600" />
      MongoDB Atlas, Firebase
    </li>
    <li className="flex items-center gap-2">
      <FaCloud className="text-purple-600" />
      GitHub Pages, Netlify, Vercel (Deployment)
    </li>
  </ul>
</div>


  </div>

</div>



      </section>
    </>
  );
}
