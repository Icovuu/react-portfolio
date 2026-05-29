import Footer from '../components/Footer';
import Nav from '../components/Nav';
import find from '../assets/findYourWayOut.png';
import find1 from '../assets/find1.png';
import find2 from '../assets/find2.png';
import find3 from '../assets/find3.png';
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
        <h1 className='h1Projects'>Unity 2D game</h1>
        <div className='columnProjects'>
          <div>
           <p className='pProjects'>The game is called Find your way out, I created this 2D game in Unity as part of my study Creative media and Game technologies. It's a game focusing on level design.</p>
            <p className='pProjects'>The player has to find a way out of the cave, they fell into. There are 3 levels that the player has to complete, while collecting starts. When the player has collected all the stars and managed to avoid all the obstacles, they can make their way out of the cave.</p>
          </div>
        </div>
        <animated.div style={springIn} className='columnProjects'>
          <img src={find} className="image" onClick={() => setPopupImg(find)} />
          <div className='smallColumnProjects'>
            <img src={find1} onClick={() => setPopupImg(find1)} />
            <img src={find2} onClick={() => setPopupImg(find2)} />
            <img src={find3} onClick={() => setPopupImg(find3)} />
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