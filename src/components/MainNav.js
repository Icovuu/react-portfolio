import '../styling/MainNav.css';
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header className="mainNav">
            <ul>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#websites">Websites</a></li>
                    <li><a href="#games">Games</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
              </header>
    )
}