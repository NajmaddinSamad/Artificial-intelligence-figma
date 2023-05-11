import React from 'react'
import '../assets/style/AwardsContainer.css'
import AwardsInfo from  '../AwardsInfo.json'
import Award from './Award'
const AwardsContainer = () => {
  return (
    <div className='awards row '>
      
         {
AwardsInfo.map(comingInfo =>(
    <Award comingPhoto={comingInfo.awardsPhoto}/>
))
         }
    </div>
  )
}

export default AwardsContainer