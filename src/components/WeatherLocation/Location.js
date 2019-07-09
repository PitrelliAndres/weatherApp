import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'
const Location = ({city} ) => (
   
  
    <div className='locationCont'>
        <hi>{city}</hi>
    </div>
);

Location.propTypes = {
    Location: PropTypes.string.isRequired,
}


export default Location;