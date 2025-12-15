import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
    variant?: 'default' | 'clean';
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverable = false,
    variant = 'default'
}) => {
    return (
        <div className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${variant === 'clean' ? styles.clean : ''} ${className}`}>
            {children}
        </div>
    );
};
