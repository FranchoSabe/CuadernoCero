import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Testimonials.module.css';
import { Card } from '../UI/Card';

const testimonials = [
    {
        quote: "Antes cerrábamos la caja con papelitos sueltos. Ahora en 5 minutos sabemos exactamente cuánto vendimos y qué tenemos que reponer.",
        author: "Martín",
        role: "Dueño de Pizzería Don Luis"
    },
    {
        quote: "Lo que más valoro es que no tuve que aprender un sistema complicado. Es como usar el celular, súper intuitivo para mí y los empleados.",
        author: "Sofia",
        role: "Gestora de Espacio de Yoga"
    },
    {
        quote: "Francisco entendió perfecto que no queríamos algo gigante. El sistema hace justo lo que necesitamos para las reservas.",
        author: "Carlos",
        role: "Encargado de Restaurante El Molino"
    }
];

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className={styles.testimonials} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Confían en nosotros</h2>
                </motion.div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        >
                            <Card className={styles.card}>
                                <div className={styles.quoteMark}>"</div>
                                <p className={styles.quote}>{item.quote}</p>
                                <div className={styles.author}>
                                    <div className={styles.authorInfo}>
                                        <span className={styles.name}>{item.author}</span>
                                        <span className={styles.role}>{item.role}</span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
