import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Projects.module.css';
import { Card } from '../UI/Card';
import { Mockup } from './Mockup';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="proyectos" className={styles.projects} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Proyectos</h2>
          <p className={styles.subtitle}>
            Algunos de los sistemas que desarrollé o estoy desarrollando.
          </p>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Proyecto Principal */}
          <motion.div variants={cardVariants}>
            <Card hoverable className={styles.featuredCard}>
              <Mockup variant="featured" />
              <div className={styles.badges}>
                <span className={styles.badge}>Pizzería</span>
                <span className={styles.badge}>Web App</span>
                <span className={styles.badgeCompleted}>Completado</span>
              </div>

              <h3 className={styles.projectTitle}>
                Pizzería artesanal – Sistema de ventas y control por zona
              </h3>

              <p className={styles.projectDescription}>
                Desarrollé una web app de ventas para una pizzería que recibía pedidos por múltiples canales y los anotaba a mano.
              </p>

              <div className={styles.featuresTitle}>El sistema permite:</div>
              <ul className={styles.featuresList}>
                <li>Registrar cada venta con pocos clics.</li>
                <li>Diferenciar vendedores y ver su rendimiento.</li>
                <li>Aplicar promociones y combos predefinidos.</li>
                <li>Ver un mapa de ventas por zona para entender dónde se vende más.</li>
              </ul>

              <div className={styles.result}>
                <strong>Resultado:</strong> el negocio pasó de notas sueltas y chats a tener un historial claro de ventas,
                con información que le permite probar nuevas promociones y organizar mejor los repartos.
              </div>
            </Card>
          </motion.div>

          {/* Proyecto en Desarrollo 1 */}
          <motion.div variants={cardVariants}>
            <Card hoverable className={styles.card}>
              <Mockup variant="small" />
              <div className={styles.badges}>
                <span className={styles.badge}>Restaurante</span>
                <span className={styles.badgeInProgress}>En desarrollo</span>
              </div>

              <h3 className={styles.projectTitleSmall}>
                Gestor de gastos para restaurante familiar
              </h3>

              <p className={styles.projectDescriptionSmall}>
                Sistema para registrar gastos diarios, organizar proveedores y ver resúmenes por categoría.
                Permite llevar un control claro de los movimientos del negocio sin depender de planillas complejas.
              </p>
            </Card>
          </motion.div>

          {/* Proyecto en Desarrollo 2 */}
          <motion.div variants={cardVariants}>
            <Card hoverable className={styles.card}>
              <Mockup variant="small" />
              <div className={styles.badges}>
                <span className={styles.badge}>Talleres</span>
                <span className={styles.badgePrototype}>Prototipo</span>
              </div>

              <h3 className={styles.projectTitleSmall}>
                Sistema de reservas para talleres y cursos
              </h3>

              <p className={styles.projectDescriptionSmall}>
                Sistema para gestionar cupos, turnos y listas de espera para talleres tipo cerámica, yoga o clases.
                Centraliza la información y facilita el seguimiento de asistencias y pagos.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
