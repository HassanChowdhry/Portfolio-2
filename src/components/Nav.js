import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex justify-between px-8 py-8 bg-gray">
      <h1 className="text-4xl text-white">Hassan Chowdhry</h1>

      <div className="px-4 flex gap-10 text-xl">
        <NavLink style={({ isActive }) => (isActive ? { color: '#00ADB5' } : { color: '#EEEEEE' })} to="/">About Me</NavLink>
        <NavLink style={({ isActive }) => (isActive ? { color: '#00ADB5' } : { color: '#EEEEEE' })} to="/Experience">Experience</NavLink>
        <NavLink style={({ isActive }) => (isActive ? { color: '#00ADB5' } : { color: '#EEEEEE' })} to="/projects">Projects</NavLink>
        <NavLink style={({ isActive }) => (isActive ? { color: '#00ADB5' } : { color: '#EEEEEE' })} to="/education">Education</NavLink>
        <NavLink style={({ isActive }) => (isActive ? { color: '#00ADB5' } : { color: '#EEEEEE' })} to="/skills">Skills</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
