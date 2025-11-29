import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.textContent}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Cuaderno Cero
            </motion.h1>
            
            <motion.h2 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Sistemas a medida para emprendimientos y pequeños comercios
            </motion.h2>
            
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Diseñamos herramientas digitales simples para ordenar ventas, reservas, gastos.         
              Dejá atrás el cuaderno y las planillas eternas. Simplificá la gestión de tu negocio.
            </motion.p>
            
            <motion.div 
              className={styles.buttons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button 
                className={styles.primaryButton}
                onClick={() => handleScrollTo('#contacto')}
              >
                Agendar una llamada
              </button>
              <button 
                className={styles.secondaryButton}
                onClick={() => handleScrollTo('#proyectos')}
              >
                Ver proyectos
              </button>
            </motion.div>
          </div>

          <motion.div 
            className={styles.visualContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.geometricShape}>
              <div className={styles.card1}></div>
              <div className={styles.card2}></div>
              <div className={styles.card3}></div>
              <div className={styles.circle}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
