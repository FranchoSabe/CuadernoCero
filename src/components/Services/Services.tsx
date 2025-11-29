import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Services.module.css';
import { ShoppingCartIcon, CalendarIcon, ChartIcon, SparklesIcon } from './ServiceIcons';

interface Service {
  title: string;
  description: string;
  bullets: string[];
  Icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    title: "Sistemas de ventas y POS a medida",
    description: "Diseño sistemas de registro de ventas y POS simples, adaptados al flujo real de tu negocio (no al revés).",
    bullets: [
      "Registro de ventas por día, turno, vendedor y tipo de producto.",
      "Gestión de promociones y combos.",
      "Historial accesible para ver qué funciona y qué no.",
      "Pensado para locales gastronómicos, pizzerías y comercios chicos."
    ],
    Icon: ShoppingCartIcon
  },
  {
    title: "Sistemas de reservas y gestión de turnos",
    description: "Dejo atrás el caos de cuadernos y mensajes sueltos con un sistema de reservas claro y visual.",
    bullets: [
      "Agenda de reservas centralizada.",
      "Asignación de mesas, cambios y cancelaciones simples.",
      "Vista de mapa de mesas (estado de cada mesa).",
      "Ideal para restaurantes, talleres (cerámica, clases, etc.) y servicios con turnos."
    ],
    Icon: CalendarIcon
  },
  {
    title: "Paneles de gastos y finanzas del negocio",
    description: "Herramientas para que el dueño entienda sus números sin volverse loco con Excel.",
    bullets: [
      "Registro de gastos y movimientos diarios.",
      "Resumen por categoría (proveedores, sueldos, insumos, etc.).",
      "Visión rápida por mes, por semana o por proyecto.",
      "Integrable con planillas que ya uses (Google Sheets, Excel)."
    ],
    Icon: ChartIcon
  },
  {
    title: "Prototipado y automatización ligera",
    description: "Si tenés una idea de sistema pero no sabés por dónde empezar, te ayudo a aterrizarla y hacer una primera versión funcional.",
    bullets: [
      "Diseño del flujo del sistema (qué pantallas, qué datos, qué pasos).",
      "Prototipos web funcionales para probar con tu equipo.",
      "Automatizaciones simples con herramientas que ya existen (formularios, WhatsApp, planillas)."
    ],
    Icon: SparklesIcon
  }
];

const Services = () => {
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
    <section id="servicios" className={styles.services} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Servicios</h2>
          <p className={styles.subtitle}>
            Soluciones pensadas para negocios reales, no para manuales de software.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <motion.div
                key={index}
                className={styles.card}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <ul className={styles.bulletList}>
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className={styles.bullet}>
                      <span className={styles.bulletIcon}>✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
