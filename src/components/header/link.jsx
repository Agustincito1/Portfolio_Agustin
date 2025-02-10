import React, { useEffect, useState, useRef } from "react";
import PropTypes, { object } from 'prop-types'; 
function Linki({id, name}) {

    const [isVisible, setVisible] = useState(false);
    const elementRef = useRef(null);

    //creacion del usefect
    useEffect(()=>{

        const observer = new IntersectionObserver(
            ([entry]) =>{

            },
            {
                threshold: 0.5,
            }
        );
        const currentElement = elementRef.current;

        if(currentElement){
            observer.observe(currentElement);
        }
    
        return () =>{
            if(currentElement){
                observer.unobserve(currentElement)
            }
        }
    
    }, [])
    

    const divs = document.querySelectorAll('.linked');

    //clickear y que se mantenga el link
    divs.forEach(div => {
      div.addEventListener('click', function() {
        divs.forEach(d => d.classList.remove('hoverLink'));
        divs.forEach(d => d.classList.remove('selectedLinked'));
        divs.forEach(d => d.classList.add('hoverLink'));
        div.classList.add('selectedLinked');
      });
    });

    //clickear y que scrolee lento
    const smoothScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
            behavior: "smooth",
            block: "start"
            });
        }
    };
    

    return (
      <>
        <a 
            href="#" onClick={(e) => { e.preventDefault(); smoothScroll(id);}} 
            className="linked block transition delay-20 duration-200 ease-in-out hoverLink"
        >{name}</a>
      </>
    )
  }
  
export default Linki;