import React from 'react'
import Button from './Button'
import logo from '../assets/refoku_logo.svg'

const Navbar = () => {
  const menu=['Home','Work','Culture','','News']
  return (
    <div className='max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-600'>
         <div className='flex items-center'><img src={logo} alt="" />
         <div className='flex items-center pl-[5vw] gap-[3vw]'>
           { menu.map((elem,index)=>{return(<a
               key={index}
               href="#"
              className="font-regular text-sm flex items-center gap-1 cursor-pointer "
              >
               {index === 1 && (
                   <span
                       style={{
                           boxShadow: "0 0 0.25em #00FF19",
                       }}
                       className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                   ></span>
               )}
               {elem.length === 0 ? (
                   <span className="w-[2px] h-7 bg-zinc-600"></span>
               ) : (
                   elem
               )}
           </a>)}
            )}
         </div>
         </div>
         <Button title={"Get started"} />
         
    </div>
  )
}

export default Navbar