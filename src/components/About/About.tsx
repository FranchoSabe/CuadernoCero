import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="quienes-somos" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Quiénes somos</h2>
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.placeholder}>
              <span className={styles.initials}>CC</span>
            </div>
          </div>

          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              <strong>Cuaderno Cero</strong> nació en La Plata, Argentina, de la necesidad real de ordenar un restaurante familiar.
            </p>
            
            <p className={styles.paragraph}>
              Durante años convivimos con problemas muy concretos: reservas desordenadas, ventas anotadas a mano, 
              gastos que se pierden en planillas y decisiones tomadas "a ojo". Así surgió la idea de crear 
              herramientas digitales simples que realmente funcionen para negocios como el tuyo.
            </p>
            
            <p className={styles.paragraph}>
              Fundada por <strong>Francisco Llorens</strong>, desarrollador y gestor de negocios gastronómicos, 
              Cuaderno Cero está creciendo como un equipo dedicado a diseñar sistemas que ordenan la operación diaria 
              de restaurantes, pizzerías y pequeños comercios.
            </p>
            
            <p className={styles.paragraph}>
              Nuestro enfoque es simple: <strong>sistemas claros, adaptados a cómo trabaja tu equipo</strong>, 
              sin tecnicismos innecesarios y sin prometer automatizaciones imposibles. Preferimos algo que funcione 
              todos los días antes que una solución "perfecta" que nadie usa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
