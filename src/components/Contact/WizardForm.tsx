import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WizardForm.module.css';
import emailjs from '@emailjs/browser';

// --- CONFIGURACIÓN DE EMAILJS ---
// 1. Entrá a https://dashboard.emailjs.com/
// 2. Creá una cuenta gratuita
// 3. Creá un "Email Service" (Gmail, Outlook, etc) -> Copiá el Service ID
// 4. Creá un "Email Template" -> Copiá el Template ID
//    - En el template, usá variables como {{name}}, {{industry}}, {{painPoint}}, etc.
// 5. Andá a Account -> Public Key -> Copiá la Key
const EMAILJS_SERVICE_ID = "service_ID"; // Reemplazar aquí (ej: service_z3t2...)
const EMAILJS_TEMPLATE_ID = "template_ID"; // Reemplazar aquí (ej: template_a4r...)
const EMAILJS_PUBLIC_KEY = "public_KEY";   // Reemplazar aquí (ej: user_8ads...)

// Definición de Pasos y Lógica
type Industry = 'Gastronomía' | 'Servicios' | 'Comercio' | 'Otro';
type ContactMethod = 'WhatsApp' | 'Email';

interface FormData {
    industry: Industry | '';
    painPoint: string;
    currentTool: string;
    contactMethod: ContactMethod | '';
    name: string;
    contactValue: string; // WhatsApp number or Email
}

const steps = [
    { id: 1, title: "¿De qué es tu negocio?" },
    { id: 2, title: "¿Qué es lo que más te cuesta hoy?" },
    { id: 3, title: "¿Cómo lo llevas actualmente?" },
    { id: 4, title: "¿Cómo preferís que te contactemos?" },
    { id: 5, title: "Último paso para tu diagnóstico" }
];

const industries = [
    { label: 'Gastronomía', value: 'Gastronomía', icon: '🍔' },
    { label: 'Servicios/Oficio', value: 'Servicios', icon: '💇' },
    { label: 'Comercio/Tienda', value: 'Comercio', icon: '👕' },
    { label: 'Otro', value: 'Otro', icon: '💡' }
];

const painPoints = {
    'Gastronomía': ['Control de caja y ventas', 'Costos y Stock', 'Organización de comandas'],
    'Comercio': ['Control de caja y ventas', 'Control de Stock', 'Cuentas corrientes'],
    'Servicios': ['Agenda y Reservas', 'Seguimiento de Clientes', 'Recordatorios de turnos'],
    'Otro': ['Orden general', 'Ventas y Cobros', 'Gestión de clientes']
};

const tools = [
    { label: 'Cuaderno / Papel', value: 'Papel' },
    { label: 'Excel / Planillas', value: 'Excel' },
    { label: 'Sistema viejo / Complicado', value: 'Sistema Viejo' },
    { label: 'Nada aún', value: 'Nada' }
];

