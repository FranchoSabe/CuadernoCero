# 🚀 Guía de Deployment - Cuaderno Cero

Esta guía te ayudará a poner **Cuaderno Cero** online de forma gratuita.

---

## 🎯 Opciones de Deployment Gratuito

### **Opción 1: Vercel (RECOMENDADA)** ⭐

**Ventajas:**
- ✅ Deployment automático desde GitHub
- ✅ SSL/HTTPS gratis
- ✅ CDN global ultrarrápido
- ✅ Dominio gratuito: `cuadernocero.vercel.app`
- ✅ Fácil conectar dominio personalizado
- ✅ Previews automáticas de cada commit

**Pasos:**

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con GitHub

2. **Subir código a GitHub**
   ```bash
   # Inicializar git (si no lo hiciste)
   git init
   git add .
   git commit -m "Initial commit - Cuaderno Cero"
   
   # Crear repositorio en GitHub y conectarlo
   git remote add origin https://github.com/TU_USUARIO/cuaderno-cero.git
   git branch -M main
   git push -u origin main
   ```

3. **Importar en Vercel**
   - En Vercel, clic en "Add New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite
   - Clic en "Deploy"
   - ¡Listo! Tu sitio estará en `https://cuaderno-cero.vercel.app`

4. **Personalizar dominio (opcional)**
   - En Vercel → Settings → Domains
   - Agrega `cuadernocero.vercel.app` (gratis)
   - O conecta tu dominio personalizado si lo compras

---

### **Opción 2: Netlify**

**Ventajas:**
- ✅ Similar a Vercel
- ✅ Dominio gratuito: `cuadernocero.netlify.app`
- ✅ Formularios integrados
- ✅ SSL gratis

**Pasos:**

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate con GitHub

2. **Deploy desde GitHub**
   - Clic en "Add new site" → "Import an existing project"
   - Conecta con GitHub
   - Selecciona tu repositorio
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy!

3. **Cambiar dominio**
   - Site settings → Domain management
   - Cambiar de random a `cuadernocero.netlify.app`

---

### **Opción 3: GitHub Pages**

**Ventajas:**
- ✅ Totalmente gratis
- ✅ Dominio: `TU_USUARIO.github.io/cuaderno-cero`
- ✅ Integrado con GitHub

**Pasos:**

1. **Instalar gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Actualizar package.json**
   Agrega:
   ```json
   {
     "homepage": "https://TU_USUARIO.github.io/cuaderno-cero",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Actualizar vite.config.ts**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/cuaderno-cero/', // Importante!
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 🌐 Dominio Personalizado: cuadernocero.com

### **Opción A: Comprar Dominio (Recomendado)**

**Dónde comprar:**
1. **Namecheap** - ~$10/año
2. **Google Domains** - ~$12/año
3. **Cloudflare** - ~$9/año (más barato)
4. **NIC Argentina (.com.ar)** - Si querés .com.ar

**Pasos:**
1. Compra el dominio `cuadernocero.com`
2. En Vercel/Netlify:
   - Settings → Domains
   - Add custom domain: `cuadernocero.com`
   - Copia los nameservers o DNS records
3. En tu proveedor de dominios:
   - Agrega los DNS que te dio Vercel/Netlify
4. Espera 24-48hs para propagación

### **Opción B: Subdominio Gratuito**

Si querés algo más corto que `.vercel.app`:

**Freenom** (dominios .tk, .ml, .ga gratis):
- ⚠️ No muy profesional
- Pueden quitarte el dominio
- No recomendado para proyectos serios

**is-a.dev** (para proyectos de desarrollo):
- Gratuito y más profesional
- `cuadernocero.is-a.dev`
- Requiere registro en GitHub

---

## 📦 Preparar el Proyecto para Production

Antes de deployar, asegurate de:

### 1. **Build local para verificar**
```bash
npm run build
npm run preview
```

### 2. **Revisar que todo funcione**
- Todas las imágenes cargan
- Links internos funcionan
- Formulario de contacto abre WhatsApp
- Responsive en mobile

### 3. **Optimizar (opcional)**
```bash
# Ya está optimizado con Vite, pero podés verificar el tamaño
npm run build
# Revisa la carpeta dist/
```

---

## 🎯 Recomendación Final

**Para Cuaderno Cero, te recomiendo:**

1. **Deployment: Vercel** (más rápido y fácil)
2. **Dominio temporal: `cuadernocero.vercel.app`** (gratis, limpio)
3. **Si te gusta, comprar: `cuadernocero.com`** ($10/año)

**URL final sugerida:**
- Gratis: `cuadernocero.vercel.app` ✅
- Con dominio: `cuadernocero.com` ⭐

---

## 📋 Checklist Pre-Deploy

- [ ] Código subido a GitHub
- [ ] Build funciona sin errores (`npm run build`)
- [ ] Información de contacto correcta
- [ ] Meta tags actualizados
- [ ] Favicon personalizado (opcional)
- [ ] Analytics configurado (opcional)

---

## 🚀 Deploy Rápido con Vercel

```bash
# 1. Instalar Vercel CLI (opcional)
npm i -g vercel

# 2. Deploy directo desde terminal
vercel

# 3. Seguir instrucciones
# ✓ Link to existing project? No
# ✓ Project name: cuaderno-cero
# ✓ Deploy? Yes

# ¡Listo! Te dará la URL
```

---

## 📞 Soporte

Si tenés problemas:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)

---

**¡Éxitos con Cuaderno Cero! 🚀**

