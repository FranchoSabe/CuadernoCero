import { LiquidBackground } from './components/LiquidBackground/LiquidBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/UI/WhatsAppButton';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <LiquidBackground />
      <Navbar />
      <WhatsAppButton />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
