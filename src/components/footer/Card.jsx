import React from 'react'

const Card = () => {
    const cardImg=[{src:'src/assets/63d6e83420934a94d642103b_NCC2021_LogoLockup 1.svg',number:'52'},{src:'src/assets/css_design_awards_logos.svg',number:'2'},{src:'src/assets/63c9ce90a51cd75d563689fd_Awwards-logotype-2018 1.svg',number:'15'}]
     return(
      <div className='flex max-w-screen-xl mx-auto'> 
          {cardImg.map((elem,id)=>{ return(
            <div key={id} className='flex items-center justify-around min-w-[16.6vw] h-[60px] border border-zinc-600'>
              <img src={elem.src} alt="missing" />
              <h2>{elem.number}</h2>
            </div>  
          )
          })}
      </div>
   )
}

export default Card