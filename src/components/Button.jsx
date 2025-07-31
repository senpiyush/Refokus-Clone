import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title}) => {
  return (
      <div>
        <button className='"w-[130px] px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between  bg-white  '>
            <span className='text-sm font-medium'>{title}</span>
             <IoIosReturnRight className='ml-[1vh]'/>
        </button>
      </div>
  )
}

export default Button