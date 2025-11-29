import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Cuaderno Cero</h3>
            <p className={styles.brandTagline}>
              Sistemas a medida para emprendimientos y pequeños comercios
            </p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Navegación</h4>
            <ul className={styles.linksList}>
              <li>
                <button onClick={() => handleScrollTo('#inicio')} className={styles.link}>
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#servicios')} className={styles.link}>
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#proyectos')} className={styles.link}>
                  Proyectos
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#contacto')} className={styles.link}>
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.contactTitle}>Contacto</h4>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:jorensjfrancisco@gmail.com" className={styles.contactLink}>
                  jorensjfrancisco@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5492215922264" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                  +54 9 221 592-2264
                </a>
              </li>
              <li className={styles.location}>
                La Plata, Argentina
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Cuaderno Cero. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
