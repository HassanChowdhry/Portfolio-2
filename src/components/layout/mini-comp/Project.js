import { useEffect, useState } from 'react';
import SliderModal from '../SliderModal';

function Project({ title, description, stack, className, id }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [modal]);

  return (
    <>
      {modal && (
      <SliderModal
        currentIndex={id - 1}
        onClose={toggleModal}
      />
      )}

      <div className="flex">
        <section className={`${className} text-left`}>
          <header>
            <h2 className="mb-8 text-2xl font-bold inline-block">
              <button
                className="hover:scale-110 no-underline transition hover:text-blue hover:underline"
                onClick={toggleModal}
                type="button"
              >
                {title}
              </button>
            </h2>
            <em className="px-2 text-base"> (Click project name for preview) </em>
          </header>

          <ul className="list-disc list-inside">
            <li className="mb-5 overflow-y-clip">
              {description}
            </li>
            <li>
              <span><strong>Technologies used:</strong> </span> {stack}
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Project;
