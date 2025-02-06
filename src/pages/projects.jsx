import React from 'react';
import CardProject from '../components/projects/CardProject';
const array = ["/imgs/js.png"]
function Projects() {
    return (
      <>
        <section className="max-w-[85vw] w-full  grid gap-[3%] font-bold">
            <h2 className="titleHard text-[var(--lv)]">Porfolio</h2>
            <article className="grid grid-cols-4 h-[100%]">
              <CardProject text="creado para hacer esto" title="Porfolio" img="/imgs/porfolio.jpeg" arrayLeng={array}></CardProject>
            </article>
        </section>
      </>
    )
}

export default Projects