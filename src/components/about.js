import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class About extends Component {
  render() {
    return (
      <div style={{width:'100%',margin:'auto'}}>
        <Grid className="about-grid">
          <Cell col={4}>
            <div className="about-img">
             {/* <img src="https://cdn1.iconfinder.com/data/icons/kids-cartoon/50/90-512.png" alt="girl"></img> */}
            </div>
          </Cell>
          <Cell col={8}>
            <h2>Who Am I ?</h2>
            <div className="about-box">
              <p>I am currently pursuing my Bachelor's Degree in Engineering from IIT(BHU) Varanasi. I've done projects on React, Express, MongoDB.
              I enjoy web development, my unequivocal love for making things and problem solving. If not studying, you'll find me playing Lawn tennis, lost in Rock music
              ,messing with paint colors or my harmonium.

              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About