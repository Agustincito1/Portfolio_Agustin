import PropTypes from 'prop-types'; 
import { downloadCV } from '../../functions/dowloadPdf';
import React, { useEffect } from 'react';



function Cv({ text }) {
  useEffect(() => {

    const button = document.getElementById('buttonCV');
    
    if (button) {
      button.addEventListener('click', downloadCV);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', downloadCV);
      }
    };
  }, []);

  return (
    <>
      <button id="buttonCV" className=' bg-[var(--gp)] w-fit h-fit button font-bold text-[var(--bp)] p-[4%] rounded-[2px] border-[0.5px] border-color-[var(--bp)] cursor-pointer transition delay-20 duration-200 ease-in-out hover:border-[var(--am)] hover:text-[var(--am)]'>{text}</button>
    </>
  )
}

export default Cv