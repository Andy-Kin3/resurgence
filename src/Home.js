import React from 'react'
// import Button from 'react-bootstrap/esm/Button'
import SearchIcon from '@material-ui/icons/Search'
import "./Home.css"
import Services from './Services'
function Home() {
  return (
    <div className="Home">
      <div className="r_icon">
        <input type="text" name="search" className='searchInput'/>
        <button className="log_button"><SearchIcon/></button>
        <img src="./logo.jpg" alt='Resurgence logo' className="icon_image"/>
      </div>
      <div className="header">
        <div className='links'>
            <button type="button" className='active'>Home</button>
            <button type="button">About Us</button>
            <button type="button">Quotes</button>
            <button type="button">Write-Ups</button>
            <button type="button">Videos</button>
        </div>
      </div>
      <div className='home_layout'>
        <Services id='1' title="Quotes" info="Get spirit filled, life changing and inspiring quotes daily
        to impact you and strengthen you, from the resurgence team, every quote given to you is biblical and related to instance
        in your life be it present, past or future click the button more button and check them out..."  />
        <Services id='2' title="Write-Ups" info="So many stories to tell and so many figures to be inspired about,
        get connected with the resurgence team from their experiences and catch the fire
        from people's experiences. these write ups are solutions and
        contributions of impactions for every one of us who belong to the kingdom of God..."/>
        <Services id='3' title="Videos" info="We have a lot of video contents to share with you, places we've been and the experiences we have had 
         with God also revelation and prayers sessions to grow with you click the button below to get to the home of resurgence videos..."/>
      </div>
      <div className='footNote'>
        Copyright© Created by Resurgence..
      </div>
    </div>
  )
}

export default Home