const WizardForm = () => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState('');

    const [data, setData] = useState<FormData>({
        industry: '',
        painPoint: '',
        currentTool: '',
        contactMethod: '',
        name: '',
        contactValue: ''
    });

    const handleSelect = (field: keyof FormData, value: any) => {
        setData({ ...data, [field]: value });
        // Auto advance
        if (step < 4) {
            setTimeout(() => setStep(step + 1), 300);
        } else if (step === 4) {
            setTimeout(() => setStep(step + 1), 300);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setError('');

        // Verificar si tenemos las keys configuradas (para desarrollo)
        if (EMAILJS_SERVICE_ID === "service_ID") {
            console.warn("⚠️ EmailJS no configurado. Simulando envío exitoso.");
            // Simular delay
            setTimeout(() => {
                setIsSending(false);
                setIsSubmitted(true);
            }, 1000);
            return;
        }

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: data.name,
                    industry: data.industry,
                    painPoint: data.painPoint,
                    currentTool: data.currentTool,
                    contactMethod: data.contactMethod,
                    contactValue: data.contactValue,
                    message: `Nueva solicitud de diagnóstico de ${data.name} (${data.industry}).`
                },
                EMAILJS_PUBLIC_KEY
            );

            setIsSubmitted(true);
        } catch (err) {
            console.error("Error enviando email:", err);
            setError("Hubo un error enviando la solicitud. Por favor intentá nuevamente o escribinos por WhatsApp.");
        } finally {
            setIsSending(false);
        }
    };

    const getPainOptions = () => {
        const industryKey = data.industry as keyof typeof painPoints;
        return painPoints[industryKey] || painPoints['Otro'];
    };

    if (isSubmitted) {
        return (
            <motion.div
                className={styles.successContainer}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.successIcon}>✨</div>
                <h3 className={styles.successTitle}>¡Solicitud Recibida!</h3>
                <p className={styles.successText}>
                    Gracias <strong>{data.name}</strong>. Hemos registrado tu solicitud.
                </p>
                <p className={styles.successText}>
                    Analizaremos tu caso ({data.industry}) y te contactaremos por <strong>{data.contactMethod}</strong> a la brevedad para darte tu diagnóstico.
                </p>

                {/* Fallback opcional por si el usuario es ansioso */}
                <div className={styles.frontendFallback}>
                    <p className={styles.fallbackLabel}>¿Querés agilizarlo?</p>
                    <button
                        className={styles.fallbackButton}
                        onClick={() => {
                            const mensaje = `Hola! Ya envié mi solicitud por la web. Soy ${data.name}.`;
                            const whatsappUrl = `https://wa.me/5492215922264?text=${encodeURIComponent(mensaje)}`;
                            window.open(whatsappUrl, '_blank');
                        }}
                    >
                        Escribirnos ahora
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <div className={styles.wizardContainer}>
            {/* Progress Bar */}
            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${(step / 5) * 100}%` }}
                />
            </div>

            <div className={styles.stepIndicator}>
                Paso {step} de 5
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={styles.stepContent}
                >
                    <h3 className={styles.question}>{steps[step - 1].title}</h3>

                    {step === 1 && (
                        <div className={styles.optionsGrid}>
                            {industries.map((opt) => (
                                <button
                                    key={opt.value}
                                    className={`${styles.optionButton} ${data.industry === opt.value ? styles.selected : ''}`}
                                    onClick={() => handleSelect('industry', opt.value)}
                                >
                                    <span className={styles.optionIcon}>{opt.icon}</span>
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 2 && (
                        <div className={styles.optionsList}>
                            {getPainOptions().map((opt) => (
                                <button
                                    key={opt}
                                    className={`${styles.optionButton} ${styles.listOption} ${data.painPoint === opt ? styles.selected : ''}`}
                                    onClick={() => handleSelect('painPoint', opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 3 && (
                        <div className={styles.optionsList}>
                            {tools.map((opt) => (
                                <button
                                    key={opt.value}
                                    className={`${styles.optionButton} ${styles.listOption} ${data.currentTool === opt.value ? styles.selected : ''}`}
                                    onClick={() => handleSelect('currentTool', opt.value)}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 4 && (
                        <div className={styles.optionsGrid}>
                            <button
                                className={`${styles.optionButton} ${data.contactMethod === 'WhatsApp' ? styles.selected : ''}`}
                                onClick={() => handleSelect('contactMethod', 'WhatsApp')}
                            >
                                <span className={styles.optionIcon}>📱</span>
                                WhatsApp
                            </button>
                            <button
                                className={`${styles.optionButton} ${data.contactMethod === 'Email' ? styles.selected : ''}`}
                                onClick={() => handleSelect('contactMethod', 'Email')}
                            >
                                <span className={styles.optionIcon}>✉️</span>
                                Email
                            </button>
                        </div>
                    )}

                    {step === 5 && (
                        <form onSubmit={handleSubmit} className={styles.finalForm}>
                            <div className={styles.inputGroup}>
                                <label>Tu Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder="Ej. Juan Pérez"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>{data.contactMethod === 'Email' ? 'Tu Email' : 'Tu WhatsApp'}</label>
                                <input
                                    type={data.contactMethod === 'Email' ? 'email' : 'tel'}
                                    name="contactValue"
                                    value={data.contactValue}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                    placeholder={data.contactMethod === 'Email' ? 'juan@ejemplo.com' : '+54 9 ...'}
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSending}
                                style={{ opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
                            >
                                {isSending ? 'Enviando...' : 'Finalizar Solicitud'}
                                {!isSending && <ArrowRightIcon className={styles.icon} />}
                            </button>
                            {error && <p style={{ color: 'red', marginTop: '1rem', fontSize: '0.9rem' }}>{error}</p>}
                        </form>
                    )}
                </motion.div>
            </AnimatePresence>

            {step > 1 && !isSubmitted && (
                <button className={styles.backButton} onClick={() => setStep(step - 1)}>
                    <ArrowLeftIcon /> Volver
                </button>
            )}
        </div>
    );
};

// Simple Icons for this component
const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="20" height="20">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="20" height="20">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

export default WizardForm;
