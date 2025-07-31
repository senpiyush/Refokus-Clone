import React from 'react'

const Main = () => {
  return (
   <div className="w-full mt-10">
            <div className="relative max-w-screen-xl mx-auto text-center">
                <h1 className="text-[30vw] leading-none font-semibold select-none">
                    work
                </h1>
                {/* <div className="absolute top-0 w-full h-full">
                    {images.map(
                        (elem, index) =>
                            elem.isActive && (
                                <img
                                    key={index}
                                    className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                                    src={elem.url}
                                    style={{ top: elem.top, left: elem.left }}
                                    alt=""
                                />
                            )
                    )}
                </div> */}
            </div>
        </div>
  )
}

export default Main