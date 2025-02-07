import React, {useEffect, useState} from "react";

const ScrollReveal = ({children})=>{
    const [isVisible, setVisible] = useState(false);
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) =>{
                setVisible(entry.isIntersecting);
            },{
                threshold: 0.5
            }
        )  
        const element = document.getElementById(children.props.id);
        if(element){
            observer.observe(element);
        }

        return () =>{
            if(element){
                observer.unobserve(element);
            }
        };

    },[children]);

    return (
        <div
        id={children.props.id}
        className={`element ${isVisible ? 'visible' : ''}`}
        >
        {children}
        </div>
    );
};


export default ScrollReveal;