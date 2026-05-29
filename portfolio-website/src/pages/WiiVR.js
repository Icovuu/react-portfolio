import Footer from '../components/Footer';
import Nav from '../components/Nav';
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
        <h1 className='h1Projects'>Wii and VR game</h1>
        <div className='columnProjects'>
          <div className='pProjects'>
           <p className='pProjects'>This is a VR game I created in Unity using Wii plugins and the Wii Balance Board.</p>
           <p className='pProjects'>I created this game by connecting my Wii Balance Board using WiiBalanceWalker and my VR to Unity. I can walk forward and backwards by leaning on the balance board, look around using the VR headset and use the flashlight using the VR controller.</p>
          </div>
        </div>
        <animated.div style={springIn} className='columnProjects'>
            <iframe className='vrVideo' src="https://www.youtube.com/embed/8mvRCcrDcq4?si=zfCqmpC87DY_XZCB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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