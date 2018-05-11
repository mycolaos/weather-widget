import React from 'react'
import './styles.scss'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMapMarker from '@fortawesome/fontawesome-free-solid/faMapMarker'

import FlipCard from '../FlipCard'

const Days = ({ className, selected, daysTitles = ['Mon','Tue','Wed','Thu','Fri', 'Sat', 'Sun']}) => 
  <ol className={className}>
    {daysTitles.map((d, i) => 
    <li key={i} className={selected === i ? `${className}-item ${className}-item--selected` : `${className}-item`}>
      {d}
    </li>)}
  </ol>

const BackFace = ({ children }) => 
  <div className='weather-back'>
    {children}
  </div>

const FrontFace = ({
    city,
    temperature,
    main,
    feelsLabel,
    feelsValue,
    humidityLabel,
    humidityValue,
    day,
    daysTitles
  }) => {
  return (
    <div className='weather-front'>
      <div className='weather-front__city'>
        <FontAwesomeIcon icon={faMapMarker} /> {city}
      </div>
      <div className='weather-front__temperature'>{temperature}</div>
      <div className='weather-front__main'>{main}</div>
      <div className='weather-front__feel'>
        <span className='weather-front__feel-label'>{feelsLabel}</span>
        <span className='weather-front__feel-value'>{feelsValue}</span>
      </div>
      <div className='weather-front__humidity'>
        <span className='weather-front__humidity-label'>{humidityLabel}</span>
        <span className='weather-front__humidity-value'>{humidityValue}</span>
      </div>
      <Days className='weather-front__days'
        selected={day} 
        daysTitles={daysTitles} />
    </div>
  )
}

const WeatherWidget = ({ data, backface }) =>
  <FlipCard
    backComponent={<BackFace>{backface}</BackFace>}
    frontComponent={<FrontFace {...data} />}
    />

export default WeatherWidget