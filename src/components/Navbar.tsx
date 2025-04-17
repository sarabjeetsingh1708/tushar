import { motion } from 'framer-motion';
import { Code2, User, Briefcase, Brain, Mail } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'home', icon: <Code2 />, label: 'Home' },
    { id: 'about', icon: <User />, label: 'About' },
    { id: 'projects', icon: <Briefcase />, label: 'Projects' },
    { id: 'skills', icon: <Brain />, label: 'Skills' },
    { id: 'contact', icon: <Mail />, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 py-4 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
      >
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="flex items-center space-x-2 transition-all hover:text-emerald-400"
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;