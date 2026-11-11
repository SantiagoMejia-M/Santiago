# Cómo subir Mi Gym a Google Play

La app ya funciona como app web (PWA). Para Play Store se "envuelve" en una app de Android
(TWA) que abre tu página a pantalla completa, sin barra del navegador. No hay que reescribir nada.

---

## 0. Antes de empezar: las imágenes ⚠️
Las fotos de los ejercicios vienen de *free-exercise-db*, pero no se sabe quién las tomó.
**Para publicar, cámbialas** por fotos tuyas o con licencia comercial. Si no, Google te puede bajar
la app por un reclamo de derechos de autor. Las capturas de esta carpeta también las muestran, así que
vuelve a tomarlas cuando cambies las fotos.

## 1. Cuenta de desarrollador (una sola vez)
1. Entra a **play.google.com/console** con tu cuenta de Google.
2. Elige cuenta **Personal** y paga el registro único (25 USD).
3. Verifica tu identidad (INE/pasaporte) y tu teléfono. Puede tardar unos días.

## 2. Generar el archivo de Android con PWABuilder (gratis, sin instalar nada)
1. Entra a **pwabuilder.com** y pega: `https://santiagomejia-m.github.io/Santiago/gym/`
2. Dale **Start**. Debe detectar el manifest, el service worker y los iconos (ya están listos).
3. Toca **Package for stores → Android → Generate package**.
   - **Package ID:** algo único que nunca vas a cambiar, p. ej. `io.github.santiagomejiam.migym`
   - **App name:** `Mi Gym`
   - **Signing key:** "Create new".
4. Descarga el .zip. Trae:
   - `app-release.aab` → el archivo que se sube a Play Store.
   - `signing.keystore` + `signing-key-info.txt` → **GUÁRDALOS MUY BIEN** (Drive, USB). Sin
     ellos no podrás actualizar la app nunca.
   - `assetlinks.json` → para el paso 3.

## 3. Quitar la barra del navegador (assetlinks.json)
Android solo abre la app a pantalla completa si encuentra este archivo en:
`https://santiagomejia-m.github.io/.well-known/assetlinks.json`

Esa dirección es la **raíz** de tu dominio, no la carpeta del repo `Santiago`. Por eso:
1. En GitHub crea un repo **público** llamado exactamente **`SantiagoMejia-M.github.io`**.
2. Súbele el archivo en la ruta `.well-known/assetlinks.json` y además un archivo vacío llamado `.nojekyll`
   (sin él, GitHub ignora las carpetas que empiezan con punto).
3. Activa **Settings → Pages** en ese repo (rama `main`, carpeta `/`).
4. Después de subir la app a Play Console, ve a **Configuración → Integridad de la app → Firma de apps**,
   copia la huella **SHA-256** de Google y agrégala también dentro de `assetlinks.json`. Así queda con las 2 huellas:
   la de PWABuilder y la de Google.

## 4. Crear la app en Play Console
**Crear app** → nombre "Mi Gym", idioma Español, App, Gratis. Luego llena lo que pide el panel:

| Sección | Qué poner |
|---|---|
| Política de privacidad | `https://santiagomejia-m.github.io/Santiago/gym/privacidad.html` |
| Acceso a la app | Toda la funcionalidad está disponible sin restricciones |
| Anuncios | No contiene anuncios |
| Clasificación de contenido | Llena el cuestionario (categoría Utilidad/Salud, todo "No") |
| Público objetivo | 18 años o más |
| Seguridad de los datos | **No recopila ni comparte datos** (todo se queda en el teléfono) |
| Categoría | Salud y bienestar |
| Ficha de Play Store | Textos de abajo + imágenes de esta carpeta |

Imágenes (en esta carpeta `play-store/`):
- Icono: `icono-512.png`
- Gráfico de funciones: `portada-1024x500.png`
- Capturas de teléfono: `captura-1-hoy.png` … `captura-7-editar.png`

## 5. Prueba cerrada obligatoria (cuentas personales nuevas)
Google pide que, antes de publicar para todos, la app esté en **prueba cerrada con al menos 12 personas
durante 14 días seguidos**.
1. **Pruebas → Prueba cerrada → Crear versión**, sube el `app-release.aab`.
2. Agrega los correos de Gmail de 12+ amigos/familia como testers.
3. Comparte el link de prueba. Ellos instalan la app y la dejan instalada 14 días.
4. Después, en el panel aparece **"Solicitar acceso a producción"**. Contestas unas preguntas y Google la revisa
   (suele tardar de unos días a una semana).

## 6. Actualizaciones
- **Cambios en la rutina, diseño o ejercicios:** solo se suben a GitHub como siempre. La app de Play Store
  carga tu página, así que se actualiza sola, sin tocar Play Console.
- **Solo si cambias el icono, el nombre o el package:** genera otro .aab en PWABuilder **con el mismo keystore**
  y súbelo con un número de versión mayor.

---

## Textos para la ficha

**Nombre (máx. 30):**
Mi Gym — Rutina Alpha

**Descripción corta (máx. 80):**
Tu rutina de gym con ejercicios animados, temporizador y registro de pesos.

**Descripción completa:**
Mi Gym te dice exactamente qué hacer cada día en el gym, sin adivinar.

💪 RUTINA ALPHA LISTA PARA USAR
Empuje, Tirón y Pierna dos veces por semana, hecha con equipo común: mancuernas, bancos, poleas y máquinas de pierna. Sin barras.

🎬 CADA EJERCICIO EXPLICADO
• Imagen animada de inicio y final del movimiento
• Pasos claros de cómo se hace
• Errores comunes que debes evitar
• Equipo y músculos que trabaja

⏱️ MODO ENTRENAMIENTO
• Te guía serie por serie
• Anota el peso con botones de + y −
• Descanso en pantalla completa con cuenta regresiva, vibración y sonido
• La pantalla no se apaga mientras entrenas
• Botón para terminar un ejercicio antes si ya no puedes más

✏️ HAZLA TUYA
• Quita, agrega y reordena ejercicios de cada día
• Cambia series, repeticiones y descansos
• Crea tus propios ejercicios con fotos de tu galería o cámara

📈 PROGRESO
• Historial de entrenamientos
• Récords de peso por ejercicio
• Racha de semanas entrenando

🔒 PRIVADA
Sin cuentas, sin anuncios y sin rastreo. Todo se guarda solo en tu teléfono.
