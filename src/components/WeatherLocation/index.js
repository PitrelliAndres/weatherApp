import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CirculasProgess from 'material-ui/CircularProgress';
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather';  
import './styles.css'

const apiKey = "744d7767f8e42314ea662480a036fa91"
const url = "http://api.openweathermap.org/data/2.5/weather";


class WeatherLocation extends Component {
    constructor({ city }){
    super();
    this.state = { 
            city,
            data: null
        };
    }

    handleUpdateClick = () => {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${apiKey}`
        fetch(api_weather).then(data => {
           return data.json(); 
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState({data});
        });
    }

    componentWillMount () {
        this.handleUpdateClick();
    }

    render = () => {
        const {onWeatherLocationClick} = this.props;
        const {city,data} = this.state;
        return (
        <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {this.state.data ? <WeatherData data={data}/> :
        <CirculasProgess size={60} thickness={7}/>}
        </div>
        );
    }
}

WeatherLocation.propTypes = {
    city : PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;