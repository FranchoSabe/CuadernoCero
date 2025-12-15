import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Skills.module.css';
import {
  PaletteIcon,
  DatabaseIcon,
  CodeIcon,
  LinkIcon,
  ClipboardIcon,
  UsersIcon,
  TrendingUpIcon
} from './SkillIcons';

interface Skill {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const techStack: Skill[] = [
  { name: "React & Next.js para interfaces veloces", Icon: CodeIcon },
  { name: "Bases de Datos Seguras (SQL/NoSQL)", Icon: DatabaseIcon },
  { name: "Integraciones API (MercadoPago, WhatsApp)", Icon: LinkIcon },
  { name: "Diseño UI/UX Profesional", Icon: PaletteIcon }
];

const ourApproach: Skill[] = [
  { name: "Entendemos tu Negocio (No solo código)", Icon: TrendingUpIcon },
  { name: "Soporte Humano y Directo", Icon: UsersIcon },
  { name: "Soluciones Escalables", Icon: TrendingUpIcon },
  { name: "Procesos Claros y Simples", Icon: ClipboardIcon }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="habilidades" className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Tecnología y Enfoque</h2>
        </motion.div>

        <div className={styles.skillsGrid}>
          {/* Stack Tecnológico */}
          <motion.div
            className={styles.skillCategory}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.categoryTitle}>Stack Tecnológico</h3>
            <motion.div
              className={styles.chipsContainer}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {techStack.map((skill, index) => {
                const Icon = skill.Icon;
                return (
                  <motion.div
                    key={index}
                    className={styles.chip}
                    variants={chipVariants}
                    whileHover={{ scale: 1.05, boxShadow: "var(--shadow-soft-md)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className={styles.chipIcon} />
                    <span className={styles.chipText}>{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Por qué elegirnos */}
          <motion.div
            className={styles.skillCategory}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.categoryTitle}>Por qué elegirnos</h3>
            <motion.div
              className={styles.chipsContainer}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {ourApproach.map((skill, index) => {
                const Icon = skill.Icon;
                return (
                  <motion.div
                    key={index}
                    className={`${styles.chip} ${styles.chipBusiness}`}
                    variants={chipVariants}
                    whileHover={{ scale: 1.05, boxShadow: "var(--shadow-soft-md)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className={styles.chipIcon} />
                    <span className={styles.chipText}>{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
