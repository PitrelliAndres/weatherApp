import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather';  
import './styles.css'

const location = "Buenos Aires,ar"
const keyApi = "744d7767f8e42314ea662480a036fa91"
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keyApi}`

class WeatherLocation extends Component {
    constructor(){
    super();
    this.state = { 
            city: 'Buenos Aires',
            data: null
        };
    }

    handleUpdateClick = () => {
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
        return (
        <div className='weatherLocationCont'>
            <Location city={this.state.city}/>
            {this.state.data ? <WeatherData data={this.state.data}/> : 'Cargando...'}
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );
    }
}
export default WeatherLocation;