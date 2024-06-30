import './Home.css';
import Navbar from '../components/Navbar.js';
import NameAndTypingBox from '../components/NameAndTypingBox.js';
import IconSquare from '../components/IconSquare.js';
import AboutMe from '../components/AboutMe.js';

export default function Home() {
    return (
        <>
            <Navbar className="navbar"/>
            <main className="main">
                <div className="home-top">
                    <NameAndTypingBox className="name-and-typing-box"/>
                    <IconSquare className="icon-square"/>
                </div>
                <AboutMe />
            </main>
        </>
    )
}