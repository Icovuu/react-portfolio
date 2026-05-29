import Footer from '../components/Footer';
import Nav from '../components/Nav';
import portfolio from '../assets/gameDesignWebsite.png';
import gameAboutMe from '../assets/gameAboutMe.png';
import gameProjects from '../assets/gameProjects.png';
import gameLowPoly from '../assets/gameLowPoly.png';
import gameHellhound from '../assets/gameHellhound.png';
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'

export default function Projects() {
  const [popupImg, setPopupImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (popupImg) {
    document.body.style.overflow = "hidden"; // stop scroll
  } else {
    document.body.style.overflow = "auto"; // restore scroll
  }
  return () => {
    document.body.style.overflow = "auto"; // safety cleanup
  };
  }, [popupImg]);

  const springIn = useSpring({
  from: { transform: 'translateX(100%)', opacity: 0 },
  to: { transform: 'translateX(0%)', opacity: 1 },
  config: { tension: 120, friction: 14 }
});

  return (
    <>
      <Nav />
      <div className='mainP'>
      <div className='mainProjects'>
        <h1 class='h1Projects'>Old Wordpress portfolio</h1>
        <div className='columnProjects'>
          <div className='pProjects'>
           <p className='pProjects'>This is my old portfolio that I created on a free version of Wordpress.</p>
            <a href='https://laurenoldemonnikhof.wordpress.com/' className='link' target="_blank" rel="noreferrer" alt='Link to Wordpress portfolio'>Link to Wordpress portfolio</a>
          </div>
        </div>
        <animated.div style={springIn} className='columnProjects'>
          <img src={portfolio} className="image" alt="Wordpress portfolio screenshot" onClick={() => setPopupImg(portfolio)} />
          <div className='smallColumnProjects'>
            <img src={gameAboutMe} alt="About me page screenshot" onClick={() => setPopupImg(gameAboutMe)} />
            <img src={gameProjects} alt="Projects page screenshot" onClick={() => setPopupImg(gameProjects)} />
            <img src={gameLowPoly} alt="Low poly artwork screenshot" onClick={() => setPopupImg(gameLowPoly)} />
            <img src={gameHellhound} alt="Hellhound artwork screenshot" onClick={() => setPopupImg(gameHellhound)} />
          </div>
        </animated.div>
      </div> 
      </div>
      <Footer />

      {popupImg && (
        <div id="popup" onClick={() => setPopupImg(null)}>
          <img src={popupImg} alt="" />
        </div>
      )}
    </>
  );
}



