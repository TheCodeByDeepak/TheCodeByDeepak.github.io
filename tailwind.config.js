// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        waveSwing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(10deg)' },
          '40%': { transform: 'rotate(-8deg)' },
          '60%': { transform: 'rotate(6deg)' },
          '80%': { transform: 'rotate(-4deg)' },
        },
        rocket: {
          '0%': { transform: 'translateY(0) rotate(-5deg)', opacity: 1 },
          '30%': { transform: 'translateY(-10px) rotate(0deg)', opacity: 1 },
          '70%': { transform: 'translateY(-50px) rotate(5deg)', opacity: 0.8 },
          '100%': { transform: 'translateY(-100px) rotate(10deg)', opacity: 0 },
        },
      },
      animation: {
        waveSwing: 'waveSwing 11s ease-in-out',
        rocketLaunch: 'rocket 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
