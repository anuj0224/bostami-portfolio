import React from 'react'
import "./footer.css";
function Footer() {
  return (
    <div className='py-10'>
        <div className="h-[1px] w-full bg-gray-700"></div>
        <div className="flex flex-col items-center justify-center m-5 gap-3 opacity-70">
            <h1 className='text-black'>Design and Developed by</h1>
            <h1 className='text-black'>
                Anuj Mourya
            </h1>
        </div>
    </div>
  )
}

export default Footer