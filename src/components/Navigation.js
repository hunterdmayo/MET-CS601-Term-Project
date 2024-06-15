import { Link } from "react-router-dom";
import '../assets/nav.css';

function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li className="links"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/photos">Photos</Link></li>
                    <li><Link to="/pokedex">Pokedex</Link></li>
                    <li><Link to="/stoic">Stoic Wisdom</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
      </>
    );
}

export default Navigation;