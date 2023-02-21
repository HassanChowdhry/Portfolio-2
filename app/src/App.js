import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/layout/Project';
import Resume from './components/layout/Resume';

function App() {
  return (
    <div className="bg-black h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
