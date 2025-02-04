import PropTypes from 'prop-types'; 

function Cv({ text }) {
    return (
      <>
        <button className=' bg-[var(--gp)] w-fit h-fit button font-bold text-[var(--bp)] p-[4%] rounded-[2px] border-[0.5px] border-color-[var(--bp)]'>{text}</button>
      </>
    )
}

export default Cv