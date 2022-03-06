import Button from 'react-bootstrap/Button';
import rainier from './rainier.jpg';
import propic from './profile pic temp.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rainier} className='rainier'></img>
        Riley Hunter
        <h3 className="subheader">Aspiring Software Engineer</h3>
        <div>
        <a href='https://www.linkedin.com/in/riley-hunter-645379174/' className='LinkedIn'>LinkedIn</a>
        &nbsp;
        <a href={`mailto:${"riley93hunter@gmail.com"}`} className="email">
              Email
            </a>
        </div>
      </header>
      
      <div className='PortfolioContainer'>
        
        
        <div className='AboutMe'>
          <div className='aboutmebox'>
            <h3 className="aboutheader">About Me</h3>
            <div className='aboutdesc'> 
              Currently I am an undergrad at Washington State University about to graduate with a
              Bachelors of Science in Software Engineering in May, 2022. I aspire to use my 
              learning to foster a lifelong career in Software Development, Engineering, and 
              Architecture in order to make an impact in the world.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              Like what you see?
              <br></br>
              Scroll down!
            </div>
          </div>
          <div className='probox'> 
            <img src={propic} className='propic'></img>
          </div>
        </div>
          
      </div>
        <div className='PortfolioContainer'>
          <div className='ProjectsContainer'>
            <h3 className="projectheader">Project - Boeing Natural Language Processing</h3>
            <div className='projectbody'>
            </div>
            <div className='projectlinkbox'>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
