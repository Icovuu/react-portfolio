import Footer from '../components/Footer';
import Nav from '../components/Nav';
import hellhound from '../assets/hellhound.jpg';
import hellhound1 from '../assets/hellhound1.png';
import hellhound2 from '../assets/hellhound2.png';
import hellhound3 from '../assets/hellhound3.png';
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
        <h1 className='h1Projects'>Unity 3D game</h1>
        <div className='columnProjects'>
          <div className='pProjects'>
          <p className='pProjects'>This game is called Hellhound's trial, it's made in Unity.</p>
           <p className='pProjects'>This was the final team project of the Saxion CMGT curriculum, lasting eight weeks. I worked with 5 other students. Our goal was to work with a client and create a game that met their requirements. The client we chose tasked us with developing a horror game inspired by local Twente folklore.</p>
           <p className='pProjects'>I mainly worked on researching our topic, designing the UI for all controls, creating the route and map layout (including placing trees, signs, structures, and more), writing the story and dialogue, and play testing.</p>
          </div>
        </div>
        <animated.div style={springIn} className='columnProjects'>
          <img src={hellhound} className="image" onClick={() => setPopupImg(hellhound)} />
          <div className='smallColumnProjects'>
            <img src={hellhound1} onClick={() => setPopupImg(hellhound1)} />
            <img src={hellhound2} onClick={() => setPopupImg(hellhound2)} />
            <img src={hellhound3} onClick={() => setPopupImg(hellhound3)} />
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