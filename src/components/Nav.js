import '../styling/Nav.css';
import {Link} from "react-router-dom"
import miniLogo from '../assets/miniLogo.png';

export default function Nav() {
    return (
        <nav className="navBar">
                <ul>
                    <li><Link to="/Home"> <img src={miniLogo} alt="mini logo" className='miniLogoNav'/> </Link></li>
                    <li className='liText'><Link smooth to='/Home'>Home</Link></li>
                        {/* <li className='liText'><Link smooth to='/Home#about'>About Me</Link></li>
                        <li className='liText'><Link smooth to='/Home#websites'>Websites</Link></li>
                        <li className='liText'><Link smooth to='/Home#games'>Games</Link></li> */}
                    <li className='liText'><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    )
}

