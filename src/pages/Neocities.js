import Footer from '../components/Footer';
import Nav from '../components/Nav';
import neocities from '../assets/NeocitiesWebsite.png';
import IcoDreams from '../assets/IcoDreams.png';
import originalCharacters from '../assets/originalCharacters.png';
import games from '../assets/games.png';
import dressUp from '../assets/dressUp.png';
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
        <h1 className='h1Projects'>Neocities website</h1>
        <div className='columnProjects'>
          <div className='pProjects'>
           <p className='pProjects'>I created this website on Neocities, a free web hosting service, to reflect my style and personality. It showcase my interests and hobbies. It features five pages: a homepage, an 'About Me' section, a showcase of my original characters, a collection of games I'm playing, and a small dress up game.</p>
           <p className='pProjects'>The fifth and last page is a chibi pixel art dress-up game I created using Aseprite and Neocities. In this small game you can dress up a small chibi character and save it on your device.</p>
          <div class="link-container">
          <a href='https://icodreams.neocities.org/' className='link' target="_blank" rel="noreferrer" alt='Link to my neocities website'>Link to my neocities website</a>
          <a href='https://icodreams.neocities.org/dressup' className='link' target="_blank" rel="noreferrer" alt='Link to my dress-up game inside my neocities website'>Link to my dress-up game inside my neocities website</a>
          </div>
          </div>
        </div>
          <animated.div style={springIn} className='columnProjects'>
          <img src={neocities} className="image" alt="Neocities website screenshot" onClick={() => setPopupImg(neocities)} />
          <div className='smallColumnProjects'>
            <img src={IcoDreams} alt="IcoDreams screenshot" onClick={() => setPopupImg(IcoDreams)} />
            <img src={originalCharacters} alt="Original characters page screenshot" onClick={() => setPopupImg(originalCharacters)} />
            <img src={games} alt="Games page screenshot" onClick={() => setPopupImg(games)} />
            <img src={dressUp} alt="Dress-up game screenshot" onClick={() => setPopupImg(dressUp)} />
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



