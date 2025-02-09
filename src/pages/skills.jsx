import React from 'react';
import ImageSkill from '../components/skills/img';
import ScrollReveal from '../functions/ScrollReveal.jsx';

function Skill() {
    return (
      <>
       <ScrollReveal>
            <section className=" mb-[15%] mt-[10%] max-w-[85vw] w-full  grid gap-[5%] font-bold text-[var(--bh)] ">
                <h2 className="titleHard text-[var(--lv)]">Habilidades</h2>
                <article className='w-[50vw] grid gap-[5%]'>
                    <h3 className="subtitle flex items-center gap-[1%]"> <div className="  bg-[var(--bp)] w-[1.5vw] h-[1.5vw] rounded-full"></div> Back-End</h3>
                    <div className=' pl-[5%] grid grid-cols-[repeat(auto-fill,_minmax(10%,_1fr))] gap-[2%] w-[85vw] '>
                        <ImageSkill url="./imgs/ty.svg" link="https://www.typescriptlang.org/" title="typescript imagen"/>
                        <ImageSkill url="./imgs/node.svg" link="https://nodejs.org/es" title="nodejs imagen"/>
                        <ImageSkill url="./imgs/mysql.svg" link="https://dev.mysql.com/downloads/" title="sql imagen"/>
                        <ImageSkill url="./imgs/mongo.svg" link="https://www.mongodb.com/" title="mongodb imagen"/>    
                        {/* express */}
                    </div>
                </article>
                <article className='grid gap-[5%]'>
                    <h3 className="subtitle flex items-center gap-[1%]"><div className="  bg-[var(--lv)] w-[1.5vw] h-[1.5vw] rounded-full"></div>Front-End</h3>
                    <div className=' pl-[5%] grid grid-cols-[repeat(auto-fill,_minmax(10%,_1fr))] gap-[1%] w-[85vw]'>
                        <ImageSkill url="./imgs/html.svg" link="https://es.wikipedia.org/wiki/HTML" title="html imagen"/>
                        <ImageSkill url="./imgs/css.svg" link="https://es.wikipedia.org/wiki/CSS" title="css imagen"/>
                        <ImageSkill url="./imgs/js2.svg" link="https://es.wikipedia.org/wiki/JavaScript" title="js imagen"/>
                        <ImageSkill url="./imgs/react.svg" link="https://react.dev/" title="react imagen"/>
                        <ImageSkill url="./imgs/sass.svg" link="https://sass-lang.com/" title="sas imagen"/>
                        <ImageSkill url="./imgs/tailwind-css.svg" link="https://tailwindcss.com/docs/installation/using-vite" title="tailwind imagen"/>
                    </div>
                </article>
                <article className='grid gap-[5%]'>
                    <h3 className="subtitle flex items-center gap-[1%]"><div className="  bg-[var(--ml)] w-[1.5vw] h-[1.5vw] rounded-full"></div>Softwares y Herramientas</h3>
                    <div className=' pl-[5%] grid grid-cols-[repeat(auto-fill,_minmax(10%,_1fr))] justify-items-left gap-[1%] w-[85vw]'>
                        <ImageSkill url="./imgs/github.svg" link="https://github.com/" title="github imagen"/>
                        <ImageSkill url="./imgs/figma.svg" link="https://www.figma.com/" title="figma imagen"/>
                    </div>
                </article>
            </section>
        </ScrollReveal>
      </>
    )
}

export default Skill