import React, { Component } from 'react'
import './styles.scss'

import WeatherWidget from '../WeatherWidget'
import GoogleMap from '../GoogleMap'

const weatherImage = (icon) => 
  <img className='openweather-icon'
    src={'http://openweathermap.org/img/w/' + icon + '.png'} />

class WeatherWidgetOpenWeatherGMap extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      googleApiKey: props.googleApiKey,
      openWeatherApiKey: props.openWeatherApiKey,
      loading: true,
      weatherData: {},
      mapData: {
        center: {
          lat: 35.652832,
          lng: 139.839478
        },
        zoom: 7
      }
    }
  }
  

  getUserPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          ...this.state,
          mapData: {
            ...this.state.mapData,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }
        },
        this.fetchData);
      });
    } else {
      // Should be handled somehow, i.e. adding manual input
      alert('Your browser does not support geolocation')
    }
  }

  fillData(data) {
    this.setState({
      ...this.state,
      loading: false,
      weatherData: {
        city: data.name,
        temperature: Math.round((data.main.temp-272.15)) + '°',
        main: weatherImage(data.weather[0].icon),
        feelsLabel: 'Feel like:',
        feelsValue: Math.round((data.main.temp-272.15)) + '°',
        humidityLabel: 'Humidity',
        humidityValue: Math.round(data.main.humidity),
        day: new Date().getDay()-1,
        daysTitles: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut', 'Sun']
      }
    })
  }

  fetchData() {
    const { mapData, openWeatherApiKey } = this.state
    
    const coordinatesString = `lat=${mapData.center.lat}&lon=${mapData.center.lng}`

    fetch('http://api.openweathermap.org/data/2.5/weather?' + coordinatesString + '&APPID=' + openWeatherApiKey)
      .then((response) => this ? response.json() : null)
      .then((data) => {
        // Check if component is unmounted
        if (!this) { 
          return; 
        }
        
        if (data.cod !== 200) {
          console.error('Something wrong occured')
          return;
        }

        this.fillData(data)
      })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.fetchData()
    this.getUserPosition()
  }

  render() {
    const { loading, weatherData, mapData, googleApiKey } = this.state

    return <WeatherWidget 
      data={loading ? {main: 'Loading...', city: weatherData.city} : weatherData}
      backface={<GoogleMap zoom={mapData.zoom} center={mapData.center} apiKey={googleApiKey} />} />
  }
}

export default WeatherWidgetOpenWeatherGMap