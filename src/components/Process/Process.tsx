
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Process.module.css';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const PlanIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
    </svg>
);

const DevIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"></path>
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
);

const steps = [
    {
        id: 1,
        title: "Diagnóstico y Propuesta",
        description: "Analizamos tu situación actual a través del formulario y te enviamos una propuesta inicial para definir qué podemos lograr juntos.",
        icon: <SearchIcon />
    },
    {
        id: 2,
        title: "Plan a Medida",
        description: "Conversamos para ajustar detalles y te presentamos un plan de trabajo claro y personalizado (sin compromisos ni sorpresas).",
        icon: <PlanIcon />
    },
    {
        id: 3,
        title: "Desarrollo Ágil",
        description: "Construimos tu solución mostrándote avances reales para asegurar que el sistema resuelva exactamente lo que necesitás.",
        icon: <DevIcon />
    },
    {
        id: 4,
        title: "Puesta en Marcha",
        description: "Te entregamos el sistema funcionando, te capacitamos para usarlo y te damos soporte continuo para que no pares nunca.",
        icon: <RocketIcon />
    }
];

const Process = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Cómo Trabajamos</h2>
                    <p className={styles.subtitle}>Un proceso simple y transparente, sin vueltas.</p>
                </motion.div>

                <div className={styles.timeline}>
                    <div className={styles.line}></div>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`${styles.step} ${index % 2 === 0 ? styles.left : styles.right}`}
                        >
                            <div className={styles.iconContainer}>
                                <span className={styles.icon}>{step.icon}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.stepTitle}>{step.id}. {step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
