import ImageLinks from '../functions/imagesLink.jsx';
import ScrollReveal from '../functions/ScrollReveal.jsx';
function Footer() {
    return (
      <>
        <ScrollReveal>
          <footer className="mb-[10%] mt-[10%] grid gap-[5%] h-[100%]">
            <h2 className="titleHard font-bold text-[var(--lv)]">Contacto</h2>
            <section className='grid gap-[5%]'>
              <article className="flex items-center gap-[1%] text-[var(--bh)]">
                <ImageLinks url="./imgs/gmail.svg" link="" title="gmail imagen"></ImageLinks> <p className="Text font-bold">agustinlazari594@gmail.com</p>
              </article>
              <article className="flex items-center gap-[1%] Text font-bold text-[var(--bh)]">
                <ImageLinks url="./imgs/linkedin.svg" link="" title="gmail imagen"></ImageLinks><a href="http://" target="_blank" rel="Linkedin" className="transition 0.4s hover:text-[var(--am)]">Agustin</a>
              </article>
            </section>
            <section className="flex gap-[4%] items-center mt-[20%]">
              <h2 className="Text text-[var(--bh)]">Sitio creado con:</h2>
              <article className="flex items-center gap-[4%] Text">
                <ImageLinks url="./imgs/tailwind-css.svg" link="https://tailwindcss.com/docs/installation/using-vite" title="tailwind imagen"></ImageLinks>
                <ImageLinks url="./imgs/react.svg" link="https://react.dev/" title="react imagen"></ImageLinks>
                <ImageLinks url="./imgs/js2.svg" link="https://es.wikipedia.org/wiki/JavaScript" title="js imagen"></ImageLinks>
              </article>
            </section>
          </footer>
        </ScrollReveal>
      </>
    )
  }
  
  export default Footer
  