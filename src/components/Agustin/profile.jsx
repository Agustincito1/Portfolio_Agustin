import PropTypes from 'prop-types'; 

function Profile({ location, title }) {
  return (
    <div className='bg-[var(--bh)] rounded-full w-fit p-1' >
      <img className='rounded-full' src={location} alt={title} />
    </div>
  )
}


export default Profile