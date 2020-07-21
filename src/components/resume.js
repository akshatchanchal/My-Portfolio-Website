import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import Mypic from '../assets/1593540878501.png'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'left'}}>
              <img src={Mypic} alt="avatar" 
              style={{height:'300px'}} />
            </div>
            <h2 style={{paddingTop: '2em'}}>Akshat Chanchal</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>Proficient in programming in C/C++ and other languages.
            </p>
            <p>Database languages: SQL, MongoDB</p>
            <h5>Address</h5>
            <p>Ranchi, Jharkhand, India</p>
            <h5>Phone</h5>
            <p>+91 8709438433</p>
            <h5>e-mail</h5>
            <p>akhat.chanchal.met17@itbhu.ac.in</p>
            <h5>Website</h5>
            <p>www.myweb.com</p>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education 
            startYear={2012}
            endYear={2016}
            schoolName="D.A.V. PUBLIC SCHOOL, HEHAL" 
            result="87.4%" />
            
            <Education 
            startYear={2017}
            endYear={2021}
            schoolName="IIT (BHU) VARANASI"
            result="CPI: 8.6" />
            <hr style={{borderTop:'3px solid #e22947'}}/>
            
            <h2>Experience</h2>
            <Experience 
            startYear="20th April,2020"
            endYear="4th July,2020"
            jobName="Full Stack Web Development @ Work on Wheels"
            jobDescription={
            <ul>
            <li>Determining the structure and design of web pages.</li>
            <li> Ensuring user experience determines design choices.</li>
            <li> Developing features to enhance the user experience.</li>
            <li> Striking a balance between functional and aesthetic design.</li>
            <li> Ensuring web design is optimized for smartphones.</li>
            <li> Building reusable code for future use.</li>
            <li> Optimizing web pages for maximum speed and scalability.</li>
            <li> Utilizing a variety of markup languages to write web pages.</li>
            <li> Maintaining brand consistency throughout design.</li>
            </ul>
          }
            />

            <Experience
            startYear="July 2020"
            endYear="July 2020"
            jobName="Software Engineer Virtual Intern @ JP Morgan Chase & Co."
            jobDescription={
              <ul>
               <li> Interface with a stock price data feed and set up your system for analysis of the data </li>
               <li> Implemented the Perspective open source code in preparation for data visualization</li>
               <li> Used Perspective to create the chart for the trader’s dashboard"</li>
              </ul>
            }
            />
            <hr style={{borderTop:'3px solid #e22947'}}/>

            <h2>Skills</h2>
            <Skills skill="Javascript" progress={95}/>
            <Skills skill="HTML/CSS" progress={80}/>
            <Skills skill="NodeJS" progress={50}/>
            <Skills skill="ReactJS" progress={30}/>
            <Skills skill="Express" progress={34}/>
            <Skills skill="MongoDB" progress={60}/>
            <Skills skill="C/C++" progress={100}/>
            <Skills skill="Python" progress={55}/>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume