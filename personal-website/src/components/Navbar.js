import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav>
            <ul className="nav-items">
                <li className="nav-item"><Link to="/Home" onClick={scrollToTop}>Home</Link></li>
                <li className="nav-item"><Link to="/Projects" onClick={scrollToTop}>Projects</Link></li>
                <li className="nav-item"><a href="https://www.linkedin.com/in/fevinfelix/" target="_blank">Contact</a></li>
            </ul>
        </nav>
    );
  }
  
  export default Navbar;