import Footer from '../components/Footer';
import Nav from '../components/Nav';
import vn from '../assets/whisperingHearts.png';
import whispering1 from '../assets/whispering1.png';
import whispering2 from '../assets/whispering2.png';
import whispering3 from '../assets/whispering3.png';
import whispering4 from '../assets/whispering4.png';
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
        <h1 className='h1Projects'>Ren'Py Visual novel</h1>
        <div className='columnProjects'>
          <div className='pProjects'>
           <p className='pProjects'>A visual novel I created using Ren'Py Called Whispering Hearts.</p>
            <p className='pProjects'>Whispering Hearts is a visual novel I created about friendship, jealousy, and self-discovery. It tells the story of Fuyuko, a shy high schooler, and her outgoing best friend, Yukie.</p>
            <p className='pProjects'>This visual novel has been written and programmed by me, where as the art for the characters and background has been created by someone else. You can find the credits for that on my itch.io page linked below.</p>
            <a href='https://lauren12mei.itch.io/whispering-hearts' className='link' target="_blank" alt='Link to Whispering Hearts'>Play my game on itch.io!</a>
          </div>
        </div>
        <animated.div style={springIn} className='columnProjects'>
          <img src={vn} className="image" onClick={() => setPopupImg(vn)} />
          <div className='smallColumnProjects'>
            <img src={whispering1} onClick={() => setPopupImg(whispering1)} />
            <img src={whispering2} onClick={() => setPopupImg(whispering2)} />
            <img src={whispering3} onClick={() => setPopupImg(whispering3)} />
            <img src={whispering4} onClick={() => setPopupImg(whispering4)} />
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