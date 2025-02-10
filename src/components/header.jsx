import ScrollReveal from '../functions/ScrollReveal.jsx';
import Linki from './header/link.jsx';

function Header() {

  return (
    
    <>
      <div id="Agustin" className="spacer h-[10vw] ">
      </div>
      
      <header className="z-100 w-[100%] linkText h-fit bg-[var(--dv)] left-0 text-[var(--lv)] p-[9%] pb-[2%] pt-[3.5%] fixed ">
        <ScrollReveal>
          <nav className="w-full h-fit" id="nav">
              <ul className="w-full h-full linkText flex justify-between underline-offset-[30%]">
                <li className="w-fit h-fit "><Linki id="Agustin" text="Agustin" name="Agustin" /></li>
                <li className="w-fit h-fit"><Linki id="Aboutme" text="Sobre mi" name="Sobr emi" /></li>
                <li className="w-fit h-fit"><Linki id="Porfolio" text="Proyectos"  name="Proyectos"/></li>
                <li className="w-fit h-fit"><Linki id="Skills" text="Habilidades"  name="Habilidades"/></li>
                <li className="w-fit h-fit"><Linki id="Education" text="Educacion"  name="Educacion"/></li>
                <li className="w-fit h-fit"><Linki id="Contactme" text="Contactame"  name="Contactame"/></li>
              </ul>
          </nav>
        </ScrollReveal>
      </header>
    </>
  )
}
// border-red-500 border
export default Header
