import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Skills.module.css';
import { 
  PaletteIcon, 
  DatabaseIcon, 
  CodeIcon, 
  LinkIcon,
  RestaurantIcon,
  ClipboardIcon,
  UsersIcon,
  TrendingUpIcon
} from './SkillIcons';

interface Skill {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const technicalSkills: Skill[] = [
  { name: "Diseño de sistemas web", Icon: PaletteIcon },
  { name: "Bases de datos y modelos de información", Icon: DatabaseIcon },
  { name: "Desarrollo de aplicaciones web (React, etc.)", Icon: CodeIcon },
  { name: "Integración con herramientas existentes (planillas, formularios, etc.)", Icon: LinkIcon }
];

const businessSkills: Skill[] = [
  { name: "Gestión de restaurante y operación diaria", Icon: RestaurantIcon },
  { name: "Organización de procesos (reservas, ventas, caja)", Icon: ClipboardIcon },
  { name: "Trabajo con equipos no técnicos", Icon: UsersIcon },
  { name: "Lectura y análisis de números del negocio", Icon: TrendingUpIcon }
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
          <h2 className={styles.title}>Habilidades</h2>
        </motion.div>

        <div className={styles.skillsGrid}>
          {/* Habilidades Técnicas */}
          <motion.div 
            className={styles.skillCategory}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.categoryTitle}>Habilidades Técnicas</h3>
            <motion.div 
              className={styles.chipsContainer}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {technicalSkills.map((skill, index) => {
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

          {/* Habilidades de Negocio */}
          <motion.div 
            className={styles.skillCategory}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.categoryTitle}>Habilidades de Negocio</h3>
            <motion.div 
              className={styles.chipsContainer}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {businessSkills.map((skill, index) => {
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
