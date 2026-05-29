import Footer from '../components/Footer';
import Nav from '../components/Nav';
import konijnenOpvang from '../assets/KonijnenOpvangWebsite.png';
import contact from '../assets/contact.png';
import reserveren from '../assets/reserveren.png';
import slideShow from '../assets/slideShow.png';
import solliciteren from '../assets/solliciteren.png';
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
        <h1 className='h1Projects'>Bunny shelter website</h1>
        <div className='columnProjects'>
          <div className='pProjects'>
           <pProjects>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</pProjects>
          </div>
        </div>
        <animated.div style={springIn} className='columnProjects'>
          <img src={konijnenOpvang} className="image" onClick={() => setPopupImg(konijnenOpvang)} />
          <div className='smallColumnProjects'>
            <img src={contact} onClick={() => setPopupImg(contact)} />
            <img src={reserveren} onClick={() => setPopupImg(reserveren)} />
            <img src={slideShow} onClick={() => setPopupImg(slideShow)} />
            <img src={solliciteren} onClick={() => setPopupImg(solliciteren)} />
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