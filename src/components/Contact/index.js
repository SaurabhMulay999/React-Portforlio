import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetter';
import { useState,useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refform = useRef()
    


    useEffect(() => {
      
    
      setTimeout(() => {
          return setLetterClass('text-animate-hover')
      },3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
          .sendForm(
            'service_8x843s6',
            'template_2w1b65l',
            refform.current,
            'wq1PvgmvsCe2lTkuT'
          )
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )

        
        
    }
    
    
    return (

        <>
            <div className="container contact-page">

                <div className="text-zone">
                    <h1>

                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','M','e']} idx={15} />
                    
                    
                    </h1>

                    <p>
                        If you hava any request or questions,don't hesitate to contact me using
                        below form either.

                    </p>
                    <div className="contact-form" >
                        <form ref={refform} onSubmit={sendEmail}>

                       



                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required></input>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>


                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject'/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message'></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>



                            </ul>\
                            </form>
                    </div>
                </div>
        
        


            </div>
            <Loader type="pacman" />

        </>
    );

}


export default Contact;