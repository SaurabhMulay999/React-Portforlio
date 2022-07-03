import './index.scss'
import { Link ,NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (

    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoS} alt='logo' />
          
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4e4e" />
            </NavLink>
            <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4e4e" />
            </NavLink>
            <NavLink className="contact-link" exact="true" activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4e4e" />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target="_blank"  rel='noreferrer' href='https://www.linkedin.com/in/sourabh-mulay-2b124a164/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>

                </a>
            </li>
            <li>
                <a target="_blank"  rel='noreferrer' href='https://www.youtube.com/channel/UCwTq4EBT6UBI-86ZE27Qjxg/featured'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>

                </a>
            </li> <li>
                <a target="_blank"  rel='noreferrer' href='https://github.com/SaurabhMulay999'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>

                </a>
            </li>
        </ul>
    </div>
);


export default Sidebar;
