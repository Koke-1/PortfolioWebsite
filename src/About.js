import React from 'react'
import soccer from "./img/soccer.jpg"
import soccer1 from "./img/soccer1.png"
const About = () => {
  return (
    <div className='AboutP' id='AboutP' >
        <div className='Image00' >
            <img src={soccer} />
        </div>
        <div className='ATextH' >
          <div className='AText' >
            <h1>About Me</h1>
            <p>Hello, my name is Jorge San Juan, but you can just call me George.</p>
            <p>I am a Web Developer based in Houston, Texas, that has a ton of hobbies besides coding.</p>
            <p>I enjoy learning about the history of various countries and eras. As a child, I would watch hours of historical content on YouTube and piece together the causes and effect of events in history that lead to other events.</p>
            <p>Soccer is my other pass time, I used to play it but nowadays I watch it from the comfort of my room every week.</p> 
            <p>I got into coding from my joy of video games as a kid, especially web development because of the flexibility of things you can do with it, from video games, e-commerce, and vlogs to plenty of other things.</p>
            
          </div>
        </div>
        <div className='Image01' >
            <img src={soccer1} />
        </div>
    </div>
  )
}

export default About