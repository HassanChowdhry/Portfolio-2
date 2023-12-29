import { Link } from 'react-router-dom';

export default function ContactButton({ to, media }) {
  return (
    <Link
      to={to}
      target="_blank"
      className="bg-[#393E46] scale-125 hover:scale-150 hover:bg-[#00ADB5]/90 focus:ring-4
        focus:outline-none focus:ring-[#00ADB5]/50 rounded-lg m-2
        px-5 py-2.5 inline-flex items-center dark:focus:ring-gray-500
        dark:hover:bg-[#00ADB5]/30 transition duration-300"
    >
      <button
        type="button"
      >
        {media}
      </button>
    </Link>
  );
}
