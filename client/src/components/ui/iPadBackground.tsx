"use client"
import React from 'react'

interface IPadBackgroundProps {
  children: React.ReactNode;
  className?: string;
  onHomeClick?: () => void;
}

export default function IPadBackground({children, className, onHomeClick}: IPadBackgroundProps) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        {/* the actual ipad outer border */}
      <div className="h-10/12 w-full md:h-11/12 md:w-10/12 border-solid border-black bg-black border-8 rounded-4xl flex justify-center items-center relative">
        {/* ipad screen */}
        <div className='h-10/12 w-11/12 md:h-11/12 md:min-w-11/12 rounded-3xl bg-blue-500 flex justify-center items-center'>
        {/* main content */}
        <main className={className}>{children}</main>
        </div>
        
        {/* Home button - bottom for sm, right for md+ */}
        <div className="absolute bottom-0 md:bottom-auto md:right-2 md:top-1/2 md:-translate-y-1/2">
          <button 
            onClick={onHomeClick}
            className="w-12 h-12 bg-gray-800 rounded-full border-2 border-gray-600 hover:bg-gray-700 transition-colors duration-200 shadow-inner active:scale-95"
          >
            <div className="w-6 h-6 border-2 border-gray-400 rounded-sm mx-auto"></div>
          </button>
        </div>
      </div>
    </div>
  )
}
