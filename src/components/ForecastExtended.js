import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast'
import './styles.css'


/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves', 
    'Viernes',
]
const data = {
    temperature: 20,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}*/

const apiKey = "744d7767f8e42314ea662480a036fa91"
const url = "http://api.openweathermap.org/data/2.5/forecast";
class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount(){
        const url_forecast = `${url}?q=${this.props.city}&appid=${apiKey}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({
                    forecastData
                });
            }
        );
    }

    renderForecastItemDays(forecastData){
     
        return forecastData.map(forecast =>
            (<ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            data={forecast.data} 
            hour={forecast.hour}>
            </ForecastItem>));
        
    }
    renderProgess = () => {
        return "Cargando Pronostico Extendido"
    }
    render(){

        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) :
                this.renderProgess()}
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;