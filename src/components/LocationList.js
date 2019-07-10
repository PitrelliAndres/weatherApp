import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';
import './styles.css'

const LocationList = ( {cities}) => {
    const handleWeatherLocationClick = city => {
         
    };
    const strToComponent = cities => (
        cities.map((city)=>
        (
            <WeatherLocation 
                key={city} 
                city={city}
                onWeatherLocationClick={()=> handleWeatherLocationClick(city)}/>))
    );
    return (
    <div className='locationList'>
        {strToComponent(cities)}
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;