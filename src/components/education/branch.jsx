import React, { useState } from "react";


function Branch() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="h-60 ">
                <div 
                    className="padre bg-[var(--bh)] rounded-full w-2 h-2 m-auto relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <p
                        className={`title  ml-4  text-[var(--bh)]  hijo ${isHovered ? 'hovered' : 'hidden'}`}
                    >2021</p>
                    
                </div>
                



                {/* <ul className="bg-red-100 w-2 h-50 m-auto">
                    <li className="absolute mt-[0%] w-16 h-1 bg-red-100 ml-[0%] Text relative">
                        <div className="w-2 h-2 rounded-full bg-black absolute left-17"></div>
                        <p className="absolute left-20 w-16 ">Logica y programacion</p>
                    </li>
                </ul> */}
            </div>
        
        </>
        
    )
}


export default Branch