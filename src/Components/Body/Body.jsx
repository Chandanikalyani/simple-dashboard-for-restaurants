import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Body = () => {
  return (
    <div className='bg-bodyBg h-[100%] basis-80 p-8'>
    {/* Top Section */}
    <div className='flex items-center border-b-2 pd-2 basis-1/2 gap-2'>
      <AiOutlineSearch className='text-hoverColor text-[20px] cursor-pointer'/>
      <input type="text" placeholder='search your favourite' className='boder-none outline-none placeholder:text-sm'/>


    </div>
 
    </div>
  )
}

export default Body