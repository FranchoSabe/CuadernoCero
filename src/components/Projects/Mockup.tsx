import React from 'react';
import styles from './Mockup.module.css';

interface MockupProps {
    type?: 'desktop' | 'mobile'; // Por ahora solo desktop generico
    variant?: 'featured' | 'small';
}

export const Mockup: React.FC<MockupProps> = ({ variant = 'featured' }) => {
    const containerClass = variant === 'featured'
        ? styles.mockupContainer
        : `${styles.mockupContainer} ${styles.mockupContainerSmall}`;

    return (
        <div className={containerClass}>
            <div className={styles.browserFrame}>
                <div className={styles.browserHeader}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
                <div className={styles.screenContent}>
                    <div className={styles.skeletonLine} style={{ width: '40%' }}></div>
                    <div className={styles.skeletonLine} style={{ width: '70%' }}></div>
                    <div className={styles.skeletonBlock}></div>
                    <div className={styles.skeletonBlock} style={{ opacity: 0.6 }}></div>
                </div>
            </div>
        </div>
    );
};
