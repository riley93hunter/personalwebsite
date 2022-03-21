import Button from 'react-bootstrap/Button';
import rainier from './rainier.jpg';
import mountainPic from './profile pic temp.jpg';
import webPic from './logo-og.png';
import propic from './Riley.jpeg';
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
            <img src={webPic} className='webimage'></img>
          </div>
        </div>
      </div>

      <div className='PortfolioContainerCC'>
        <div className='CourseContainer'>
          <h3 className='CourseHeader'>Course Work - Coming Soon</h3>
            <div className='CourseContainerDivBox'>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Computer Security
                </h3>
                Encryption/decryption, CRUD permissions, security policies, etc all 
                covered in this course.  
              </div>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Advanced Data Structures
                </h3>
                Programming heavy course in C++ that covers different data structures
                including trees, linked lists, queues, hashes and stacks. All done in
                a linux environment.
              </div>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Algorithms
                </h3>
                A look into different algoritms complexity covering their time 
                and space, uses, and structures. Regular expressions, Chomsky Normal
                Form, encryption/decryption and various other topics covered.
              </div>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Object Oriented Principles
                </h3>
                A look into object oriented language and design. The language learned
                was C# and was used to create a Spreadsheet application utilizing
                Visual Studios and gitlab as a semester project. Design patterns, test
                driven development and version control were also main subjects.
              </div>
            </div>
            <div className='CourseContainerDivBox'>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Software Engineering Principles I/II
                </h3>
                Focus on different different workflows, software processes, testing
                protocals for unit, integration and system testing.
              </div>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Database Systems Management
                </h3>
                Focus on Relationial Databases, Postgres SQL, and database
                design and management. Full stack yelp-like application with
                python JSON parser, SQL database and C# XML front end with
                SQL connections. Project has no share permissions due to
                acedemic integrity requirements.
              </div>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Machine Learning
                </h3>
                A class that focuses on different Machine Learning Algorithms
                that can predict outcomes. Classwork done in Python. 
              </div>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Principles of Embedded Software 
                </h3>
                Project based class focusing on embedded software design. 
                Examples of projects were bluetooth fan, traffic light sensor,
                temperature sensor with audio output. Projects based off 
                Texas Instruments microcontroller.
              </div>
            </div>
            <div className='CourseContainerDivBox'>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Systems Programming
                </h3>
                Systems programming in C done in a linux environment. Built a 
                File Extension System satisfactory to course requirements. Utilized
                Git Bash, Raspberry Pi4, Nano and GDB debugger.
              </div>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Software Architecture and Design
                </h3>
                Focuses on the principles of software architecture and various
                design patterns such as abstract factory or composite design 
                patterns. Semester project uses Monogame with a factory design
                pattern in order to build a basic arcade game. Github not available
                for acedemic itegrity purposes.
              </div>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Capstone (Senior Project) I/II
                </h3>
                Year long senior project class where project mentors were assigned
                to our group with a task to work on a given project. Our senior project
                was on the Boeing Natural Language Processing project. We were led by 
                Don Brancato and Rakshit Bhatt. Many technologies were learned including
                Javascript/HTML/CSS with React and Bootstrap. Python flask and CSV crud operations
                were also a major area of the application as is containerization and 
                the software development process. 
              </div>
              <div className='CourseContainerBox'>
                <h3 className='header'>
                  Software Maintenence
                </h3>
                Refactoring, bug fixing, code analysis and quality assurance
                techniques learned in a Java envirnment using Eclipse IDE,
                JDeoderant, PMC, and the command line. 
              </div>
          </div>
        </div>
      </div>

      <div className='PortfolioContainer'>
        <div className='HardSkillsOverview'>
          <h3>
            Hard Skills
          </h3>
          <div className='SkillBox1'>
            <div>
              <h3 className='skillHeader'>
                Languages:
              </h3>
            </div>
            <div className='SkillBoxDiv1'>
             <div className='lang'>
                C/C#
              </div>
              <div className='lang'>
                  Python
              </div>
              <div className='lang'>
                   SQL
              </div> 
              <div className='lang'>
                 Javascript
              </div>
              <div className='lang'>
                HTML/CSS
              </div>
            </div>
          </div>
          <div className='SkillBox1'>
            <div>
              <h3 className='skillHeader'>
                Tools and Teaming:
              </h3>
            </div>
            <div className='SkillBoxDiv1'>
              <div className='lang'>
                .NET XML, XNA and WPF
              </div> 
              <div className='lang'>
                Flask
              </div> 
              <div className='lang'>
                Postgres
              </div> 
              <div className='lang'>
                React and Bootstrap
              </div> 
              <div className='lang'>
                Git/Github
              </div> 
            </div>
          </div>
          <div className='SkillBox1'>
            <div>
              <h3 className='skillHeader'>
                OS and Applications:
              </h3>
            </div>
            <div className='SkillBoxDiv1'>
              <div className='lang'>
                Raspbian/ Ubuntu
              </div> 
              <div className='lang'>
                Windows/ Linux
              </div> 
              <div className='lang'>
                Microsoft Office
              </div> 
              <div className='lang'>
                PMD
              </div> 
              <div className='lang'>
                JDeoderant
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div className='PortfolioContainer'>
        <div className='SoftSkillsOverview'>
          <h3>
            Soft Skills
          </h3>
          <div className='SkillBox1'>
            <div>
              <h3 className='skillHeader'>
                Business Skills:
              </h3>
            </div>
            <div className='SkillBoxDiv1'>
              <div className='lang'>
                Networking
              </div> 
              <div className='lang'>
                Negotiating
              </div> 
              <div className='lang'>
                Public Speaking
              </div> 
              <div className='lang'>
                Project Planning
              </div> 
              <div className='lang'>
                Presenting
              </div>
            </div> 
          </div>
         
          <div className='SkillBox1'>
            <div>
              <h3 className='skillHeader'>
                Team Skills:
              </h3>
            </div>
            <div className='SkillBoxDiv1'>
              <div className='lang'>
                Team Building
              </div> 
              <div className='lang'>
                Team Management
              </div> 
              <div className='lang'>
                Inspire Teams
              </div> 
              <div className='lang'>
                Delegation
              </div> 
            </div>  
          </div>
          <div className='SkillBox1'>
            <div>
              <h3 className='skillHeader'>
                Individual Skills:
              </h3>
            </div>
            <div className='SkillBoxDiv1'>
              <div className='lang'>
                Technical Writing
              </div>  
              <div className='lang'>
                Problem Solving
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div className='PortfolioContainer'>
        <div className='ExtracurricularsContainer'>
          <h3>
            Extracurricular Activities
          </h3>
          <div className='SkillBox4'>
            <div className='SkillBox6'>
              <div className='picBox'>
                <img src={mountainPic} className='activityPic'></img>
              </div>
              <div className='textBox'>  
                <h3 className='ActivityTitle'>
                  Martial Arts
                </h3>
                  Riley enjoys a wide variety of martial arts disciplines including
                  Kyokushin, Kickboxing, Judo, and Jiu Jitsu and has competitive 
                  experience. Riley holds a Black Belt in Kyokushin Karate
                  and a Gokyu rank in Judo.
              </div>
            </div>
            <div className='SkillBox7'>
              <div className='picBox'>
                <img src={mountainPic} className='activityPic'></img>
              </div>
              <div className='textBox'>
                <h3 className='ActivityTitle'>
                  Outdoors
                </h3>
                  As a born, raised and proud Pacific Northwest resident, Riley
                  enjoys frollicing in the lush forests and on the formidable 
                  mountains. Activities include skiing, hiking, mountain
                  biking and fighting sasquatches with his bare fists. Riley
                  is also qualified to be your friendly yacht skipper.  
              </div>
            </div>
          </div>
          <div className='SkillBox5'>
            <div className='SkillBox8'>
              <div className='picBox'>
                <img src={mountainPic} className='activityPic'></img>
              </div>
              <div className='textBox'>  
                <h3 className='ActivityTitle'>
                  Music Creation
                </h3>
                  Riley has a long time history playing and making music
                  as an amateur internet artist. The types of music Created
                  are a broad range from Metal all the way to obscure, creative
                  experimental tracks. Instruments played include the guitar,
                  bass, keyboards and programming. 
              </div>
            </div>
            <div className='SkillBox9'>
              <div className='picBox'>
                <img src={mountainPic} className='activityPic'></img>
              </div>
              <div className='textBox'>  
                <h3 className='ActivityTitle'>
                  Game Creation
                </h3>
                  After learning Monograme C# XNA from the design and architecture
                  it has been decided that Riley will start on a long time dream 
                  side scroller game. More on this game will be added as progress
                  is made hopefully this summer.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='End'>
        <div className='EndContainer'>
          <div className='ReferencesContainer'>
            <h3>
              References
            </h3>
            Don Brancato
            <br></br>
            Rackshit Bhatt
            <br></br>
            Phillip Morgan
            <br></br>
            
            
          </div>
          <div className='ClosingNotesUpdatesContainer'>
            <h3>
              Site Updates
            </h3>
            - 3/7 Created layout and template for site.
            <br></br>
            - 3/8 Continuing to fill out content for the site.
            <br></br>
            - 3/20 Content complete. Slightly refactored.
            <br></br>
            - Future Updates: Comments, better UI/UX and refactor.  
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
