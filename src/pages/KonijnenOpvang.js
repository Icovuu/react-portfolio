import Footer from '../components/Footer';
import Nav from '../components/Nav';
import konijnenOpvang from '../assets/KonijnenOpvangWebsite.png';
import permanenteBewoners from '../assets/permanenteBewoners.png';
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
           <p className='pProjects'>This is a rabbit shelter in De Lutte. I contributed to the design and to one of the pages, called Permanent Residents, which you see on the right. The page is still under development.</p>
            <a href='https://www.konijnenopvangmaaike.nl//' className='link' target="_blank" alt='Link to Konijnenopvang Maaike website'>Link to Konijnenopvang Maaike website</a>
          </div>
        </div>
        <animated.div style={springIn} className='columnProjects'>
          <img src={permanenteBewoners} className="image" onClick={() => setPopupImg(permanenteBewoners)} />
          <div className='smallColumnProjects'>
            <img src={konijnenOpvang} onClick={() => setPopupImg(konijnenOpvang)} />
          </div>
        </animated.div>
      </div> 
      </div>
      <Footer />

      {popupImg && (
        <div id="popup" onClick={() => setPopupImg(null)}>
          <img src={popupImg} alt="Enlarged view" />
        </div>
      )}
    </>
  );
}