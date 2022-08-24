import React from 'react'
// import Button from 'react-bootstrap/esm/Button'
import SearchIcon from '@material-ui/icons/Search'
import "./Home.css"
function Home() {
  return (
    <div className="Home">
      <div className="r_icon">
        <input type="text" name="search" className='searchInput'/>
        <button className="log_button"><SearchIcon/></button>
        <img src="./resurgence.png" alt='Resurgence logo' className="icon_image"/>
      </div>
      <div className="header">
        
        <div className='links'>
            <button type="button">Home</button>
            <button type="button">About Us</button>
            <button type="button">Quotes</button>
            <button type="button">WriteUps</button>
        </div>
      </div>

    </div>
  )
}

export default Home