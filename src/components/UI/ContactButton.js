import { Link } from 'react-router-dom';

export default function ContactButton({ to, media }) {
  return (
    <Link
      to={to}
      target="_blank"
      className="bg-gray scale-125 hover:scale-150 hover:bg-blue focus:ring-4
        focus:outline-none focus:ring-blue rounded-lg m-2
        px-5 py-2.5 inline-flex items-center dark:focus:ring-gray-500
        dark:hover:bg-blue transition duration-300"
    >
      <button
        type="button"
      >
        {media}
      </button>
    </Link>
  );
}
