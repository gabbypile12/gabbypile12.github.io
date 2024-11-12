import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Projects'
import About from './pages/About'



function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/contact" element={<Contact />}> </Route>
            <Route path="/projects" element={<Project />}> </Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App
