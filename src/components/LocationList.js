import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city={'Buenos Aires,ar'}/>
        <WeatherLocation city={'Cordoba,ar'}/>
        <WeatherLocation city={'Montevideo,uy'}/>
    </div>
);

export default LocationList;