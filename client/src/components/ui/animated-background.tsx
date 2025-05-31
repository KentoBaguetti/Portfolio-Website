import React from 'react';

export default function AnimatedBackground({ children }: {children: React.ReactNode}) {
  return (
    <>
      {/* Custom keyframes defined here so no need to touch tailwind.config.js */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-gradient {
            animation: gradient 3s ease infinite;
          }

          .animate-fadeIn {
            animation: fadeIn 1.5s ease-out forwards;
          }

          /* Light mode gradient */
          .animated-bg {
            background: linear-gradient(45deg, #3b82f6, #a5b4fc, #93c5fd, #ddd6fe, #60a5fa);
            background-size: 400% 400%;
          }

          /* Dark mode gradient using media query */
          @media (prefers-color-scheme: dark) {
            .animated-bg {
              background: linear-gradient(45deg, #000000, #0a0a0a, #1a1a1a, #374151, #111827);
              background-size: 400% 400%;
            }
          }
        `}
      </style>

      <div className="relative flex min-h-[100vh] flex-col items-center justify-center">
        {/* Animated gradient background */}
        <div
          className="fixed inset-0 z-[-1] pointer-events-none animate-gradient animate-fadeIn animated-bg"
        />
        {children}
      </div>
    </>
  );
}
