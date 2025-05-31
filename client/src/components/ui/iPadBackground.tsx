import React from 'react'

export default function IPadBackground({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        {/* the actual ipad outer border */}
      <div className="h-10/12 w-full md:h-10/12 md:w-9/12 border-solid border-black border-8 rounded-4xl">
        {/*  */}
        <div></div>
      </div>
    </div>
  )
}
