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
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-gradient {
            animation: gradient 3s ease infinite;
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }

          /* Light mode gradient */
          .light-gradient {
            background: linear-gradient(45deg, #3b82f6, #a5b4fc, #93c5fd, #ddd6fe, #60a5fa);
          }

          /* Dark mode gradient - almost black with white highlights */
          .dark-gradient {
            background: linear-gradient(45deg, #000000, #0a0a0a, #ffffff, #0a0a0a, #000000);
          }
        `}
      </style>

      <div className="relative flex min-h-[100vh] flex-col items-center justify-center">
        {/* Animated gradient background */}
        <div
          className="fixed inset-0 z-[-1] pointer-events-none animate-gradient animate-fadeIn bg-[length:400%_400%] light-gradient dark:dark-gradient"
        />
        {children}
      </div>
    </>
  );
}
