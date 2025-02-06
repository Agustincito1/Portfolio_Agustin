
import React from 'react';
import ImageSkill from '../components/skills/img';

function Skill() {
    return (
      <>
        <section className="max-w-[85vw] w-full grid gap-[3%] font-bold text-[var(--bh)]">
            <h2 className="titleHard text-[var(--lv)]">Habilidades</h2>
            <article className='w-[50vw]'>
                <h3 className="subtitle">Back-End</h3>
                <div className='grid grid-cols-5 gap-[5%]'>
                    <ImageSkill url="./imgs/php.png" title="Php imagen"/>
                    <img src="./imgs/sql.png" alt="" />
                    <img src="./imgs/nodejs.png" alt="" />
                    {/* express */}
                </div>
            </article>
            <article>
                <h3 className="subtitle">Front-End</h3>
                <div className='grid grid-cols-5 gap-[5%]'>
                    <img src="./imgs/html-5.png" alt="" />
                    <img src="./imgs/css-3.png" alt="" />
                    <img src="./imgs/js.png" alt="" />
                    <img src="./imgs/react.jpeg" alt="" />
                    <img src="./imgs/sas.jpeg" alt="" />
                    <img src="./imgs/tailwind.jpeg" alt="" />
                </div>
            </article>
            <article>
                <h3 className="subtitle">Softwares y Herramientas</h3>
                <div className='grid grid-cols-5 gap-[5%]'>
                    <img src="./imgs/github.png" alt="" />
                </div>
            </article>
        </section>
      </>
    )
}

export default Skill