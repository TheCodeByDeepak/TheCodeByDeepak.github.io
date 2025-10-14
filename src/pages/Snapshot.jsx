import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/Project_Guide_TYCS.jpg";
import img2 from "../assets/26thJan.jpg";
import img3 from "../assets/Graduation_Farewell.jpg";
import img4 from "../assets/Academic_Completion_Celebration.jpg";
import img5 from "../assets/linu_sir.jpg"
import img6 from "../assets/teachers_day_special.jpg"

const photos = [
  { img: img1, caption: "16/06/2025 Project Development & Guidance to TYBSc CS Students, Vartak College" },
  { img: img2, caption: "Republic Day – 26 Jan 2025, Vartak College" },
  { img: img3, caption: "A chapter ends, but the story begins, 15/03/2025" },
  { img: img4, caption: "Academic Completion Celebration with my students at Divine Classes, 06/04/2024" },
  { img: img5, caption: "From Linu Sir" },
  { img: img6, caption: "Teachers Day Special" },

  
];


export default function Snapshot() {
  return (
    <section id="snapshot" className="min-h-screen bg-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
        Every Frame Has a Story
      </h2>

      {/* Pure Pinterest-style layout — no border, no card */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto">
        {photos.map(({ img, caption }, idx) => (
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
              className="w-full h-auto object-cover rounded-lg"
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
