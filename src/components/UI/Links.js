import { NavLink, useLocation } from 'react-router-dom';

export default function Links({ to, children }) {
  const scrollToSection = () => {
    const id = to.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const location = useLocation();
  const isActiveLocation = () => location.pathname.includes(to);

  return (
    <NavLink
      className={({ isActive }) => (
        `bg-gray hover:text-white w-10/12 hover:scale-110 transition
         hover:bg-blue rounded-lg transform duration-300 flex
          ${isActive ? 'scale-105 text-blue ring-blue ring-4 outline-none'
          : 'scale-100 text-white'}`
      )}
      to={to}
      onClick={scrollToSection}
      isActive={isActiveLocation}
    >
      <p className="w-auto self-center mx-auto p-2">{children}</p>
    </NavLink>
  );
}
