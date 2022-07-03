import { faAngular, faCss3, faHtml5, faJava, faJs, faPython, faReact, faSalesforce } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState,useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetter from '../AnimatedLetter';
import './index.scss';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
      
    
      setTimeout(() => {
          return setLetterClass('text-animate-hover')
      },3000)
    }, [])
    

    return (

        <>
            
        
        <div className="container about-page">

            <div className="text-zone">

                <h1>
                    <AnimatedLetter letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />

                    
                </h1>
                <p>
                        Name: Saurabh Dattatray Mulay <br />
                        B.Tech (Shri Guru Gobind Singh Institute of Engineering and Technology (2018-2021))<br/>
                        B.Tech (College Of Engineering,Pune)(2019-2020)<br />
                        <br />
                        I do have interest in salesforce development, I have an understanding of salesforce apex,
                    salesforce aura component development,LWC...That's it. I can't say that I'm master in frontend 
                    technologies but I have basic understanding of MERN stack.
                    </p>
                    
                    <br/>
                    <p>
                        Other Technologies I have worked or have an understanding are, Python-flask, Selenium using 
                        Java and Python,Devops,Designing System using LLD.
                        <br/>
                    

                </p>
                <br/>
                    <p>
                        Now currently I have 1 year of experience in software field and looking for 
                        exiting opportunities, Please visit the contact page, there from you can 
                        contact me.

                   

                </p>


            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faSalesforce} color='#18b9e1'/>
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faJs} color='#ecec2f'/>
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJava} color='#EFD81D'/>
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faPython} color='#ecec2f'/>
                    </div>
                </div>


            </div>


            </div>
            <Loader type="pacman"/>
        </>



    )
    
}


export default About;