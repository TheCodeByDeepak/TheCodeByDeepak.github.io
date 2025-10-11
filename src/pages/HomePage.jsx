import React from "react";
import { PiPushPinFill } from "react-icons/pi";
import { FaPagelines, FaLeaf, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import FakeTerminal from "./FakeTerminal"; 

export default function HomePage() {
  return (
    <motion.div
      id="home"
      className="min-h-[60vh] flex flex-col items-center justify-start bg-white p-6 pt-40 relative overflow-hidden"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      {/* Animated speech bubble */}
      <motion.div
        className="relative flex items-center justify-center mb-6"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <motion.div
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg absolute"
          style={{ top: "-60px", left: "10%", rotate: "-10deg" }}
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <span>Hi! My name is...</span>
          <div className="w-0 h-0 border-t-[12px] border-t-yellow-400 border-l-[12px] border-l-transparent absolute -bottom-3 left-8"></div>
        </motion.div>

        {/* Decorative icons */}
        <FaPagelines className="text-green-600 absolute left-[-50px] top-[10px] rotate-[10deg] text-[40px] sm:text-[56px] md:text-[72px]" />
        <PiPushPinFill className="text-red-600 absolute right-[-50px] top-[10px] rotate-[25deg] text-[48px] sm:text-[64px] md:text-[80px]" />
        <FaLeaf className="text-green-400 absolute left-[-80px] bottom-[-10px] rotate-[-15deg] text-[32px] sm:text-[48px] md:text-[64px]" />
        <FaStar className="text-yellow-400 absolute right-[-80px] bottom-[-10px] rotate-[30deg] text-[32px] sm:text-[48px] md:text-[64px]" />

        {/* Name with colorful characters */}
        <div className="flex space-x-2 items-center font-extrabold text-[48px] sm:text-[64px] md:text-[96px] drop-shadow-xl">
          <span className="text-red-500">D</span>
          <span className="text-orange-500">E</span>
          <span className="text-yellow-500">E</span>
          <span className="text-green-600">P</span>
          <span className="text-blue-500">A</span>
          <span className="text-purple-600">K</span>
        </div>
      </motion.div>

      {/* Unique "About Me" Section */}
      <motion.div
        className="text-center mt-8 max-w-2xl px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.p
  className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  Code, Tech, Innovate! Turning ideas into reality.
</motion.p>
<motion.p
  className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
>
  I’m a passionate developer who loves crafting clean, user-friendly Websites & Mobile Apps.
</motion.p>
<motion.p
  className="mt-3 text-gray-500 italic text-sm sm:text-base max-w-lg mx-auto"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
>
  From Whiteboard to Web & Mobile Apps | Developer with a Mission & Tutor with a Vision
</motion.p>

      </motion.div>
        <FakeTerminal />
   <motion.div
  className="mt-20 text-center max-w-6xl w-full px-4"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 1 }}
>
  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 text-transparent bg-clip-text mb-10">
    🔧 From Concept to Launch: My Workflow
  </h3>

  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 place-items-center">
    {[
      { icon: "📌", label: "Idea", color: "bg-yellow-100 text-yellow-800" },
      { icon: "✍️", label: "Plan", color: "bg-pink-100 text-pink-700" },
      { icon: "💻", label: "Code", color: "bg-indigo-100 text-indigo-700" },
      { icon: "🧪", label: "Test", color: "bg-green-100 text-green-700" },
      { icon: "🚀", label: "Deploy", color: "bg-purple-100 text-purple-700" },
      { icon: "📈", label: "Monitor", color: "bg-blue-100 text-blue-700" },
    ].map((step) => (
      <motion.div
        key={step.label}
        whileHover={{ scale: 1.08 }}
        className={`flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-md w-full ${step.color}`}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <span className="text-3xl sm:text-4xl mb-2">{step.icon}</span>
        <span className="text-base sm:text-lg font-semibold">{step.label}</span>
      </motion.div>
    ))}
  </div>
</motion.div>
    
    </motion.div>
    
  );
}

