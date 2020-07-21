import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Mypic from '../assets/1593540878501.png'

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Mypic}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

               <hr/>

               <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

               <div className="social-links">

                 {/*Linkedin */}
                 <a href="https://www.linkedin.com/in/akshat-chanchal-8b782218a" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-linkedin-square"  aria-hidden="true" />
                 </a>

                 {/*github */}
                 <a href="https://github.com/akshatchanchal" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-github-square"  aria-hidden="true" />
                 </a>

                 {/*freeCodeCamp */}
                 <a href="https://www.freecodecamp.org/akshatchanchal" rel="noopener noreferrer" target="_blank">
                 <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                 </a>
               </div>
             </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing