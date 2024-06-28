import './App.css';
import Navbar from './components/Navbar.js';
import NameAndTypingBox from './components/NameAndTypingBox.js';
import IconSquare from './components/IconSquare.js';

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="home-top">
          <NameAndTypingBox className="name-and-typing-box"/>
          <IconSquare className="icon-square"/>
        </div>
        <div>
          
        </div>
      </main>
    </>
  );
}

export default App;
