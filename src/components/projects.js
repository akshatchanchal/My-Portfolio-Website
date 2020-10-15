import React, { Component } from 'react'
import { Tabs,Tab, Cell ,Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import ReactImg from '../assets/react.png'
import Ml2 from '../assets/image-processing.jpg'
import Ml1 from '../assets/p2img1.png'
import Hc from '../assets/html-css.jpg'

class Projects extends Component {
  constructor(props)
  {
    super(props);
    this.state={ activeTab: 0};
  }
  toggleCategories(){
    if(this.state.activeTab === 0)
    {
      return(
        <div className="project-grid">

          {/* PROJECT#1 */}
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px', background:
          'url('+ReactImg+') center/cover'}}
          >Chat App</CardTitle>
          <CardText>
            Chat App with functionalities similar to facebook messenger. Created with React & Stream Chat API.
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/akshatchanchal/Chat_app">Github</Button>
            <Button colored href="https://codesandbox.io/s/lucid-visvesvaraya-u5x72">CodeSandBox</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        {/*PROJECT #2*/}
//         <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
//           <CardTitle style={{color: '#fff', height:'176px', background:
//           'url('+ReactImg+') center/cover'}}
//           >React Project #2</CardTitle>
//           <CardText>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Mauris sagittis pellentesque lacus eleifend lacinia...
//           </CardText>
//           <CardActions border>
//             <Button colored>Github</Button>
//             <Button colored>Github</Button>
//             <Button colored>Github</Button>
//           </CardActions>
//           <CardMenu style={{color:'#fff'}}>
//             <IconButton name="share"/>
//           </CardMenu>
//         </Card>

        {/*PROJECT #3*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px', background:
          'url('+ReactImg+') center/cover'}}
          >Notes App #3</CardTitle>
          <CardText>
            The app provides user authentication with Amazon Cognito, in-app analytics with Amazon Pinpoint, and it will be connected to a serverless GraphQL backend with AWS AppSync.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>         
      )
    }
    else if(this.state.activeTab === 1)
    {
      return(
        <div className="project-grid">

          {/* PROJECT#1 */}
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color: '#fff' , height:'176px', background:
          'url('+Ml1+') center/cover'}}
          >Recommender System</CardTitle>
          <CardText style={{fontSize:'15px'}}>
            Recommends set of reviewers to author of papers.
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/akshatchanchal/Recommender-Algorithm">Github</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        {/*PROJECT #2*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px', background:
          'url('+Ml2+') center/cover'}}
          >Emotion Recognition</CardTitle>
          <CardText style={{fontSize:'15px'}}>
            Face detection and Emotion Recognition with Python, dlib, OpenCV.
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/akshatchanchal/Emotion-Recognition">GITHUB</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>

      )
    }
    else if(this.state.activeTab === 2)
    {
      return(
        <div className="project-grid">

          {/* PROJECT#1 */}
          <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color: '#fff ' , height:'176px', background:
          'url('+Hc+') center/cover'}}
          >Login Page</CardTitle>
          <CardText style={{fontSize:'15px'}}>
            Made Purely fron HTML and CSS.
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/akshatchanchal/Login-Page/tree/master">Github</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>
      )
    }       
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} 
        onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">
              {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
      </div>
      
    )
  }
}

export default Projects
