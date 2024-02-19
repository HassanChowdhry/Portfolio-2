export default function SliderModal({ src, title, description, id, onClick }) {
  return (
    <div className="modal">

      <button className="modal-close" type="button" onClick={onClick}>
        &times;
      </button>

      <iframe
        id={id}
        src={src}
        title={title}
        className="modal-website"
      />

      <div className="modal-description"> {description} </div>

    </div>
  );
}
