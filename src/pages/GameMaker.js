import Footer from '../components/Footer';
import Nav from '../components/Nav';
import plastic from '../assets/plasticPollution.png';
import plastic1 from '../assets/plastic1.png';
import plastic2 from '../assets/plastic2.png';
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
        <h1 className='h1Projects'>GameMaker game</h1>
        <div className='columnProjects'>
          <div className='pProjects'>
           <p  className='pProjects'>This game is called Platic Pollution. I created it on GameMaker as intake requirement for my study Creative Media and Game Technologies.</p>
            <p  className='pProjects'>In the game you play a turtle that has to find their young, while avoiding the plastic in the ocean. You can also find items that help you survive to the end.</p>
          </div>
        </div>
        <animated.div style={springIn} className='columnProjects'>
          <img src={plastic} className="image" onClick={() => setPopupImg(plastic)} />
          <div className='smallColumnProjects'>
            <img src={plastic1} onClick={() => setPopupImg(plastic1)} />
            <img src={plastic2} onClick={() => setPopupImg(plastic2)} />
          </div>
        </animated.div>
      </div> 
      </div>
      <Footer />

      {popupImg && (
        <div id="popup" onClick={() => setPopupImg(null)}>
          <img src={popupImg} />
        </div>
      )}
    </>
  );
}