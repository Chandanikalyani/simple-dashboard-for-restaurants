import React from 'react'
import { GiHamburger } from 'react-icons/gi';

import { AiFillHome } from "react-icons/ai";

const SideMenu = () => {
  return (
    <div className='bg-SideMenuBg relative h-[100%] basic-80 p-4'>
      {/*logo Div */}
      <div className='logo mt-4 gap-2 text-[white] flex items-center justify-center m-auto'>
        <GiHamburger className='text-[20px]'/>
        <h1 className='text-[20px] align-center justify-center font-black'>Foodie</h1>

      </div>

      {/* User Div */}
      <div className='flex items-center justify-center text-[white] flex-col mt-[3rem] admin'>

        <img src=""alt="Admin Image" className='h-[80px] w-[80px] boder-red-200 boder-[40px] object-cover rounded-full'/>
        <span className='opacity-70 mt-2 text-gray-400'>Welcome</span>
        <h3 className='font-bold text-textColor'></h3>
      </div>

      {/* simple Menu */}
      <div className='m-auto grid justify-center mt-4'>
        <li className='flex pt-3 pb-3 pl-3 gap-2 hover:opacity-100 items-center'>
          <AiFillHome/>
        </li>
      </div>
    </div>
  )
}

export default SideMenu