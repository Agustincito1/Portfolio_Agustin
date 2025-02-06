
import React from 'react';
import ImageSkill from '../components/skills/img';

function Skill() {
    return (
      <>
        <section className="max-w-[85vw] w-full h-full grid gap-[5%] font-bold text-[var(--bh)] ">
            <h2 className="titleHard text-[var(--lv)]">Habilidades</h2>
            <article className='w-[50vw] grid gap-[5%]'>
                <h3 className="subtitle flex items-center gap-[1%]"> <div className="  bg-[var(--bp)] w-[1.5vw] h-[1.5vw] rounded-full"></div> Back-End</h3>
                <div className=' pl-[5%] grid grid-cols-[repeat(auto-fill,_minmax(10%,_1fr))] gap-[2%] w-[85vw] '>
                    <ImageSkill url="./imgs/php.png" title="Php imagen"/>
                    <ImageSkill url="./imgs/sql.png" title="sql imagen"/>
                    <ImageSkill url="./imgs/nodejs.png" title="nodejs imagen"/>
                    {/* express */}
                </div>
            </article>
            <article className='grid gap-[5%]'>
                <h3 className="subtitle flex items-center gap-[1%]"><div className="  bg-[var(--lv)] w-[1.5vw] h-[1.5vw] rounded-full"></div>Front-End</h3>
                <div className=' pl-[5%] grid grid-cols-[repeat(auto-fill,_minmax(10%,_1fr))] gap-[1%] w-[85vw]'>
                    <ImageSkill url="./imgs/html-5.png" title="html imagen"/>
                    <ImageSkill url="./imgs/css-3.png" title="css imagen"/>
                    <ImageSkill url="./imgs/js.png" title="js imagen"/>
                    <ImageSkill url="./imgs/react.jpeg" title="react imagen"/>
                    <ImageSkill url="./imgs/sas.jpeg" title="sas imagen"/>
                    <ImageSkill url="./imgs/tailwind.jpeg" title="tailwind imagen"/>
                </div>
            </article>
            <article className='grid gap-[5%]'>
                <h3 className="subtitle flex items-center gap-[1%]"><div className="  bg-[var(--ml)] w-[1.5vw] h-[1.5vw] rounded-full"></div>Softwares y Herramientas</h3>
                <div className=' pl-[5%] grid grid-cols-[repeat(auto-fill,_minmax(10%,_1fr))] justify-items-left gap-[1%] w-[85vw]'>
                    <ImageSkill url="./imgs/github.png" title="github imagen"/>
                </div>
            </article>
        </section>
      </>
    )
}

export default Skill