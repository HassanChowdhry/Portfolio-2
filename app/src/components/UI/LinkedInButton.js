import { Link } from 'react-router-dom';

function LinkedInButton() {
  return (
    <Link to="https://www.linkedin.com/in/hassan-chowdhry-1561ba250/">
      <button type="button" className="text-white bg-[#0077b5] hover:bg-[#0077b5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077b5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#0077b5]/55 mr-2 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 mr-2 -ml-1 mb-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
        LinkedIn
      </button>
    </Link>
  );
}

export default LinkedInButton;
