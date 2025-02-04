import Profile from "../components/Agustin/profile"
import CV from "../components/Agustin/profile"

function Agustin() {
    return (
      <>
        <section>
            <article>
                <Profile location="../imgs/profiel.png" title="Imagen profile"></Profile>
            </article>
            <article>
                <h1>Agustin Lazaro Ardeola de Olivera</h1>
                <h2>Full-Stack Development</h2>
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