import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Links from '../UI/Links';
import pic from '../../pics/hassan-pic.png';
import ContactButton from '../UI/ContactButton';

export default function SideNav() {
  return (
    <aside className="fixed grid justify-items-center h-screen bg-black text-white">
      <header className="self-center">
        <img src={pic} alt="hassan-pic" className="m-auto w-48 rounded-2xl" />
        <h1 className="p-4 text-3xl">Hassan Chowdhry</h1>
      </header>

      <nav className="grid gap-3 w-full text-xl justify-items-center">
        <Links to="/about">About Me</Links>
        <Links to="/experience">Experience</Links>
        <Links to="/projects">Projects</Links>
        <Links to="/education">Education</Links>
        <Links to="/skills">Skills</Links>
      </nav>

      <nav className="flex gap-4 self-end py-8 px-6">
        <ContactButton to="https://github.com/HassanChowdhry" media={<DiGithubBadge />} />
        <ContactButton to="https://www.linkedin.com/in/hassan-chowdhry-1561ba250/" media={<FaLinkedinIn />} />
        <ContactButton to="mailto:hassan.chowdhry@dal.ca" media={<IoMdMail />} />
      </nav>
    </aside>
  );
}
