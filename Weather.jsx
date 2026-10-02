import React from 'react'
import './Weather.css'
import search_icon from '../assets/search,png'

const Weather = () => {
  return (
    <div className='Weather'>
        <div className="search-bar">
          <input type="text" placeholder='Search'/>
          <img src={search_icon} alt="" />
      </div>
    </div>
  )
}

export default Weather