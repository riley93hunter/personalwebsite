import Button from 'react-bootstrap/Button';
import rainier from './rainier.jpg';
import propic from './profile pic temp.jpg';
import nlppic from './nlp.jpg';
import uploadedFileLink from './ResumeRileyHunter.pdf';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={rainier} className='rainier'></img>
        Riley Hunter
        <h3 className="subheader">Aspiring Software Engineer</h3>
        <div>
          <a href='https://www.linkedin.com/in/riley-hunter-645379174/' className="Button">
            LinkedIn
          </a>
          &nbsp;
          <a href='https://github.com/riley93hunter' className="Button">
              GitHub
          </a>
          &nbsp;
          <a href={`mailto:${"riley93hunter@gmail.com"}`} className="Button">
                 Email
          </a>
          &nbsp;
          <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download className="Button">
              Download Resume
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
          <h3 className="projectheader">Featured Project - Boeing Natural Language Processing</h3>
          <div className='projectbody'>
            Ongoing software project collaboration aimed at creating 
            a Taxonomy Service for Boeing. Started with a working noun 
            parser, turning into a fully functioning full stack web 
            application using React JavaScript/CSS/HTML, backend using 
            Python utilizing Flask routes. Aims for containerization 
            using Docker. GitHub used for version control.
            <br></br>
            <br></br>
            Contributions: While I did make some impact developing the Frontend,
            my focus was on CRUD operations which utilized CSV read/write python 
            libraries for the backend and Python Flask routes for the middle-end.
            Another area of contribution is documentation showcasing technical 
            writing skills. Later, containerization using docker may come into fruition.
          </div>
          <div className='projectlinkbox'>
            <img src={nlppic} className='nlpimage'></img>
          </div>
        </div>
      </div>


      <div className='PortfolioContainer'>
        <div className='ProjectsContainer1'>
          <h3 className="projectheader1">Featured Project - Personal Website and Others</h3>
          <div className='projectbody1'>
            It may seem redundant that I mention my personal website on my personal website,
            but, the fact is this is my first website I've ever made from scratch.
            This website utilizes github pages with React + Bootstrap showcasing
            any newly learned Frontend skills using React/CSS/HTML. This website
            continues to be refactored, with new features and better UI/UX 
            implementation. This page one day may also be a platform for any services.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <a href='https://github.com/riley93hunter/personalwebsite' className="Button">
              GitHub Repo
            </a>
          </div>
          <div className='projectlinkbox1'>
          {/* <img src={nlppic} className='nlpimage'></img> */}
          </div>
        </div>
      </div>

      <div className='PortfolioContainerCC'>
        <div className='CourseContainer'>
          <h3 className='CourseHeader'>Course Work - Coming Soon</h3>
          <div className='DiscreteMathematicsContainer'>
            <h3 className='header'>
              Computer Security
            </h3>
           
          </div>
          <div className='AdvancedDataContainer'>
            <h3 className='header'>
              Advanced Data Structures
            </h3>
            
          </div>
          <div className='AlgorithmsContainer'>
            <h3 className='header'>
              Algorithms
            </h3>
            
          </div>
          <div className='OOPSContainer'>
            <h3 className='header'>
              Object Oriented Principles
            </h3>
            
          </div>
          <div className='SWEContainer'>
            <h3 className='header'>
              Software Engineering Principles I/II
            </h3>
            Focus on different different workflows, software processes, testing
            protocals for unit, integration and system testing.
          </div>
          <div className='DatabasesContainer'>
            <h3 className='header'>
              Database Systems Management
            </h3>
            Focus on Relationial Databases, Postgres SQL, and database
            design and management. Full stack yelp-like application with
            python JSON parser, SQL database and C# XML front end with
            SQL connections. Project has no share permissions due to
            acedemic integrity requirements.
          </div>
          <div className='MLContainer'>
            <h3 className='header'>
              Machine Learning
            </h3>
            A class that focuses on different Machine Learning Algorithms
            that can predict outcomes. Classwork done in Python. 
          </div>
          <div className='EmbeddedContainer'>
            <h3 className='header'>
              Principles of Embedded Software 
            </h3>
            Project based class focusing on embedded software design. 
            Examples of projects were bluetooth fan, traffic light sensor,
            temperature sensor with audio output. Projects based off 
            Texas Instruments microcontroller.
          </div>
          <div className='SystemsContainer'>
            <h3 className='header'>
              Systems Programming
            </h3>
            Systems programming in C done in a linux environment. Built a 
            File Extension System satisfactory to course requirements. Utilized
            Git Bash, Raspberry Pi4, Nano and GDB debugger.
          </div>
          <div className='SADContainer'>
            <h3 className='header'>
              Software Architecture and Design
            </h3>
            Focuses on the principles of software architecture and various
            design patterns such as abstract factory or composite design 
            patterns. Semester project uses Monogame with a factory design
            pattern in order to build a basic arcade game. Github not available
            for acedemic itegrity purposes.
          </div>
          <div className='CapsContainer'>
            <h3 className='header'>
              Capstone (Senior Project) I/II
            </h3>
            
          </div>
          <div className='OtherContainer'>
            <h3 className='header'>
              Software Maitenence
            </h3>
            
          </div>
        </div>
      </div>

      <div className='PortfolioContainer'>
        <div className='HardSkillsOverview'>
          <h3>
            Hard Skills
          </h3>
        </div>
      </div>

      <div className='PortfolioContainer'>
        <div className='SoftSkillsOverview'>
          <h3>
            Soft Skills
          </h3>
        </div>
      </div>

      <div className='PortfolioContainer'>
        <div className='ExtracurricularsContainer'>
          <h3>
            Extracurricular Activities
          </h3>
        </div>
      </div>

      <div className='End'>
        <div className='EndContainer'>
          <div className='ReferencesContainer'>
            <h3>
              References
            </h3>
            
          </div>
          <div className='ClosingNotesUpdatesContainer'>
            <h3>
              Site Updates
            </h3>
            - 3/7 Created layout and template for site.
            <br></br>
            - 3/8 Continuing to fill out content for the site.
            <br></br>
            - Future Updates: Comments, better UI/UX and refactor.
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
