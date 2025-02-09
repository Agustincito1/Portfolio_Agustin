import ScrollReveal from '../functions/ScrollReveal.jsx';
function Footer() {
    return (
      <>
        <ScrollReveal>
          <footer className="mb-[10%] mt-[10%] grid gap-[5%] h-[100%]">
            <section >
              <h2 className="titleHard font-bold text-[var(--lv)]">Contacto</h2>
              <article className="flex items-center gap-[1%] text-[var(--bh)]">
                <img src="imgs/gmail.png" alt="" className="w-[4vw] "/><p className="Text font-bold">agustinlazari594@gmail.com</p>
              </article>
              <article className="flex items-center gap-[1%] Text font-bold text-[var(--bh)]">
                <img src="imgs/linkedin.png" alt="" className="w-[4vw]" /><a href="http://" target="_blank" rel="Linkedin" className="transition 0.4s hover:text-[var(--am)]">Agustin</a>
              </article>
              {/* whatspp */}
              {/* <article>
                <img src="" alt="" /><p></p>
              </article> */}
            </section>
            <section className="flex gap-[4%] items-center">
              <h2 className="Text text-[var(--bh)]">Sitio creado con:</h2>
              <article className="flex items-center gap-[4%] Text">
                
                <img src="/imgs/tailwind-css.svg" alt="tailwind" className="w-[4vw] h-[4vw]" />
                <img src="/imgs/react.svg" alt="react" className="w-[4vw] h-[4vw]" />
                <img src="/imgs/js2.svg" alt="js" className="w-[4vw] h-[4vw]" />
              </article>
            </section>
          </footer>
        </ScrollReveal>
      </>
    )
  }
  
  export default Footer
  