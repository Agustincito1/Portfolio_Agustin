import React, { useEffect, useState, useRef, Children } from "react";
import PropTypes from "prop-types";

const SectionLinked = ({ active, id, children }) => {
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); 
        } else {
          setVisible(false); 
        }

      },
      {
        hreshold: 0.2,
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      desactivated(); // Llamar a la función cuando el elemento no es visible
    }
    else{
      activated();
    }
    
  }, [isVisible]);


  function activated(){
    const divs = document.querySelectorAll('.linked');
    divs.forEach(div => {
      divs.forEach(d => d.classList.remove('hoverLink'));
      divs.forEach(d => d.classList.remove('selectedLinked'));
      divs.forEach(d => d.classList.add('hoverLink'));
    });

    const activeElement = document.querySelector(`a[name="${active}"]`);
    if (activeElement) {
      activeElement.classList.add("selectedLinked");
    }
  }

  function desactivated(){
    const divs = document.querySelectorAll('.linked');
    divs.forEach(div => {
      divs.forEach(d => d.classList.remove('hoverLink'));
      divs.forEach(d => d.classList.remove('selectedLinked'));
      divs.forEach(d => d.classList.add('hoverLink'));
    });
  }



  return (
    <div className="" id={id} ref={elementRef}>
      {children}
    </div>
  );
};

export default SectionLinked;
