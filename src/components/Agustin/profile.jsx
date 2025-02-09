import PropTypes from 'prop-types'; 
import ImageScroll from '../../functions/ImageShow';

function Profile({ location, title }) {
  return (
    <ImageScroll percentege="15%">
      <div className='bg-[var(--bh)] rounded-full w-full p-[0.5vw]' > 
        <img className='rounded-full w-[20vw] min-h-[20px] min-w-[20px] h-[19vw]' src={location} alt={title} />
      </div>
    </ImageScroll>
  )
}


export default Profile