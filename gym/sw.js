// Guarda la app en el celular para que funcione sin internet en el gym.
// La página y la rutina se buscan primero en internet (para recibir actualizaciones);
// las imágenes salen directo del celular.
const CACHE = "mi-gym-v4";
const FILES = [
  "./", "index.html", "data.js", "manifest.json", "icon-192.png", "icon-512.png",
  "img/Arnold_Dumbbell_Press/0.jpg",
  "img/Arnold_Dumbbell_Press/1.jpg",
  "img/Cable_Crossover/0.jpg",
  "img/Cable_Crossover/1.jpg",
  "img/Cable_Hammer_Curls_-_Rope_Attachment/0.jpg",
  "img/Cable_Hammer_Curls_-_Rope_Attachment/1.jpg",
  "img/Cable_Rear_Delt_Fly/0.jpg",
  "img/Cable_Rear_Delt_Fly/1.jpg",
  "img/Cable_Rope_Overhead_Triceps_Extension/0.jpg",
  "img/Cable_Rope_Overhead_Triceps_Extension/1.jpg",
  "img/Calf_Press_On_The_Leg_Press_Machine/0.jpg",
  "img/Calf_Press_On_The_Leg_Press_Machine/1.jpg",
  "img/Close-Grip_Dumbbell_Press/0.jpg",
  "img/Close-Grip_Dumbbell_Press/1.jpg",
  "img/Dumbbell_Bench_Press/0.jpg",
  "img/Dumbbell_Bench_Press/1.jpg",
  "img/Dumbbell_Incline_Row/0.jpg",
  "img/Dumbbell_Incline_Row/1.jpg",
  "img/Dumbbell_Shrug/0.jpg",
  "img/Dumbbell_Shrug/1.jpg",
  "img/Dumbbell_Squat/0.jpg",
  "img/Dumbbell_Squat/1.jpg",
  "img/Face_Pull/0.jpg",
  "img/Face_Pull/1.jpg",
  "img/Goblet_Squat/0.jpg",
  "img/Goblet_Squat/1.jpg",
  "img/Hammer_Curls/0.jpg",
  "img/Hammer_Curls/1.jpg",
  "img/Hammer_Grip_Incline_DB_Bench_Press/0.jpg",
  "img/Hammer_Grip_Incline_DB_Bench_Press/1.jpg",
  "img/Incline_Dumbbell_Curl/0.jpg",
  "img/Incline_Dumbbell_Curl/1.jpg",
  "img/Incline_Dumbbell_Press/0.jpg",
  "img/Incline_Dumbbell_Press/1.jpg",
  "img/Leg_Extensions/0.jpg",
  "img/Leg_Extensions/1.jpg",
  "img/Leg_Press/0.jpg",
  "img/Leg_Press/1.jpg",
  "img/Low_Cable_Crossover/0.jpg",
  "img/Low_Cable_Crossover/1.jpg",
  "img/Lying_Leg_Curls/0.jpg",
  "img/Lying_Leg_Curls/1.jpg",
  "img/One-Arm_Dumbbell_Row/0.jpg",
  "img/One-Arm_Dumbbell_Row/1.jpg",
  "img/Seated_Cable_Rows/0.jpg",
  "img/Seated_Cable_Rows/1.jpg",
  "img/Seated_Dumbbell_Press/0.jpg",
  "img/Seated_Dumbbell_Press/1.jpg",
  "img/Seated_One-arm_Cable_Pulley_Rows/0.jpg",
  "img/Seated_One-arm_Cable_Pulley_Rows/1.jpg",
  "img/Side_Lateral_Raise/0.jpg",
  "img/Side_Lateral_Raise/1.jpg",
  "img/Standing_Biceps_Cable_Curl/0.jpg",
  "img/Standing_Biceps_Cable_Curl/1.jpg",
  "img/Standing_Low-Pulley_Deltoid_Raise/0.jpg",
  "img/Standing_Low-Pulley_Deltoid_Raise/1.jpg",
  "img/Stiff-Legged_Dumbbell_Deadlift/0.jpg",
  "img/Stiff-Legged_Dumbbell_Deadlift/1.jpg",
  "img/Straight-Arm_Pulldown/0.jpg",
  "img/Straight-Arm_Pulldown/1.jpg",
  "img/Triceps_Pushdown_-_Rope_Attachment/0.jpg",
  "img/Triceps_Pushdown_-_Rope_Attachment/1.jpg",
  "img/Triceps_Pushdown_-_V-Bar_Attachment/0.jpg",
  "img/Triceps_Pushdown_-_V-Bar_Attachment/1.jpg",
  "img/V-Bar_Pulldown/0.jpg",
  "img/V-Bar_Pulldown/1.jpg",
  "img/Wide-Grip_Lat_Pulldown/0.jpg",
  "img/Wide-Grip_Lat_Pulldown/1.jpg",
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const fresh = req.mode === "navigate" || /\/(index\.html|data\.js|manifest\.json)?$/.test(url.pathname) || url.pathname.endsWith("data.js");
  if (fresh) {
    e.respondWith(fetch(req).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r;
    }).catch(() => caches.match(req, {ignoreSearch: true}).then(r => r || caches.match("index.html"))));
  } else {
    e.respondWith(caches.match(req, {ignoreSearch: true}).then(r => r || fetch(req)));
  }
});
