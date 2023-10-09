import React from 'react'
import Discover from './Discover'
import Homebox from './Homebox'
import Playlist from './Playlistbox'
import { Link } from 'react-router-dom';

import Verticalline from './Verticalline'



const Homepage = () => {
  return (
    <div className='Container'>
    
      <Discover/>
  
     
        <Homebox/>
      
       <Verticalline/>
       
        <Playlist/>
   
        <Verticalline/>
    
     
      
   
    </div>
  )
}

export default Homepage
