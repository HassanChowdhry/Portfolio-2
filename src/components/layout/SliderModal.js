import { useState } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import projects from '../../personal-info/projects.json';

export default function SliderModal({ currentIndex, onClose }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(currentIndex);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const { id, url, title, description } = projects[currentProjectIndex];

  return (
    <div className="modal">

      <button className="modal-close animate" type="button" onClick={onClose}>
        &times;
      </button>

      <section className="flex w-full justify-center">

        <FcPrevious
          onClick={previousProject}
          className="mx-5 my-auto cursor-pointer hover:scale-150 transition duration-300"
          size={60}
        />

        <iframe
          id={id}
          src={url}
          title={title}
          className="modal-website"
        />

        <FcNext
          onClick={nextProject}
          className="mx-5 my-auto cursor-pointer hover:scale-150 transition duration-300"
          size={60}
        />

      </section>

      <div className="modal-description"> {description} </div>

    </div>
  );
}
