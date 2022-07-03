import IMGlogo from '../../assets/images/My.jpg';
import LogoS from '../../assets/images/logo-s.png';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import AnimatedLetter from '../AnimatedLetter';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'u', 'r', 'a', 'b', 'h'];
    const jobArray = ['S', 'a', 'l', 'e', 's', 'f', 'o', 'r', 'c', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    
 
    useEffect(() => {
        console.log('first');
    
       setTimeout(() => {
          return setLetterClass('text-animate-hover');
      }, 2000)
      }, [])
        


    return (

        <>
        <div className="container home-page">
            <div className="text-zone">
                
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    
                    
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>


                <img src={LogoS} alt="Developer"></img>
                    <AnimatedLetter letterClass={letterClass} strArray={nameArray} idx={15} />

                <br />
                <AnimatedLetter letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>
                    Salesforce Developer + Tester / Good at FrontEnd /Embedded C C++.

                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            

            </div>
            <Loader type='pacman'/>
            </>
    )
} 




export default Home;