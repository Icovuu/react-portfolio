import '../styling/Header.css';
import {Link} from "react-router-dom"
import logo from '../assets/logo.png';
import cloud from '../assets/cloud.png';
import cherryTree from '../assets/cherryTree.png';
import { useSpring, animated } from '@react-spring/web'

export default function Header() {
    const springIn = useSpring({
  from: { transform: 'translateX(100%)', opacity: 0 },
  to: { transform: 'translateX(0%)', opacity: 1 },
  config: { tension: 120, friction: 14 }
});

    return (
        <header className="header">
            <p className='important'>Important! This website is a work in progress and possibly has multiple bugs. For now this website only works on desktop.</p>
                <div className="headerMiddle"> 
                <Link to="/Home">
                    <animated.img style={springIn} src={logo} className="logo" alt="logo" />
                </Link>
                </div>
                <img src={cherryTree} className='cherry' alt='cherry tree'/>
                <img src={cloud} className='cloud1' alt='cloud'/>
                <img src={cloud} className='cloud2' alt='cloud'/>
                <img src={cloud} className='cloud3' alt='cloud'/>
                <img src={cloud} className='cloud4' alt='cloud'/>
                <img src={cloud} className='cloud5' alt='cloud'/>
                <ul>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#websites">Websites</a></li>
                    <li><a href="#games">Games</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
              </header>
    )
}