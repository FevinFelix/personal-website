import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import ScrollToTop from './components/ScrollToTop.js';


function App() {
    return (
      <>
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" index element={<Home />} />
            <Route path="/projects" index element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

export default App;
