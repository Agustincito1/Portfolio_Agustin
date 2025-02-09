import React, { useState, useEffect, useRef } from "react";
import './../style/index.css'; 
import ScrollReveal from '../functions/ScrollReveal.jsx';


function Aboutme() {

  return (
      <>
       <ScrollReveal>
          <section className='mb-[15%] mt-[10%] max-w-[85vw] w-full grid gap-[3%] font-bold' >
            <h2 className="titleHard text-[var(--lv)] " >Sobre mi</h2>
            <p className="Text text-[var(--bh)] font-thin">
                Soy un programador en constante evolucion, siempre en busca de desafios que me 
                impulsen a alcanzar mis límites que me permita seguir aprendiendo y mejorando. 
                Mi objetivo es crecer tanto profesional como técnicamente, y contribuir con sol
                uciones innovadoras que resuelvan problemas reales.
            </p>
            <p className="Text text-[var(--ml)] font-bold">
                Actualmente, estoy estudiando por mi cuenta para convertirme en desarrollador Full-Stack
            </p>
          </section>
        </ScrollReveal>
      </>
    )
}

export default Aboutme