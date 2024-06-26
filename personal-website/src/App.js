import './App.css';
import Navbar from './components/Navbar.js';
import NameBox from './components/NameBox.js';
import TypingTextBox from './components/TypingTextBox.js';
import NameAndTypingBox from './components/NameAndTypingBox.js';

function App() {
  return (
    <>
     <Navbar />
    <main>
      <NameAndTypingBox />
    </main>
    </>
  );
}

export default App;
