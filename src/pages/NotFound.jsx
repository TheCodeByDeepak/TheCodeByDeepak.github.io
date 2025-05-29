import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10"
    >
      {/* Heading */}
      <motion.h1
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-6xl font-extrabold text-gray-800 mb-2"
      >
        404
      </motion.h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Page not found </p>

      {/* Terminal Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-100 text-green-600 font-mono text-sm sm:text-base rounded-xl px-6 py-6 w-full max-w-xl shadow-xl border border-gray-300"
      >
        {/* Terminal Top Bar */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Animated Command */}
        <div className="mb-2">
          <span className="text-pink-600">deepak@portfolio</span>
          <span className="text-gray-700">:~$</span>{" "}
          <Typewriter
            words={["cd /notfound"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
          />
        </div>

        {/* Static Error */}
        <p className="text-gray-800 mt-1">
          bash: cd: /notfound: No such file or directory
        </p>
      </motion.div>

      {/* Return Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
  to="/"
  className="
    mt-8 inline-flex items-center px-8 py-3 rounded-xl
    bg-white bg-opacity-20 backdrop-blur-md
    border-2 border-transparent
    text-indigo-700 font-semibold
    transition-all duration-300 ease-in-out
    hover:bg-opacity-40 hover:border-indigo-500
    hover:shadow-lg
    focus:outline-none focus:ring-4 focus:ring-indigo-300
  "
>
 
<span className="mr-3 text-indigo-600 text-2xl">⬅️</span>


  Go Back Home
</Link>

      </motion.div>

      {/* Emoji Reaction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-gray-500 text-sm"
      >
        Looks like this page doesn’t exist... yet
      </motion.p>
    </motion.div>
  );
}
