import React from "react";
import { motion } from "framer-motion";

// Certificate Images
import cert1 from "../assets/project_guide.jpg";
import cert2 from "../assets/power_bi.jpg";
import cert3 from "../assets/pw.jpg";
import Courteous_Student from "../assets/Courteous_Student.jpg"
import Regular_Student from "../assets/Regular_Student.jpg"



const certificates = [
{ img: cert3, caption: "Physics Wallah (PW) Subject Matter Expert- Copy Checking Freelancer (June 2025)" },
{ img: cert1, caption: "Project Guidance – TYBSc CS, Vartak College (16/06/2025)" },
{ img: cert2, caption: "Power BI 15-hrs Course, Vartak College (June 2024)" },
{ img: Courteous_Student, caption: "Courteous Student of the Year 2019 - 20 T.A.H.S" },
{ img: Regular_Student, caption: "Regular Student of the Year 2019 - 20 T.A.H.S" },

   
 
];

export default function Achievements() {
  return (
    <section id="achievements" className="min-h-screen bg-gray-50 py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        Achievements & Certificates
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto">
        {certificates.map(({ img, caption }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="mb-5 break-inside-avoid cursor-pointer"
          >
            <img
              src={img}
              alt={caption}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-700 text-center mt-2">
              {caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
