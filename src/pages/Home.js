import '../styling/Home.css';
import '../styling/Projects.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import stroper from '../assets/DeStroperWebsite.png';
import neocities from '../assets/NeocitiesWebsite.png';
import portfolio from '../assets/gameDesignWebsite.png';
import konijnenopvang from '../assets/KonijnenOpvangWebsite.png';
import find from '../assets/findYourWayOut.png';
import plastic from '../assets/plasticPollution.png';
import vn from '../assets/whisperingHearts.png';
import wiivr from '../assets/WiiVR.png';
import archetype from '../assets/archetype.png';
import hellhound from '../assets/hellhound.jpg';
import picture from '../assets/picture.jpg';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'

export default function Home() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const springIn = useSpring({
  from: { transform: 'translateX(25%)', opacity: 0 },
  to: { transform: 'translateX(0%)', opacity: 1 },
  config: { tension: 80, friction: 14 }
});

    return (
        <>
        <Header />
           <main>
          <div className='section'>
          <div className='firstSection'>
           <h1 className='h1Section' id="about">About Me</h1>
           <p className='pSection'>I'm Lauren Olde Monnikhof, a 20-year-old with a huge love for visual novels, anime, games, and web and game design. In my portfolio, you will find websites I have created both professionally and in my free time, as well as games I developed during my studies in Creative Media and Game Technologies.</p>
           </div>
           <div className='secondSection'>
           <animated.img style={springIn} src={picture} alt="Picture of Lauren" className="picture"/> 
           </div>
           </div>

           <h1 className='h1Home' id="websites">Websites</h1>
            <div className='container'>
            <div className='column'> 
              <img src={stroper} alt="De Stroper website" className="image"/> 
              <Link to="/Stroper">
                <div className='button'>
                  <span className='text'>De Stroper website</span>
                </div>
              </Link> 
            </div>

            <div className='column'> 
              <img src={neocities} alt="My neocities website" className="image"/> 
              <Link to="/Neocities">
                <div className='button'>
                  <span className='text'>My neocities website</span>
                </div>
              </Link> 
              </div>

            <div className='column'> 
              <img src={portfolio} alt="My game portfolio" className="image"/> 
              <Link to="/Portfolio">
                <div className='button'>
                  <span className='text'>My game design website</span>
                </div>
              </Link> 
            </div>

            <div className='column'> 
              <img src={konijnenopvang} alt="Bunny shelter website" className="image"/> 
              <Link to="/KonijnenOpvang">
                <div className='button'>
                  <span className='text'>Bunny shelter website</span>
                </div>
              </Link> 
            </div>
            </div>

          <h1 className='h1Home' id="games">Games</h1>
            <div className='container'>
            <div className='column'> 
              <img src={find} alt="Unity 2D game" className="image"/> 
              <Link to="/Unity2D">
                <div className='button'>
                  <span className='text'>Unity 2D game</span>
                </div>
              </Link> 
            </div>

            <div className='column'> 
              <img src={plastic} alt="GameMaker game" className="image"/> 
              <Link to="/GameMaker">
                <div className='button'>
                  <span className='text'>GameMaker game</span>
                </div>
              </Link> 
              </div>

            <div className='column'> 
              <img src={hellhound} alt="Unity 3D game" className="image"/> 
              <Link to="/Unity3D">
                <div className='button'>
                  <span className='text'>Unity 3D game</span>
                </div>
              </Link> 
            </div>

            <div className='column'> 
              <img src={vn} alt="Ren'Py Visual novel" className="image"/> 
              <Link to="/VN">
                <div className='button'>
                  <span className='text'>Ren'Py Visual novel</span>
                </div>
              </Link> 
            </div>

            <div className='column'> 
              <img src={wiivr} alt="Wii and VR game" className="image"/> 
              <Link to="/WiiVR">
                <div className='button'>
                  <span className='text'>Wii and VR game</span>
                </div>
              </Link> 
            </div>

            <div className='column'> 
              <img src={archetype} alt="Twine novel" className="image"/> 
              <Link to="/Twine">
                <div className='button'>
                  <span className='text'>Twine novel</span>
                </div>
              </Link> 
            </div>
            </div>

         </main>
         <Footer />
        </>
        
    )
}