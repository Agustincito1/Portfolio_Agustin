import PropTypes from 'prop-types'; 

function Profile({ location, title }) {
  return (
    <div className='bg-[var(--bh)] rounded-full w-full p-0.5' >
      <img className='rounded-full w-full h-full' src={location} alt={title} />
    </div>
  )
}


export default Profile