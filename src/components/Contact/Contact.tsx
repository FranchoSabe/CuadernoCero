import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Contact.module.css';
import { MailIcon, PhoneIcon, MapPinIcon, MessageCircleIcon } from './ContactIcons';
import WizardForm from './WizardForm';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleWhatsAppClick = () => {
    const mensaje = "Hola! Quiero mejorar la gestión de mi negocio y me gustaría hablar sobre un sistema a medida con Cuaderno Cero.";
    const whatsappUrl = `https://wa.me/5492215922264?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Hablemos de tu negocio</h2>
          <p className={styles.subtitle}>
            Si querés ordenar las reservas, las ventas o los gastos de tu negocio,
            podemos ver juntos qué sistema te conviene y cómo empezar simple.
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Información de Contacto */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.infoTitle}>Datos de contacto</h3>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <MailIcon className={styles.contactIcon} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <a href="mailto:jorensjfrancisco@gmail.com" className={styles.contactValue}>
                    jorensjfrancisco@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <PhoneIcon className={styles.contactIcon} />
                </div>
                <div>
                  <div className={styles.contactLabel}>WhatsApp</div>
                  <a href="https://wa.me/5492215922264" className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                    +54 9 221 592-2264
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <MapPinIcon className={styles.contactIcon} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Ubicación</div>
                  <div className={styles.contactValue}>La Plata, Argentina</div>
                </div>
              </div>
            </div>

            <button
              className={styles.whatsappButton}
              onClick={handleWhatsAppClick}
            >
              <MessageCircleIcon className={styles.whatsappIcon} />
              Escribirme por WhatsApp
            </button>
          </motion.div>

          {/* Wizard Form Interactivo */}
          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WizardForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
