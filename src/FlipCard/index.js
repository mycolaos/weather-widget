import React, { Component } from 'react'
import './styles.scss'

class FlipCard extends Component { 
  state = { active: false };

  toggle = () => {
    this.setState({ active: !this.state.active})
  }

  render() {
    const { frontComponent, backComponent, showBack } = this.props
    const className = showBack ? 'active' : ''
    
    return (
      <div className={`flipcard ${className}`}>
        <div className='flipcard__inner'>
          <div className='flipcard__back'>
            {backComponent}
          </div>
          <div className='flipcard__front'>
            {frontComponent}
          </div>
        </div>
      </div>
    )
  }
}

export default FlipCard