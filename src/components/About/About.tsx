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
              En <strong>Cuaderno Cero</strong> transformamos el caos operativo en sistemas digitales simples y eficientes.
            </p>

            <p className={styles.paragraph}>
              Nacimos de la experiencia real gestionando comercios. Sabemos que las "soluciones enlatadas" muchas veces complican más de lo que resuelven.
              Por eso, no vendemos software genérico: <strong>diseñamos la herramienta exacta que tu negocio necesita</strong> para ordenar ventas, reservas y gastos.
            </p>

            <p className={styles.paragraph}>
              Nos especializamos en emprendimientos y PyMEs que quieren dejar el papel y las planillas eternas, pero sin perder tiempo aprendiendo sistemas complejos.
            </p>

            <p className={styles.paragraph}>
              <strong>Nuestro compromiso:</strong> Tecnologías modernas, interfaces limpias y un trato humano.
              Hablamos tu idioma, no en código, para que te enfoques en lo que mejor sabes hacer: hacer crecer tu negocio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
