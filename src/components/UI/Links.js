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
        `text-center w-full transform transition duration-300 
          ${isActive ? 'scale-125 text-blue' : 'scale-100 text-white'}`
      )}
      to={to}
      onClick={scrollToSection}
      isActive={isActiveLocation}
    >
      {children}
    </NavLink>
  );
}
