import React from "react";
import project1Image from "../assets/Project1.jpg";
import project2Image from "../assets/Project2.jpg"; 
import project3Image from "../assets/Project3.jpg";
import project4Image from "../assets/Project4.jpg";
import project5Image from "../assets/Project5.jpg";
import project6Image from "../assets/Project6.jpg";
import project7Image from "../assets/Project7.jpg";
import project8Image from "../assets/Project8.jpg";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiDjango, SiTailwindcss } from "react-icons/si";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { SiFlutter, SiFirebase } from "react-icons/si";
import { FaDownload } from "react-icons/fa";


const techIcons = {
  React: <FaReact className="text-blue-500 text-lg mr-1" />,
  "Node.js": <FaNodeJs className="text-green-600 text-lg mr-1" />,
  MongoDB: <SiMongodb className="text-green-700 text-lg mr-1" />,
  Express: <SiExpress className="text-gray-700 text-lg mr-1" />,
  Python: <FaPython className="text-yellow-600 text-lg mr-1" />,
  Django: <SiDjango className="text-green-800 text-lg mr-1" />,
  Docker: <FaDocker className="text-blue-400 text-lg mr-1" />,
  Tailwind: <SiTailwindcss className="text-teal-400 text-lg mr-1" />,
  Flutter: <SiFlutter className="text-sky-400 text-lg mr-1" />,
  Firebase: <SiFirebase className="text-yellow-500 text-lg mr-1" />,
};



const progressColors = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Pending: "bg-gray-100 text-gray-700",
  Cancelled: "bg-red-100 text-red-700",
  Upcoming: "bg-indigo-100 text-indigo-700",
};

const projects = [
  {
  id: 8,
  img: project8Image,
  title: "Lesson Plan App",
  description: "A modern and user-friendly Flutter app to help teachers plan their lessons efficiently. Try the demo with Phone No: 1234567890 and OTP: 123456.",
  tech: ["Flutter", "Firebase"],
  progress: "Completed",
  githubLink: "https://github.com/TheCodeByDeepak/LessonPlan",
  liveLink: "#",
  apkLink: "https://drive.google.com/uc?export=download&id=1kdlmk-Ulod5aMPc46ZHHf-FUQr-rPMr5"
  },
  
  {
    id: 6,
    img: project6Image,
    title: "Sister Birthday Special",
    description:
      "A fun, personalized birthday web app built with React to surprise my sister Karishma on her special day!",
    tech: ["React", "Tailwind"],
    progress: "Completed",
    githubLink: "https://github.com/TheCodeByDeepak/SisterBirthdaySpecial",
    liveLink: "https://TheCodeByDeepak.github.io/SisterBirthdaySpecial",
  },

    {
    id: 2,
    img: project2Image,
    title: "Quick Learning Classroom ",
    description:
      "Quick Learning is a classroom management web app with role-based access, enabling attendance, assignments, student tracking, and real-time chat.",
    tech: ["React", "Node.js", "MongoDB"],
    progress: "Completed",
    githubLink: "https://github.com/TheCodeByDeepak/QuickLearningClassroom",
    liveLink: "#",
  },

   {
    id: 3,
    img: project3Image,
    title: "Divine Classes",
    description:
      "Divine Classes Website a responsive, modern platform for a coaching institute that empowers students with quality education and simplified learning experiences.",
    tech: ["React", "Tailwind"],
    progress: "Completed",
    githubLink: "https://github.com/TheCodeByDeepak/DivineClasses",
    liveLink: "https://thecodebydeepak.github.io/DivineClasses",
  },

  {
    id: 1,
    img: project1Image,
    title: "Doctor Appointment System",
    description:
      "A full-stack Doctor Appointment System. Patients can book appointments, doctors can manage bookings, and admins can oversee the entire system.",
    tech: ["React", "Node.js", "MongoDB"],
    progress: "Completed",
    githubLink: "https://github.com/TheCodeByDeepak/DoctorAppointmentSystem",
    liveLink: "#",
  },

    {
    id: 4,
    img: project4Image,
    title: "PlaTec Industries",
    description:
      "PlaTec Industries website, is a responsive web project represents the digital face of a well-established industry leader in specialized packaging solutions.",
    tech: ["React", "Tailwind"],
    progress: "Pending",
    githubLink: "https://github.com/TheCodeByDeepak/PlaTecIndustries",
    liveLink: "https://thecodebydeepak.github.io/PlaTecIndustries",
  },

  {
    id: 5,
    img: project5Image,
    title: "Quick Innovation",
    description:
      "Quick Innovation is an organization that provides all types of tech solutions. This website is currently under development.",
    tech: ["React", "Tailwind"],
    progress: "In Progress",
    githubLink: "#",
    liveLink: "https://TheCodeByDeepak.github.io/QuickInnovation",
  },

  {
  id: 7,
  img: project7Image,
  title: "Surya Enterprises",
  description:
    "Surya Enterprises, is a well-established industry leader in Export more than 100 products.",
  tech: ["React", "Tailwind"],
  progress: "Upcoming",
  githubLink: "#",
  liveLink: "#",
},




];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-purple-100 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
         <h2 className="text-4xl font-extrabold text-indigo-800 mb-2">
 <MdOutlineRocketLaunch className="inline-block text-5xl mr-2 mb-1 text-purple-600 animate-rocketLaunch" />

  My Projects
</h2>

          <p className="text-gray-600 text-md">
            Here's a glimpse of the work I've done using modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200 flex flex-col"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-indigo-700">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${
                      progressColors[project.progress] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {project.progress}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-indigo-700 font-semibold text-sm"
                    >
                      {techIcons[tech] || null}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-start gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-sm font-medium transition-all ${
                      project.githubLink && project.githubLink !== "#"
                        ? "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-black"
                        : "opacity-50 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    <FaGithub className="text-base" />
                    GitHub
                  </a>
                  {project.id !== 8 && (
                  <a
                   href={project.liveLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-sm font-medium transition-all ${
                     project.liveLink && project.liveLink !== "#"
                       ? "bg-purple-100 text-purple-700 hover:bg-purple-200 hover:text-purple-900"
                       : "opacity-50 cursor-not-allowed pointer-events-none"
                   }`}
                 >
                    <FaExternalLinkAlt className="text-base" />
                    Live Preview
                 </a>
                  )}


                  {project.apkLink && (
                  <a
                     href={project.apkLink}
                     download
                     target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-900"
                    >
                      <FaDownload className="text-base" />
                  Download
                 </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
