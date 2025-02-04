import React from 'react';
import PropTypes from 'prop-types'; 

function Profile({ location, title }) {
  return (
    <div>
      <img src={location} alt={title} />
    </div>
  )
}

// Profile.propTypes = {
//   location: PropTypes.string.isRequired,  
//   title: PropTypes.string.isRequired,     
// };

export default Profile