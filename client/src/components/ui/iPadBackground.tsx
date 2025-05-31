import React from 'react'

export default function IPadBackground({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
        {/* the actual ipad outer border */}
      <div className="h-10/12 w-full md:h-11/12 md:w-10/12 border-solid border-black bg-black border-8 rounded-4xl flex justify-center items-center">
        {/* ipad screen */}
        <div className='h-10/12 w-11/12 md:h-11/12 md:min-w-11/12 rounded-3xl bg-blue-500 flex justify-center items-center'>
        {/* main content */}
        <main className={className}>{children}</main>
        </div>
      </div>
    </div>
  )
}
