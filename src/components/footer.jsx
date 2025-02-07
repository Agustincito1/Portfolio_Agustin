function Footer() {
    return (
      <>
        <footer className="grid gap-[5%]">
          
          <section >
            <h2 className="titleHard font-bold text-[var(--lv)]">Contacto</h2>
            <article className="flex items-center gap-[1%] text-[var(--bh)]">
              <img src="imgs/gmail.png" alt="" className="w-[4vw] "/><p className="Text font-bold">agustinlazari594@gmail.com</p>
            </article>
            <article className="flex items-center gap-[1%] Text font-bold text-[var(--bh)]">
              <img src="imgs/linkedin.png" alt="" className="w-[4vw]" /><a href="http://" target="_blank" rel="Linkedin">Agustin</a>
            </article>
            {/* whatspp */}
            {/* <article>
              <img src="" alt="" /><p></p>
            </article> */}
          </section>
          <section className="flex gap-[4%]">
            <h2 className="Text">Sitio creado con</h2>
            <article className="flex items-center gap-[4%] Text">
              <img src="/imgs/tailwind.jpeg" alt="tailwind" className="w-[4vw] h-[4vw]" />
              <img src="/imgs/react.jpeg" alt="react" className="w-[4vw] h-[4vw]" />
              <img src="/imgs/js.png" alt="js" className="w-[4vw] h-[4vw]" />
            </article>
          </section>
            
           
        </footer>
      </>
    )
  }
  
  export default Footer
  