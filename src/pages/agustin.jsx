import Profile from "../components/Agustin/profile"
import Cv from "../components/Agustin/dowloadCV"
import React from 'react';

function Agustin() {
    return (
      <>
        <section className="grid  grid-cols-[0.7fr_1fr_1fr] gap-0 grid-rows-2 grid-rows-[35%_auto]  justify-items-center">
           
            <article className="row-span-3">
                <Profile location="./src/imgs/profile.png" title="Imagen profile"/>
            </article>
            <article className="col-span-2 pt-2">
                <h1 className="text-[var(--bh)] title">Agustin Lazaro Ardeola de Olivera</h1>
                <h2 className="text-[var(--lv)] subtitle">Full-Stack Development</h2>
            </article>
            <article>
                <Cv text="Descargar mi CV"></Cv>
            </article>
            <article className="flex gap-1 justify-self-end h-fit mr-2">
                <div className="bg-[var(--bh)] w-2.5 h-2.5 rounded-full"></div>
                <div className="bg-[var(--ls)] w-2.5 h-2.5 rounded-full"></div>
                <div className="bg-[var(--mi)] w-2.5 h-2.5 rounded-full"></div>
            </article>
            
        </section>
      </>
    )
}

export default Agustin