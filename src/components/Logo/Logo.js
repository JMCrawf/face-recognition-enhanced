import React from 'react'
import './Logo.css'
import robot from './logo.png'

const Logo = () => {
  return (
    <div>
      <div style={{ height: '150px' }}>
        <img alt="Decoration" src={robot} />
      </div>
    </div>
  )
}

export default Logo
