import React from 'react';
import CardProject from '../components/projects/CardProject';
import ScrollReveal from '../functions/ScrollReveal.jsx';
const Project1 = ["./imgs/js2.svg", "./imgs/tailwind-css.svg", "./imgs/react.svg"]

function Projects() {
    return (
      <> 
        <ScrollReveal>
          <section className="mb-[15%] mt-[10%] max-w-[85vw] w-full  grid gap-[3%] font-bold">
              <h2 className="titleHard text-[var(--lv)]">Porfolio</h2>
              <article className="grid grid-cols-4 h-[100%]">
                <CardProject text="creado para hacer esto" title="Porfolio" img="./imgs/porfolio.jpeg" linkGit="https://github.com/Agustincito1/portfolio-2.0.git" arrayLeng={Project1}></CardProject>
              </article>
          </section>
        </ScrollReveal>
      </>
    )
}

export default Projects