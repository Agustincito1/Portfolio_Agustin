function Header() {
  return (
    <>
        <header className="w-full h-fit bg-[var(--dv)] text-[var(--lv)]  p-2">
            <nav className="w-full h-fit">
                <ul className="w-full h-full linkText flex text-center justify-around text-[3vw] ">
                  <li className="w-fit h-fit"><a href="#Agustin" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline underline-offset-3  ">Agustin</a></li>
                  <li className="w-fit h-fit"><a href="#Aboutme" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline underline-offset-3  ">Sobre mi</a></li>
                  <li className="w-fit h-fit"><a href="#Porfolio" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline underline-offset-3  ">Proyectos</a></li>
                  <li className="w-fit h-fit"><a href="#Skills" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline underline-offset-3  ">Habilidades</a></li>
                  <li className="w-fit h-fit"><a href="#Education" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline underline-offset-3  ">Educacion</a></li>
                  <li className="w-fit h-fit"><a href="#Contactme" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline underline-offset-3  ">Contacto</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
// border-red-500 border
export default Header
