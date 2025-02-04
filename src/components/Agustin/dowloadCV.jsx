import PropTypes from 'prop-types'; 

function Cv({ text }) {
    return (
      <>
        <button className='bg-[var(--gp)] font-bold text-[var(--bp)] p-[20px] rounded-sm border border-color-[var(--bp)]'>{text}</button>
      </>
    )
}

export default Cv