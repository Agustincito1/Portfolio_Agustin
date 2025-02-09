import Profile from "../components/agustin/profile"
import Cv from "../components/agustin/dowloadCV"
import React from 'react';
import ScrollReveal from "../functions/ScrollReveal";
import ImageScroll from "../functions/ImageShow";
import Typing from "../functions/TypingAnimation";


function Agustin() {
    return (
        <>
            <ScrollReveal>
                <section  className=" mb-[15%] mt-[15%] grid max-w-[85vw] items-center min-h-[5px] grid-cols-[0.6fr_1fr_1fr] grid-rows-2 grid-rows-[60%_40%]  ">
                    
                    <article className="row-span-3 ">
                        <Profile location="./imgs/profile.png" title="Imagen profile" />
                    </article>
                    <article className="col-span-2 pt-[1vw] pl-[4%]  items-center ">
                        <h1 className="text-[var(--bh)] title h-fit w-fit"><Typing delay="0s">Agustin Lazaro Ardeola de Olivera</Typing></h1>
                        <h2 className="text-[var(--lv)] subtitle w-fit"><Typing delay="0.2s">Full-Stack Development</Typing></h2>
                    </article>
                    <ImageScroll percentege="50%">
                        <article className="w-full grid pl-[4%] ml-[5%] h-full">
                            <Cv text="Descargar mi CV"></Cv>
                        </article>
                    </ImageScroll>
                    <ImageScroll percentege="50%">
                        <article className="flex gap-[5%]  h-fit justify-end">
                            <div className="bg-[var(--bh)] w-[4vw] h-[4vw] rounded-full"></div>
                            <div className="bg-[var(--ls)] w-[4vw] h-[4vw] rounded-full"></div>
                            <div className="bg-[var(--mi)] w-[4vw] h-[4vw] rounded-full"></div>
                        </article>
                    </ImageScroll>
                  

                </section>
            </ScrollReveal>
        </>
    )
}

export default Agustin