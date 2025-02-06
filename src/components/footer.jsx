function Footer() {
    return (
      <>
        <footer>
          <section>
            <h2 className="titleHard font-bold text-[var(--lv)]">Contacto</h2>
            <article>
              <img src="imgs/gmail.png" alt="" /><address>agustinlazari594@gmail.com</address>
            </article>
            <article>
              <img src="imgs/linkedin.png" alt="" /><a href="http://" target="_blank" rel="Linkedin"></a>
            </article>
            {/* whatspp */}
            {/* <article>
              <img src="" alt="" /><p></p>
            </article> */}
          </section>
          <section>
            <h2>Sitio creado con</h2>
            <article>
              <img src="/imgs/tailwind.jpeg" alt="" /><img src="/imgs/react.jpeg" alt="" /><img src="/imgs/js.png" alt="" />
            </article>
          </section>
            
           
        </footer>
      </>
    )
  }
  
  export default Footer
  