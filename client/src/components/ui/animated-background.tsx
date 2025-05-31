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
            animation: gradient 12s ease infinite;
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>

      {/* Animated gradient background */}
      <div
        className="relative flex min-h-[100vh] flex-col items-center justify-center inset-0 z-[-1] animate-gradient animate-fadeIn bg-[length:400%_400%] bg-[linear-gradient(45deg,#6c88ae,#2c3d59,#4b76b1,#16223a)]"
      >
        {children}
      </div>
    </>
  );
}
