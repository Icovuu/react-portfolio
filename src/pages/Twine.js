import Footer from '../components/Footer';
import Nav from '../components/Nav';
import archetype from '../assets/archetype.png';
import archetype1 from '../assets/archetype1.png';
import archetype2 from '../assets/archetype2.png';
import archetype3 from '../assets/archetype3.png';
import archetype4 from '../assets/archetype4.png';
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
        <h1 className='h1Projects'>Twine novel</h1>
        <div className='columnProjects'>
          <div className='pProjects'>
           <p className='pProjects'>This is my choice-based (visual) novel in Twine, called Archetype Personality Test. I created this novel in Twine as part of my minor for my study Creative media and Game technologies.</p>
           <p className='pProjects'>The novel focuses entirely on branching decisions, where every choice matters and leads to different endings. Each ending will assign the player a unique personality type based on the decisions they made throughout the story. </p>
           <a href='https://lauren12mei.itch.io/archetype-personality-test' className='link' target="_blank" alt='Link to Archetype Personality Test'>Play my game on itch.io!</a>
          </div>
        </div>
        <animated.div style={springIn} className='columnProjects'>
          <img src={archetype} className="image" onClick={() => setPopupImg(archetype)} />
          <div className='smallColumnProjects'>
            <img src={archetype1} onClick={() => setPopupImg(archetype1)} />
            <img src={archetype2} onClick={() => setPopupImg(archetype2)} />
            <img src={archetype3} onClick={() => setPopupImg(archetype3)} />
            <img src={archetype4} onClick={() => setPopupImg(archetype4)} />
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