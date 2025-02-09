import React, { useEffect, useState, useRef } from "react";

const ImageScroll = ({ children, percentege }) => {
    const [isVisible, setVisible] = useState(false);
    const elementRef = useRef(null);

     useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting); // Cambiar el estado cuando el elemento entra en la vista
            },
            {
                threshold: 0.5, // Se activa cuando el 50% del elemento es visible
            }
        );

        const currentElement = elementRef.current; // Obtener el elemento referenciado

        if (currentElement) {
            observer.observe(currentElement); // Comenzar a observar el elemento
        }

        // Limpiar el observer cuando el componente se desmonte
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement); // Dejar de observar el elemento al desmontar
            }
        };
    }, []);

    return (
        <div
        ref={elementRef}
        className={`image ${isVisible ? 'visible' : 'invisible'}`}

        style={{
            "--percentage": percentege 
        }}
        >
        {children}
        </div>
    );
};



export default ImageScroll;