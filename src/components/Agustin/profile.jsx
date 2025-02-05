import PropTypes from 'prop-types'; 

function Profile({ location, title }) {
  return (
    <div className='bg-[var(--bh)] rounded-full w-full p-[0.5vw]' >
      <img className='rounded-full w-[20vw] h-[20vw]' src={location} alt={title} />
    </div>
  )
}


export default Profile