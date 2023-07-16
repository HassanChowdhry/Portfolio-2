import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/layout/Projects';
import Education from './components/layout/Education';
import Skills from './components/layout/Skills';
import Experience from './components/layout/Experience';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
