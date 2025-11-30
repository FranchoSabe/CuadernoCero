import { useEffect, useRef } from 'react';
import styles from './ScrollLiquidCirclesBackground.module.css';

/**
 * CONFIGURACIÓN DEL EFECTO - Ajustá estos valores para personalizar
 */
const CONFIG = {
  // Espaciado entre círculos (px)
  spacingX: 45,
  spacingY: 45,
  
  // Radio de cada círculo (px)
  circleRadius: 12,
  
  // Factor de velocidad del scroll - Efecto parallax sutil
  scrollFactor: 0.15,
  
  // Ángulo de la diagonal (grados)
  // 30 grados de inclinación en la transición
  diagonalAngle: 30,
  
  // Ancho de la banda de círculos a lo largo de la diagonal
  // Franja pequeña de transición (~15% total)
  bandWidthPercent: 0.15,
  
  // COLORES - Paleta Cuaderno Cero
  colors: {
    // Fondo superior (verde medio brillante)
    bgTop: '#22c55e',
    // Fondo inferior (blanco/off-white)
    bgBottom: '#f5f5f4',
    // Color de círculos sobre fondo verde (blancos)
    circleOnGreen: '#f5f5f4',
    // Color de círculos sobre fondo blanco (verdes)
    circleOnWhite: '#166534'
  },
  
  // Opacidad de los círculos
  circleOpacity: 0.7,
};

/**
 * Interpola linealmente entre dos valores
 */
const lerp = (a: number, b: number, t: number): number => {
  return a + (b - a) * t;
};

/**
 * Componente de fondo con transición diagonal y círculos en la zona de transición
 * 
 * Características:
 * - Fondo de 2 colores con transición diagonal (30 grados)
 * - Círculos solo en la banda de transición diagonal
 * - Los círculos se mueven con efecto parallax al scrollear
 * - Colores de círculos varían según posición en la diagonal
 */
const ScrollLiquidCirclesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollOffsetRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ============================================
    // SETUP: Ajustar tamaño del canvas
    // ============================================
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // ============================================
    // EVENTO SCROLL: Actualizar offset (efecto parallax)
    // ============================================
    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY * CONFIG.scrollFactor;
    };

    // ============================================
    // CÁLCULO DE LÍNEA DIAGONAL
    // Línea de arriba-derecha a abajo-izquierda a 30 grados
    // ============================================
    
    /**
     * Calcula la distancia perpendicular de un punto (x, y) a la línea diagonal
     * y en qué lado de la línea está (para determinar el color)
     * 
     * @returns { distance: número, side: -1 o 1 (lado de la línea) }
     */
    const getDistanceToLine = (x: number, y: number, width: number, height: number) => {
      // La línea de transición atraviesa el canvas con ángulo de 150 grados
      // (de arriba-izquierda a abajo-derecha)
      // Arriba de la línea = verde, Abajo de la línea = blanco
      
      const angleRad = (150 * Math.PI) / 180;
      
      // Vector dirección de la línea
      const dx = Math.cos(angleRad);
      const dy = Math.sin(angleRad);
      
      // Punto de referencia en el centro del canvas
      const x0 = width / 2;
      const y0 = height / 2;
      
      // Vector desde el punto de referencia al punto en cuestión
      const vx = x - x0;
      const vy = y - y0;
      
      // Distancia perpendicular usando producto cruz
      const crossProduct = vx * dy - vy * dx;
      const distance = Math.abs(crossProduct);
      
      // Lado de la línea (negativo = arriba/verde, positivo = abajo/blanco)
      const side = crossProduct > 0 ? 1 : -1;
      
      return { distance, side };
    };

    // ============================================
    // GENERAR GRILLA DE CÍRCULOS
    // Crear posiciones base una sola vez
    // ============================================
    const circles: Array<{ x: number; baseY: number }> = [];
    
    // Generar círculos en un área más grande que el viewport
    // para que haya círculos disponibles al scrollear
    const extraHeight = 2000;
    const cols = Math.ceil(canvas.width / CONFIG.spacingX) + 2;
    const rows = Math.ceil((canvas.height + extraHeight * 2) / CONFIG.spacingY) + 2;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const offsetX = (canvas.width % CONFIG.spacingX) / 2;
        const offsetY = -extraHeight;
        
        circles.push({
          x: col * CONFIG.spacingX + offsetX,
          baseY: row * CONFIG.spacingY + offsetY
        });
      }
    }

    // ============================================
    // RENDER LOOP
    // ============================================
    const render = () => {
      const { width, height } = canvas;
      
      // ============================================
      // 1. FONDO: Gradiente DIAGONAL fijo (no se mueve con scroll)
      // Arriba = VERDE, Abajo = BLANCO con transición diagonal de 30 grados
      // ============================================
      
      // Gradiente diagonal: de arriba-izquierda a abajo-derecha
      // 30 grados de inclinación desde la horizontal
      // Ángulo: 150 grados (180° - 30°)
      const angleRad = (150 * Math.PI) / 180;
      const gradientLength = Math.sqrt(width * width + height * height) * 1.2;
      
      // Calcular puntos del gradiente
      const centerX = width / 2;
      const centerY = height / 2;
      const x1 = centerX - (gradientLength / 2) * Math.cos(angleRad);
      const y1 = centerY - (gradientLength / 2) * Math.sin(angleRad);
      const x2 = centerX + (gradientLength / 2) * Math.cos(angleRad);
      const y2 = centerY + (gradientLength / 2) * Math.sin(angleRad);
      
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, CONFIG.colors.bgTop);     // Arriba = verde
      gradient.addColorStop(1, CONFIG.colors.bgBottom);  // Abajo = blanco
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // ============================================
      // 2. CÍRCULOS: Solo en la banda diagonal
      // ============================================
      circles.forEach(circle => {
        // Posición actual del círculo (se mueve con el scroll - efecto parallax)
        const currentY = circle.baseY - scrollOffsetRef.current;
        
        // Optimización: saltar si está fuera del viewport
        if (currentY < -CONFIG.circleRadius || currentY > height + CONFIG.circleRadius) {
          return;
        }
        
        // Calcular distancia a la línea diagonal
        const { distance, side } = getDistanceToLine(circle.x, currentY, width, height);
        
        // FILTRO: Solo dibujar si está dentro de la banda diagonal (franja pequeña)
        const halfBandWidth = (height * CONFIG.bandWidthPercent) / 2;
        if (distance > halfBandWidth) {
          return;
        }
        
        // EFECTO DE FUNDIDO LÍQUIDO PROFESIONAL:
        // Los círculos se funden completamente con el fondo al acercarse a la línea
        
        // Distancia normalizada (0 = en la línea, 1 = en el borde de la banda)
        const normalizedDistance = distance / halfBandWidth;
        
        // Opacidad con curva exponencial para fundido más dramático
        // Más cerca de la línea = casi invisible (efecto gota líquida)
        const fadeT = Math.pow(normalizedDistance, 0.5); // Curva más pronunciada
        const opacity = lerp(0, CONFIG.circleOpacity, fadeT);
        
        // COLOR: Opuesto al fondo según el lado de la línea
        // side = -1 (arriba/fondo verde) -> círculos blancos
        // side = 1 (abajo/fondo blanco) -> círculos verdes
        const circleColor = side < 0 
          ? CONFIG.colors.circleOnGreen   // Blancos sobre verde
          : CONFIG.colors.circleOnWhite;  // Verdes sobre blanco
        
        // Dibujar círculo con efecto de fundido líquido
        ctx.beginPath();
        ctx.arc(circle.x, currentY, CONFIG.circleRadius, 0, Math.PI * 2);
        ctx.fillStyle = circleColor;
        ctx.globalAlpha = opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      
      // Continuar el loop
      animationFrameRef.current = requestAnimationFrame(render);
    };

    // ============================================
    // EVENT LISTENERS
    // ============================================
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', resizeCanvas);

    // Iniciar el render loop
    render();

    // ============================================
    // CLEANUP
    // ============================================
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default ScrollLiquidCirclesBackground;
