import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import './styles.scss'

class GoogleMap extends Component {

  render() {
    const { zoom, center, apiKey } = this.props

    return (
      <div className='google-maps-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          center={center}
          zoom={zoom}
          >
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap