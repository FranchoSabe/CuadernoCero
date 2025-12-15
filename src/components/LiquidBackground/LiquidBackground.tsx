import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './LiquidBackground.module.css';

export const LiquidBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div className={styles.container}>
            {/* Capa de ruido sutil para textura */}
            <div className={styles.noiseLayer} />

            {/* Aurora 1 - Color Primario (Azul) */}
            <motion.div
                className={styles.auroraBlob}
                style={{
                    background: 'var(--color-primary)',
                    width: '800px',
                    height: '800px',
                    filter: 'blur(100px)',
                    opacity: 0.4,
                    left: '-10%',
                    top: '-20%'
                }}
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }}
            />

            {/* Aurora 2 - Color Secundario (Lila) */}
            <motion.div
                className={styles.auroraBlob}
                style={{
                    background: 'var(--color-secondary)',
                    width: '600px',
                    height: '600px',
                    filter: 'blur(80px)',
                    opacity: 0.3,
                    right: '-5%',
                    bottom: '-10%'
                }}
                animate={{
                    x: [0, -70, 30, 0],
                    y: [0, 60, -40, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }}
            />

            {/* Aurora 3 - Color Acento (Rosa) - Sigue suavemente al mouse */}
            <motion.div
                className={styles.auroraBlob}
                style={{
                    background: 'var(--color-accent)',
                    width: '400px',
                    height: '400px',
                    filter: 'blur(90px)',
                    opacity: 0.2,
                    left: '30%',
                    top: '40%'
                }}
                animate={{
                    x: mousePosition.x * 0.05,
                    y: mousePosition.y * 0.05,
                }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 50
                }}
            />
        </div>
    );
};
