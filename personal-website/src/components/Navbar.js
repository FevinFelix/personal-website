import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul className="nav-items">
                <li className="nav-item"><a href="#home">Home</a></li>
                <li className="nav-item"><a href="#projects">Projects</a></li>
                <li className="nav-item"><a href="https://www.linkedin.com/in/fevinfelix/" target="_blank">Contact</a></li>
            </ul>
        </nav>
    );
  }
  
  export default Navbar;