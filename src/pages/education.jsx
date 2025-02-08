import ScrollReveal from '../functions/ScrollReveal.jsx';

function Education() {
    return (
      <>
        <ScrollReveal>
          <section className="mb-[15%] mt-[10%] max-w-[85vw] w-full font-bold grid gap-[2%]">
            <h2 className="titleHard text-[var(--lv)]">Education</h2>
            <article className='grid gap-[20%]'>
              <div className='grid gap-[4%]'>
                <h2 className='subtitle text-[var(--ml)] flex items-center gap-[1%]'><div className=" shadow bg-[var(--lk)] w-[2vw] h-[2vw] rounded-full"></div><a href='https://www.facebook.com/EPET34/' target="_blank">Epet 34</a> (2021 - 2024)</h2>
                <p className='Text text-[var(--bh)] indent-[2%]'> Técnico en programación con formación en lógica de programación, diseño y gestión de bases de datos, y desarrollo web abarcando tanto front-end como back-end.</p>
              </div>
              <div className='grid gap-[4%]'>
                <h2 className='subtitle text-[var(--ml)] flex items-center gap-[1%]'><div className="shadow bg-[var(--lk)] w-[2vw] h-[2vw] rounded-full"></div>Autoaprendizaje (2025 - . . . )</h2>
                <p className='Text text-[var(--bh)] indent-[2%]'>Actualmente, me encuentro perfeccionando mis habilidades de manera autodidacta, con un enfoque en el desarrollo full-stack.</p>
              </div>
            </article>
            
          </section>
        </ScrollReveal>
      </>
    )
}

export default Education