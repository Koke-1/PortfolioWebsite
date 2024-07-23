import React from 'react'
import Animation01 from './vid/ANIMATIONGIF.gif';
import email from "./img/email.png"
import github from "./img/github.png"
import indeed from "./img/indeed.png"
import linkedin from "./img/linkedin.png"

const Home = () => {
  return (
    <div className='Home' >
      <div className='TitleBar' >
        <div className='Name' >
          <h1>George's Portfolio</h1>
        </div>       
        <div className='Buttons' >
          <a href='#AboutP' className='About'>
            <h3 >About</h3>
          </a>
          <a href='#ProjectP' className='Projects'>
            <h3>Projects</h3>
          </a>
          <div className='Contact' >
            <div>
             <h3>Contacts</h3> 
            </div>
            <div className='CButtons' >
              <button><a href="mailto:sanjuangeorge@gmail.com" ><img src={email} /></a></button>
              <button><a target='_blank' href='https://profile.indeed.com/p/jorges-x9pkqcw' ><img src={indeed}/></a></button>
              <button><a target='_blank' href='https://www.linkedin.com/in/kokesanjuan/' ><img src={linkedin}/></a></button>
              <button><a target='_blank' href='https://github.com/Koke-1'><img src={github}/></a></button> 
            </div>
          </div>
        </div>
      </div>
      <img className='Video01' src={Animation01} /> 
    </div>
  )
}

export default Home