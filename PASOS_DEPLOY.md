# 🎯 Pasos para poner Cuaderno Cero Online

Guía rápida para deployar en **5 minutos**.

---

## ✅ Opción Más Fácil: Vercel (Recomendada)

### **Paso 1: Crear cuenta GitHub (si no tenés)**
1. Ve a [github.com](https://github.com)
2. Regístrate gratis
3. Verificá tu email

### **Paso 2: Subir código a GitHub**

En tu terminal (dentro de la carpeta del proyecto):

```bash
# 1. Inicializar git
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer primer commit
git commit -m "Initial commit - Cuaderno Cero"

# 4. Crear repositorio en GitHub:
#    - Ve a github.com
#    - Clic en "New repository"
#    - Nombre: "cuaderno-cero"
#    - Público
#    - NO marcar "Initialize with README" (ya tenemos)
#    - Crear

# 5. Conectar con tu repositorio (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/cuaderno-cero.git
git branch -M main
git push -u origin main
```

### **Paso 3: Deploy con Vercel**

1. **Crear cuenta en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Clic en "Sign Up"
   - Elegí "Continue with GitHub"
   - Autoriza Vercel

2. **Importar proyecto:**
   - Clic en "Add New..."
   - Selecciona "Project"
   - Busca tu repositorio "cuaderno-cero"
   - Clic en "Import"

3. **Configurar (automático):**
   - Vercel detecta automáticamente que es Vite
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - **No toques nada, está perfecto**

4. **Deploy:**
   - Clic en "Deploy"
   - Espera 1-2 minutos
   - ¡Listo! 🎉

### **Paso 4: Obtener tu URL**

Tu sitio estará en:
```
https://cuaderno-cero-XXXXXX.vercel.app
```

**Para personalizar el nombre:**
1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Edita el dominio a: `cuadernocero.vercel.app`
4. ¡Ahora tu URL es más limpia!

---

## 🌐 Dominio Personalizado: cuadernocero.com

### **¿Querés cuadernocero.com?**

Tenés que comprar el dominio (~$10 USD/año):

#### **Dónde comprar:**
1. **Cloudflare** - $9.77/año (más barato) ⭐
   - [cloudflare.com/products/registrar](https://www.cloudflare.com/products/registrar/)
   
2. **Namecheap** - $10.98/año
   - [namecheap.com](https://www.namecheap.com)
   
3. **Google Domains** - $12/año
   - [domains.google](https://domains.google)

#### **Conectar con Vercel:**

1. **Compra el dominio** `cuadernocero.com`

2. **En Vercel:**
   - Settings → Domains
   - Add: `cuadernocero.com`
   - Vercel te dará instrucciones (nameservers)

3. **En tu proveedor de dominios:**
   - Busca "DNS Settings" o "Nameservers"
   - Pega los nameservers de Vercel
   - Guarda

4. **Espera 24-48hs**
   - La propagación DNS puede tardar
   - Generalmente funciona en 1-2 horas

---

## 💡 Alternativa 100% Gratuita

Si querés algo más corto que `.vercel.app` pero gratis:

### **Opción 1: Subdomain de Vercel**
- `cuadernocero.vercel.app` ✅
- Gratis, limpio, profesional
- **Recomendado para empezar**

### **Opción 2: Netlify**
- Mismo proceso que Vercel
- URL: `cuadernocero.netlify.app`
- También gratis y profesional

---

## 🎯 Resumen

### **Para empezar rápido (GRATIS):**
```
1. Sube código a GitHub (5 min)
2. Conecta con Vercel (2 min)
3. Tu sitio: cuadernocero.vercel.app ✅
```

### **Para dominio personalizado (+$10/año):**
```
1. Compra cuadernocero.com en Cloudflare
2. Conecta con Vercel
3. Tu sitio: cuadernocero.com ⭐
```

---

## 🆘 Problemas Comunes

### "git: command not found"
Instala Git:
- Windows: [git-scm.com](https://git-scm.com)
- Mac: `brew install git`
- Linux: `sudo apt install git`

### "Permission denied (publickey)"
Configura SSH en GitHub:
1. `ssh-keygen -t ed25519 -C "tu@email.com"`
2. `cat ~/.ssh/id_ed25519.pub`
3. Copia y pega en GitHub → Settings → SSH Keys

### "Build failed"
Verifica localmente:
```bash
npm install
npm run build
```

Si funciona local, funcionará en Vercel.

---

## 📞 ¿Necesitás ayuda?

Cualquier problema:
1. Revisa [DEPLOYMENT.md](./DEPLOYMENT.md) (guía completa)
2. Documentación Vercel: [vercel.com/docs](https://vercel.com/docs)
3. GitHub Issues: Abre un issue en tu repo

---

**¡Éxito con Cuaderno Cero! 🚀**

Tu sitio estará online en minutos y podrás compartir:
- `cuadernocero.vercel.app` (gratis)
- `cuadernocero.com` (si compraste el dominio)

