import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/layout/Projects';
import Education from './components/layout/Education';
import Skills from './components/layout/Skills';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
