import React from 'react'
import CroppedProfile from '../CroppedProfile.png'

function AboutMe() {


     return (

          <div id="AboutMe" className="about-container">

               <div className="about-content">
                    <img src={CroppedProfile} />
                    {/* <h2>README.md</h2> */}
                    
               </div>
               
               <div className="about-container-content">
                    <div className="about-content-container">
                         <h5 className="about-subtitle">Where I've been</h5>
                         <p>I was born in California, where I spent <span className="about-accents">6 years studying Buddhism</span> with monks and was class president in high school. In college, I became a brother of Sigma Chi, the recruitment chairman of Mu Delta, and shadowed the leading pioneer of <span className="about-accents">ketamine psychotherapy.</span> </p>
                    </div>

                    <div className="about-content-container">
                         <h5 className="about-subtitle">What I'm doing</h5>
                         <p>After graduating from University of California, Santa Barbara with a <span className="about-accents">degree in Biology</span>, I threw in my scrubs to study<span className="about-accents"> full stack web development</span> at Lambda School. If I’ve learned anything from coding thus far, it’s that <span className="about-italics">languages are always changing and evolving - and I plan on doing the same.</span></p>
                         {/* <p>And I'd like to say surfing is my hobby, but to be honest with you after nearly drowning twice - once during a microburst in the middle of the ocean and again while looking for bioluminescent algae - I've decided to give it a little break. </p> */}
                    </div>

                    <div className="about-content-container">
                         <h5 className="about-subtitle">What I hope to do</h5>
                         <p>To keep it simple, I want to keep finding <span className="about-accents">opportunities to grow</span>, both personally and professionally. Anything within the realm of working for a small to mid-sized company that's challenging and fast-paced would be an absolute dream.</p>
                    
                    </div>
               </div>

           
          </div>
     )
}

export default AboutMe