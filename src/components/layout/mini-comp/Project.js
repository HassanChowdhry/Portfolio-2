import { useEffect, useState } from 'react';
import SliderModal from '../SliderModal';

function Project({ title, description, stack, className, id, url }) {
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
          src={url}
          description={description}
          id={id}
          title={title}
          onClick={toggleModal}
        />
      )}

      <div className="flex">
        <section className={`${className} text-left`}>
          <h2 className="mb-10 text-2xl font-bold">
            <button
              className="hover:scale-110 no-underline transition hover:text-blue hover:underline"
              onClick={toggleModal}
              type="button"
            >
              {title}
            </button>
          </h2>

          <ul className="list-disc list-inside">
            <li className="mb-5 overflow-y-clip">
              {description}
              <em className="text-base"> (Click project name for preview)</em>
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
