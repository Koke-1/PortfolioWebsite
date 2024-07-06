import React from 'react'
import SoccerBall from "./img/SoccerBall.jpg"
import Coin from "./img/Coin.jpg"

const Projects = () => {
  return (
    <div className='ProjectP' id='ProjectP' > 
     <h1>Projects</h1>
     <div className='ProjectL' >
      <div className='ProjectH' ><a target='_Blank' href='https://koke-1.github.io/Soccer/'  >
        <img src={SoccerBall} height={`300px`} />
        <h2>Soccer</h2> 
        </a>
      </div>
       <div className='ProjectH' >
        <a target='_Blank' href='https://koke-1.github.io/fullstack0/' >
        <img src={Coin} height={`300px`} />
        <h2>Coin</h2>
        </a>
       </div>
     </div>
     </div>
    
    
  )
}

export default Projects