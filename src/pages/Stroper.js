import Footer from '../components/Footer';
import Nav from '../components/Nav';
import stroper from '../assets/DeStroperWebsite.png';
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
        <h1 className='h1Projects'>De Stroper website</h1>
        <div className='columnProjects'>
          <div className='pProjects'>
           <p className='pProjects'>De stroper is a pancake restaurant located in De Lutte, where I work in the kitchen. I took over the existing website, where I continue to make changes to when necessary. This website is created on Webflow.</p>
            <p className='pProjects'>I worked on small parts of the website, such as the footer, slider and popups. I've also been working the the UI & design of the website. You can see these on the images on the right.</p>
            <a href='https://www.pannenkoekhoes.nl/' className='link' target="_blank" alt='Link to De Stroper website'>Link to De Stroper website</a>
          </div> 
        </div>
        <animated.div style={springIn} className='columnProjects'>
          <img src={stroper} className="image" onClick={() => setPopupImg(stroper)} />
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