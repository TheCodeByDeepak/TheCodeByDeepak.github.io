import { Typewriter } from 'react-simple-typewriter';

export default function TerminalBlock() {
  return (
    <div className="bg-white text-gray-800 font-mono text-sm sm:text-base rounded-xl border border-gray-200 shadow-md px-6 py-4 max-w-2xl w-full mx-auto mt-10 sm:mt-16">
      {/* Terminal top bar */}
      <div className="mb-3 flex items-center space-x-2">
        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
      </div>

      {/* Typewriter line */}
      <div className="text-gray-700 space-y-2">
        <p>
          <span className="text-blue-600">deepak@portfolio</span>
          <span className="text-gray-500">:~$</span>{" "}
          <Typewriter
            words={[
              'console.log("Hi, I\'m Deepak!")',
              'console.log("I build full-stack apps.")',
              'console.log("Let\'s code together!")',
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </p>
      </div>
    </div>
  );
}
