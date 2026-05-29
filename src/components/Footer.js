import '../styling/Footer.css';
import {Link} from "react-router-dom"
import miniLogo from '../assets/miniLogo.png';
import gradient from '../assets/gradient.png';

export default function Footer() {
    return (
        <footer id="contact">
        <img src={gradient} className="gradient" alt="" />
        <div className='footerText'>
            <Link to="/Home">
                <img src={miniLogo} alt="mini logo" className='miniLogoFooter'/>
            </Link>
            <p className='pFooter'>Lauren Olde Monnikhof</p>
            <p className='pFooter'><a href="mailto:lauren.o.m1205@gmail.com">Email: lauren.o.m1205@gmail.com</a></p>
            </div>
        </footer>
    )
}

