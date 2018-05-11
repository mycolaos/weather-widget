import React, { Component } from 'react'
import './styles.scss'

import WeatherWidget from './WeatherWidget'
import WeatherWidgetOpenWeatherGMap from './WeatherWidgetOpenWeatherGMap'

class App extends Component { 
  state = {
    weatherData: {
      city: 'Roma',
      temperature: '15°',
      main: '☁ Nuvoloso ☁',
      feelsLabel: 'Si sente:',
      feelsValue: '6°C',
      humidityLabel: 'Umidità',
      humidityValue: '44',
      day: 4,
      daysTitles: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
    }
  };

  render() {
    const { weatherData } = this.state

    return (
      <div className='app'>
        <WeatherWidgetOpenWeatherGMap
          openWeatherApiKey='YOUR_KEY'
          googleApiKey='YOUR_KEY'
          />
        <hr />
        <WeatherWidget 
          data={weatherData} 
          backface={
            <h1>{weatherData.city} {weatherData.temperature}</h1>} />
      </div>
    )
  }
}

export default App