function Header() {
  return (
    <>
      <div className="spacer h-[10vw] ">
      </div>
      
      <header className="w-[100%]  h-fit bg-[var(--dv)] left-0 text-[var(--lv)] p-[5%] pb-[2%] pt-[3.5%] fixed ">
          <nav className="w-full h-fit">
              <ul className="w-full h-full linkText flex justify-between underline-offset-[30%]">
                <li className="w-fit h-fit "><a href="/" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline   hover:scale-120">Agustin</a></li>
                <li className="w-fit h-fit"><a href="/Aboutme" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline  hover:scale-120">Sobre mi</a></li>
                <li className="w-fit h-fit"><a href="/Porfolio" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline   hover:scale-120">Proyectos</a></li>
                <li className="w-fit h-fit"><a href="/Skills" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline   hover:scale-120">Habilidades</a></li>
                <li className="w-fit h-fit"><a href="/Education" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline   hover:scale-120">Educacion</a></li>
                <li className="w-fit h-fit"><a href="/Contactme" className="block transition delay-20 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-[var(--am)] hover:underline   hover:scale-120">Contacto</a></li>
              </ul>
          </nav>
      </header>
    </>
  )
}
// border-red-500 border
export default Header
