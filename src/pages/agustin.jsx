import Profile from "../components/Agustin/profile"
import Cv from "../components/Agustin/dowloadCV"
import React from 'react';

function Agustin() {
    return (
      <>
        <section>
           
            <article>
                <h1>Agustin Lazaro Ardeola de Olivera</h1>
                <h2>Full-Stack Development</h2>
            </article>
            <article>
                <Profile location="./src/imgs/profile.png" title="Imagen profile"/>
            </article>
            <article>
                <Cv text="Descargar mi CV"></Cv>
            </article>
            <article>
                <div>color1</div>
                <div>color2</div>
                <div>color3</div>
            </article>
            
        </section>
      </>
    )
}

export default Agustin