import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import SideNav from './components/layout/SideNav';
import About from './components/layout/About';
import Project from './components/layout/Projects';
import Education from './components/layout/Education';
import Skills from './components/layout/Skills';
import Experience from './components/layout/Experience';

// Custom hook for handling intersection observer logic
const useIntersectionObserver = () => {
  const navigate = useNavigate();
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    skills: useRef(null),
  };

  const observers = Object.fromEntries(
    Object.entries(sectionRefs).map(([key, ref]) => {
      const { ref: inViewRef, inView } = useInView({
        threshold: 0.3,
      });

      useEffect(() => {
        if (inView) {
          navigate(`/${key}`);
        }
      }, [inView]);

      return [key, { ref, inViewRef }];
    })
  );

  return observers;
};

function App() {
  const { about, experience, projects, education, skills } = useIntersectionObserver();

  return (
    <main className="w-screen grid grid-cols-6">
      <div className="col-span-1">
        <SideNav />
      </div>
      <div className="col-span-5">
        <About id="about" ref={about.inViewRef} />
        <Experience id="experience" ref={experience.inViewRef} />
        <Project id="projects" ref={projects.inViewRef} />
        <Education id="education" ref={education.inViewRef} />
        <Skills id="skills" ref={skills.inViewRef} />
      </div>
    </main>
  );
}

export default App;
