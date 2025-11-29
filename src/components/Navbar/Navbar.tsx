import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.header 
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={styles.nav}>
        <div className={styles.container}>
          <a href="#inicio" className={styles.logo} onClick={(e) => handleClick(e, '#inicio')}>
            <span>Francho Jorens</span>
          </a>

          {/* Desktop Menu */}
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleClick(e, item.href)}
                  className={styles.menuItem}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button 
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={styles.mobileMenu}
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className={styles.mobileMenuList}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleClick(e, item.href)}
                  className={styles.mobileMenuItem}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
