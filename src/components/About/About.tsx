import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="sobre-mi" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Sobre mí</h2>
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.placeholder}>
              <span className={styles.initials}>FJ</span>
            </div>
          </div>

          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Soy <strong>Francisco "Francho" Jorens</strong>, de La Plata, Argentina.
            </p>
            
            <p className={styles.paragraph}>
              Trabajo hace años en la gestión de un restaurante familiar, donde convivimos todos los días con problemas muy concretos: 
              reservas desordenadas, ventas anotadas a mano, gastos que se pierden en planillas y decisiones tomadas "a ojo".
            </p>
            
            <p className={styles.paragraph}>
              A partir de esa experiencia empecé a diseñar y desarrollar sistemas propios para ordenar el negocio: 
              registro de ventas, reservas, control de gastos y paneles de seguimiento. Eso me llevó a crear soluciones similares 
              para otros emprendimientos, como pizzerías y pequeños negocios que necesitan herramientas hechas a su medida.
            </p>
            
            <p className={styles.paragraph}>
              Mi enfoque es simple: <strong>sistemas claros, adaptados a cómo trabaja tu equipo</strong>, sin tecnicismos innecesarios 
              y sin prometer automatizaciones imposibles. Prefiero algo que funcione todos los días antes que una solución 
              "perfecta" que nadie usa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
