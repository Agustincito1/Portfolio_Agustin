import Profile from "../components/agustin/profile"
import Cv from "../components/agustin/dowloadCV"
import React from 'react';

function Agustin() {
    return (
      <>
        <section className=" grid max-w-[85vw] items-center min-h-[5px] grid-cols-[0.6fr_1fr_1fr] grid-rows-2 grid-rows-[2fr_1fr]  ">
           
            <article className="row-span-3 ">
                <Profile location="/imgs/profile.png" title="Imagen profile"/>
            </article>
            <article className="col-span-2 pt-2 justify-self-end">
                <h1 className="text-[var(--bh)] title">Agustin Lazaro Ardeola de Olivera</h1>
                <h2 className="text-[var(--lv)] subtitle">Full-Stack Development</h2>
            </article>
            <article className="w-full grid pl-[4%] ml-[5%]">
                <Cv  text="Descargar mi CV"></Cv>
            </article>
            <article className="flex gap-[5%]  h-fit justify-end">
                <div className="bg-[var(--bh)] w-[4vw] h-[4vw] rounded-full"></div>
                <div className="bg-[var(--ls)] w-[4vw] h-[4vw] rounded-full"></div>
                <div className="bg-[var(--mi)] w-[4vw] h-[4vw] rounded-full"></div>
            </article>
            
        </section>
      </>
    )
}

export default Agustin