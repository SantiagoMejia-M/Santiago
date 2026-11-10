// Rutina "Alpha" — adaptada al equipo del gym (SIN barras):
// Tren superior: mancuernas, 1 banco plano, 1 banco inclinable, 2 poleas con agarres (espalda, de mano, cuerda, V).
// Pierna: prensa de discos, extensión de cuádriceps, curl femoral + mancuernas.

const EXERCISES = {
  // ---------------- EMPUJE ----------------
  Incline_Dumbbell_Press: {
    name: "Press inclinado con mancuernas",
    equip: "Banco inclinable + mancuernas",
    muscles: "Pecho superior, hombro frontal, tríceps",
    steps: [
      "Pon el banco a 30–45° (no más, si no se vuelve press de hombro).",
      "Siéntate con las mancuernas sobre los muslos y súbelas con ayuda de las rodillas al acostarte.",
      "Junta un poco los omóplatos y saca pecho. Pies firmes en el piso.",
      "Baja las mancuernas a los lados del pecho, codos a unos 45° del cuerpo (no abiertos en cruz).",
      "Empuja hacia arriba y un poco hacia adentro hasta casi juntarlas arriba."
    ],
    errors: ["Banco demasiado vertical", "Codos totalmente abiertos (lastima el hombro)", "Rebotar abajo"]
  },
  Dumbbell_Bench_Press: {
    name: "Press plano con mancuernas",
    equip: "Banco plano + mancuernas",
    muscles: "Pecho, tríceps, hombro frontal",
    steps: [
      "Acuéstate en el banco plano con una mancuerna en cada mano apoyada en los muslos.",
      "Usa las rodillas para subirlas y quedar con las mancuernas a la altura del pecho.",
      "Omóplatos juntos y hacia abajo, ligera curva en la espalda baja, glúteos en el banco.",
      "Baja lento (2–3 seg) hasta sentir el estiramiento del pecho.",
      "Empuja hacia arriba sin chocar las mancuernas."
    ],
    errors: ["Levantar el glúteo del banco", "Bajar muy rápido", "Muñecas dobladas hacia atrás"]
  },
  Seated_Dumbbell_Press: {
    name: "Press de hombro sentado con mancuernas",
    equip: "Banco inclinable (casi vertical) + mancuernas",
    muscles: "Hombros, tríceps",
    steps: [
      "Pon el respaldo casi vertical (80–90°). Espalda pegada al respaldo.",
      "Mancuernas a la altura de las orejas, palmas al frente, codos un poco adelante del cuerpo.",
      "Empuja hacia arriba hasta casi estirar los brazos.",
      "Baja controlado hasta la altura de las orejas/barbilla."
    ],
    errors: ["Arquear mucho la espalda baja", "Bajar solo la mitad", "Chocar las mancuernas arriba"]
  },
  Side_Lateral_Raise: {
    name: "Elevaciones laterales",
    equip: "Mancuernas (de pie)",
    muscles: "Hombro lateral (el que da anchura)",
    steps: [
      "De pie, mancuernas a los lados, codos ligeramente doblados.",
      "Inclina el torso apenas hacia adelante.",
      "Sube los brazos hacia los lados hasta la altura de los hombros, guiando con los codos.",
      "Baja lento, sin dejar caer el peso."
    ],
    errors: ["Balancear el cuerpo para subir", "Subir por encima de los hombros", "Encoger los trapecios"]
  },
  Arnold_Dumbbell_Press: {
    name: "Press Arnold",
    equip: "Banco inclinable (vertical) + mancuernas",
    muscles: "Hombros (frontal y lateral), tríceps",
    steps: [
      "Sentado, mancuernas frente a la cara con las palmas hacia ti (como al final de un curl).",
      "Al empujar hacia arriba, gira las muñecas para terminar con las palmas al frente.",
      "Baja haciendo el giro al revés hasta la posición inicial."
    ],
    errors: ["Hacerlo con prisa", "Arquear la espalda"]
  },
  Hammer_Grip_Incline_DB_Bench_Press: {
    name: "Press inclinado agarre neutro",
    equip: "Banco inclinable + mancuernas",
    muscles: "Pecho superior, tríceps",
    steps: [
      "Banco a 30°, mancuernas con palmas mirándose (agarre martillo).",
      "Codos pegados más cerca del cuerpo que en el press normal.",
      "Baja a los lados del pecho y empuja hacia arriba."
    ],
    errors: ["Rebotar abajo", "Despegar la espalda del banco"]
  },
  Close_Grip_Dumbbell_Press: {
    img: "Close-Grip_Dumbbell_Press",
    name: "Press cerrado con mancuernas",
    equip: "Banco plano + mancuernas",
    muscles: "Tríceps, pecho interno",
    steps: [
      "Acostado en banco plano, junta las dos mancuernas tocándose (palmas mirándose).",
      "Baja juntas hasta el centro del pecho con los codos pegados al cuerpo.",
      "Empuja arriba manteniéndolas juntas todo el tiempo."
    ],
    errors: ["Separar las mancuernas", "Abrir los codos"]
  },


  // ---------------- TIRÓN (mancuernas) ----------------
  One_Arm_Dumbbell_Row: {
    img: "One-Arm_Dumbbell_Row",
    name: "Remo a una mano con mancuerna",
    equip: "Banco plano + mancuerna",
    muscles: "Dorsal, espalda media",
    steps: [
      "Rodilla y mano del mismo lado sobre el banco plano, espalda recta.",
      "Con la otra mano agarra la mancuerna con el brazo colgando.",
      "Jala la mancuerna hacia la cadera (no al pecho), codo pegado al cuerpo.",
      "Baja estirando bien el brazo."
    ],
    errors: ["Girar el torso", "Jalar con el bíceps en vez de la espalda"]
  },

  Incline_Dumbbell_Curl: {
    name: "Curl inclinado con mancuernas",
    equip: "Banco inclinable + mancuernas",
    muscles: "Bíceps (gran estiramiento)",
    steps: [
      "Banco a 45–60°, espalda pegada, brazos colgando con palmas al frente.",
      "Sube las mancuernas doblando solo el codo.",
      "Aprieta arriba y baja lento hasta estirar completamente."
    ],
    errors: ["Llevar los codos hacia adelante", "Despegar la espalda"]
  },
  Hammer_Curls: {
    name: "Curl martillo",
    equip: "Mancuernas (de pie)",
    muscles: "Bíceps, braquial, antebrazo",
    steps: [
      "De pie, mancuernas a los lados con palmas mirándose.",
      "Codos pegados al cuerpo.",
      "Sube las mancuernas sin girar la muñeca y baja lento."
    ],
    errors: ["Balancear el cuerpo", "Mover los codos"]
  },
  Dumbbell_Incline_Row: {
    name: "Remo con pecho apoyado",
    equip: "Banco inclinable + mancuernas",
    muscles: "Espalda media, dorsales",
    steps: [
      "Banco a 30–45°. Acuéstate boca abajo con el pecho en el respaldo.",
      "Mancuernas colgando, palmas mirándose.",
      "Jala los codos hacia atrás y aprieta los omóplatos.",
      "Baja estirando los brazos."
    ],
    errors: ["Despegar el pecho del banco", "Encoger los hombros"]
  },
  Dumbbell_Shrug: {
    name: "Encogimientos con mancuernas",
    equip: "Mancuernas (de pie)",
    muscles: "Trapecio",
    steps: [
      "De pie, mancuernas pesadas a los lados.",
      "Sube los hombros hacia las orejas lo más alto posible.",
      "Aguanta 1 segundo arriba y baja lento."
    ],
    errors: ["Girar los hombros en círculo", "Doblar los codos"]
  },





  // ---------------- PIERNA (máquinas) ----------------
  Leg_Press: {
    name: "Prensa de pierna",
    equip: "Prensa de discos",
    muscles: "Cuádriceps, glúteos",
    steps: [
      "Espalda y glúteo pegados al respaldo.",
      "Pies al ancho de hombros en el centro de la plataforma.",
      "Quita los seguros y baja hasta que las rodillas queden a ~90°.",
      "Empuja con todo el pie sin bloquear las rodillas arriba."
    ],
    errors: ["Despegar el glúteo abajo", "Bloquear las rodillas", "Medias repeticiones con mucho peso"]
  },

  Leg_Extensions: {
    name: "Extensión de cuádriceps",
    equip: "Máquina de extensiones",
    muscles: "Cuádriceps",
    steps: [
      "Ajusta el respaldo para que tus rodillas queden en el eje de la máquina.",
      "El rodillo va justo arriba de los tobillos.",
      "Estira las piernas por completo y aprieta 1 segundo arriba.",
      "Baja lento."
    ],
    errors: ["Dejar caer el peso", "Levantar la cadera del asiento"]
  },
  Lying_Leg_Curls: {
    name: "Curl femoral en máquina",
    equip: "Máquina de curl femoral (acostado o sentado)",
    muscles: "Femorales (isquiotibiales)",
    steps: [
      "Ajusta la máquina para que tus rodillas queden en el eje (donde gira).",
      "El rodillo va justo arriba de los talones.",
      "Dobla las piernas llevando el rodillo hacia los glúteos.",
      "Baja lento sin dejar que choquen las pesas."
    ],
    errors: ["Levantar la cadera", "Bajar rápido"]
  },

  // ---------------- POLEAS ----------------
  Cable_Crossover: {
    name: "Cruce de poleas (de arriba a abajo)",
    equip: "2 poleas altas + agarres de mano",
    muscles: "Pecho (parte media y baja)",
    steps: [
      "Pon las dos poleas arriba y agarra un maneral en cada mano.",
      "Da un paso al frente, un pie delante del otro, torso un poco inclinado.",
      "Codos ligeramente doblados y fijos. Junta las manos al frente y abajo, a la altura del ombligo.",
      "Aprieta el pecho 1 seg y regresa lento hasta sentir el estiramiento."
    ],
    errors: ["Doblar y estirar los codos (se vuelve press)", "Dejar que el peso te jale los brazos de golpe"]
  },
  Low_Cable_Crossover: {
    name: "Cruce de poleas (de abajo a arriba)",
    equip: "2 poleas bajas + agarres de mano",
    muscles: "Pecho superior",
    steps: [
      "Pon las dos poleas abajo y agarra un maneral en cada mano.",
      "Párate en medio, brazos abajo a los lados, codos un poco doblados.",
      "Sube las manos hacia el frente y arriba hasta juntarlas a la altura de la barbilla.",
      "Aprieta y baja lento."
    ],
    errors: ["Usar demasiado peso", "Arquear la espalda baja"]
  },
  Standing_Low_Pulley_Deltoid_Raise: {
    img: "Standing_Low-Pulley_Deltoid_Raise",
    name: "Elevación lateral en polea",
    equip: "Polea baja + agarre de mano",
    muscles: "Hombro lateral",
    steps: [
      "Polea abajo. Párate de lado a la máquina y agarra el maneral con la mano más lejana.",
      "El cable pasa por delante de tu cuerpo.",
      "Sube el brazo hacia el lado hasta la altura del hombro, codo un poco doblado.",
      "Baja lento. Termina un brazo y cambia."
    ],
    errors: ["Inclinarte para ayudarte", "Subir más arriba del hombro"]
  },
  Triceps_Pushdown_Rope: {
    img: "Triceps_Pushdown_-_Rope_Attachment",
    name: "Jalón de tríceps con cuerda",
    equip: "Polea alta + cuerda",
    muscles: "Tríceps",
    steps: [
      "Polea arriba con la cuerda. Agárrala con las palmas mirándose.",
      "Codos pegados a los costados y quietos.",
      "Empuja hacia abajo y al final abre la cuerda hacia los lados.",
      "Sube lento hasta que los antebrazos queden paralelos al piso."
    ],
    errors: ["Despegar los codos del cuerpo", "Echarte encima del peso"],
    note: "¿No hay cuerda? Hazlo igual con el agarre en V o con un maneral."
  },
  Triceps_Pushdown_V: {
    img: "Triceps_Pushdown_-_V-Bar_Attachment",
    name: "Jalón de tríceps con agarre en V",
    equip: "Polea alta + agarre en V (o maneral)",
    muscles: "Tríceps",
    steps: [
      "Polea arriba con el agarre en V.",
      "Codos pegados al cuerpo.",
      "Empuja hacia abajo hasta estirar los brazos y aprieta.",
      "Sube lento sin mover los codos."
    ],
    errors: ["Mover los hombros", "Usar el peso del cuerpo"]
  },
  Cable_Rope_Overhead_Triceps_Extension: {
    name: "Tríceps sobre la cabeza en polea",
    equip: "Polea + cuerda (o maneral)",
    muscles: "Tríceps (cabeza larga)",
    steps: [
      "Polea abajo o a media altura con la cuerda. Agárrala y date la vuelta (de espaldas a la máquina).",
      "Manos detrás de la cabeza, codos apuntando al frente/arriba.",
      "Estira los brazos hacia arriba.",
      "Regresa lento sintiendo el estiramiento del tríceps."
    ],
    errors: ["Abrir los codos", "Mover todo el cuerpo"]
  },
  Wide_Grip_Lat_Pulldown: {
    img: "Wide-Grip_Lat_Pulldown",
    name: "Jalón al pecho",
    equip: "Polea alta + agarre de espalda (ancho)",
    muscles: "Dorsales (espalda ancha), bíceps",
    steps: [
      "Polea arriba con el agarre ancho. Siéntate (en el banco) o hinca una rodilla para quedar estable.",
      "Agarre más abierto que los hombros, pecho arriba.",
      "Jala hacia la parte alta del pecho llevando los codos hacia abajo y atrás.",
      "Sube lento hasta estirar bien los brazos."
    ],
    errors: ["Echarte muy para atrás", "Jalar con los brazos en vez de la espalda", "Llevarlo detrás de la nuca"]
  },
  V_Bar_Pulldown: {
    img: "V-Bar_Pulldown",
    name: "Jalón con agarre cerrado (V)",
    equip: "Polea alta + agarre en V",
    muscles: "Dorsales, espalda media, bíceps",
    steps: [
      "Polea arriba con el agarre en V (palmas mirándose). Siéntate en el banco frente a la polea.",
      "Pecho arriba, ligera inclinación hacia atrás.",
      "Jala hasta la parte alta del pecho, codos pegados al cuerpo.",
      "Sube lento estirando."
    ],
    errors: ["Columpiarte", "Medias repeticiones"]
  },
  Seated_Cable_Rows: {
    name: "Remo sentado en polea",
    equip: "Polea baja + agarre en V + banco plano",
    muscles: "Espalda media, dorsales",
    steps: [
      "Polea abajo con el agarre en V. Siéntate en el banco (o en el piso) frente a la polea, pies apoyados.",
      "Espalda recta, brazos estirados.",
      "Jala hacia el ombligo sacando pecho y juntando los omóplatos.",
      "Regresa lento estirando los brazos sin encorvarte."
    ],
    errors: ["Balancearte hacia atrás y adelante", "Redondear la espalda"]
  },
  Seated_One_Arm_Cable_Row: {
    img: "Seated_One-arm_Cable_Pulley_Rows",
    name: "Remo a una mano en polea",
    equip: "Polea baja/media + agarre de mano",
    muscles: "Dorsal, espalda media",
    steps: [
      "Polea a media altura o abajo con un maneral.",
      "Jala el codo hacia atrás pegado al cuerpo, llevando la mano a la cadera.",
      "Aprieta la espalda 1 seg y regresa estirando el brazo.",
      "Termina un lado y cambia."
    ],
    errors: ["Girar todo el torso", "Jalar con el bíceps"]
  },
  Straight_Arm_Pulldown: {
    img: "Straight-Arm_Pulldown",
    name: "Jalón con brazos rectos",
    equip: "Polea alta + agarre de espalda (o cuerda)",
    muscles: "Dorsales",
    steps: [
      "Polea arriba. De pie frente a la máquina, agarra con brazos casi rectos.",
      "Inclina un poco el torso hacia adelante.",
      "Baja el agarre en arco hasta los muslos sin doblar los codos.",
      "Sube lento hasta la altura de la cabeza."
    ],
    errors: ["Doblar los codos", "Mover todo el cuerpo"]
  },
  Face_Pull: {
    name: "Face pull",
    equip: "Polea alta + cuerda (o 2 manerales)",
    muscles: "Hombro posterior, espalda alta",
    steps: [
      "Polea a la altura de la cara con la cuerda.",
      "Jala la cuerda hacia tu cara abriendo las manos hacia los lados.",
      "Codos altos, aprieta los omóplatos 1 seg.",
      "Regresa lento."
    ],
    errors: ["Usar mucho peso", "Bajar los codos"]
  },
  Cable_Rear_Delt_Fly: {
    name: "Pájaros en polea",
    equip: "2 poleas a la altura de los hombros",
    muscles: "Hombro posterior",
    steps: [
      "Poleas a la altura de los hombros. Cruza los cables: la mano derecha agarra el de la izquierda y viceversa.",
      "Brazos al frente, codos un poco doblados.",
      "Abre los brazos hacia los lados y atrás hasta formar una T.",
      "Regresa lento."
    ],
    errors: ["Encoger los hombros", "Usar impulso"]
  },
  Standing_Biceps_Cable_Curl: {
    name: "Curl de bíceps en polea",
    equip: "Polea baja + agarre",
    muscles: "Bíceps",
    steps: [
      "Polea abajo. De pie frente a la máquina, palmas hacia arriba.",
      "Codos pegados al cuerpo.",
      "Sube el agarre hasta el pecho y aprieta.",
      "Baja lento sin soltar la tensión."
    ],
    errors: ["Mover los codos", "Balancearte"]
  },
  Cable_Hammer_Curl_Rope: {
    img: "Cable_Hammer_Curls_-_Rope_Attachment",
    name: "Curl martillo en polea con cuerda",
    equip: "Polea baja + cuerda",
    muscles: "Braquial, antebrazo, bíceps",
    steps: [
      "Polea abajo con la cuerda, palmas mirándose.",
      "Codos pegados al cuerpo.",
      "Sube la cuerda hasta el pecho y baja lento."
    ],
    errors: ["Balancear el cuerpo"]
  },

  // ---------------- PIERNA (sin barra) ----------------
  Goblet_Squat: {
    name: "Sentadilla goblet con mancuerna",
    equip: "1 mancuerna",
    muscles: "Cuádriceps, glúteos",
    steps: [
      "Agarra una mancuerna vertical pegada al pecho, con las dos manos.",
      "Pies un poco más abiertos que los hombros, puntas un poco hacia afuera.",
      "Baja como sentándote, codos entre las rodillas, pecho arriba.",
      "Sube empujando el piso con todo el pie."
    ],
    errors: ["Rodillas hacia adentro", "Levantar los talones", "Encorvar la espalda"]
  },
  Dumbbell_Squat: {
    name: "Sentadilla con mancuernas",
    equip: "Mancuernas",
    muscles: "Cuádriceps, glúteos",
    steps: [
      "De pie, una mancuerna en cada mano a los lados.",
      "Pies al ancho de hombros.",
      "Baja con el pecho arriba hasta que los muslos queden paralelos al piso.",
      "Sube empujando con todo el pie."
    ],
    errors: ["Inclinarte mucho al frente", "Rodillas hacia adentro"]
  },
  Dumbbell_Romanian_Deadlift: {
    img: "Stiff-Legged_Dumbbell_Deadlift",
    name: "Peso muerto rumano con mancuernas",
    equip: "Mancuernas",
    muscles: "Femorales, glúteos, espalda baja",
    steps: [
      "De pie con una mancuerna en cada mano frente a los muslos.",
      "Rodillas un poco dobladas y FIJAS.",
      "Lleva la cadera hacia atrás y baja las mancuernas pegadas a las piernas, espalda recta.",
      "Baja hasta sentir el estiramiento atrás del muslo (media espinilla) y sube apretando glúteos."
    ],
    errors: ["Redondear la espalda", "Doblar mucho las rodillas", "Alejar las mancuernas de las piernas"]
  },
  Calf_Press_Leg_Press: {
    img: "Calf_Press_On_The_Leg_Press_Machine",
    name: "Pantorrilla en la prensa",
    equip: "Prensa de discos",
    muscles: "Pantorrillas",
    steps: [
      "Siéntate en la prensa con las piernas casi rectas (sin bloquear).",
      "Pon solo las puntas de los pies en la orilla de abajo de la plataforma.",
      "Empuja con las puntas lo más lejos posible y aprieta 1 seg.",
      "Regresa lento dejando que los talones bajen bien."
    ],
    errors: ["Doblar las rodillas", "Rebotar", "Rango muy corto"],
    note: "Deja puestos los seguros de la prensa si la máquina lo permite."
  }
};

// type: empuje | tiron | pierna | descanso  (define color e icono de cada día)
const ROUTINES = [
  {
    id: "alpha",
    name: "Alpha",
    subtitle: "Empuje · Tirón · Pierna × 2",
    days: [
      {
        day: "Lunes", short: "L", type: "empuje", title: "Empuje A", focus: "Pecho · Hombro · Tríceps", emphasis: "Énfasis en pecho", time: 75,
        list: [
          { id: "Incline_Dumbbell_Press", sets: 4, reps: "8–10", rest: 120 },
          { id: "Dumbbell_Bench_Press", sets: 3, reps: "8–10", rest: 120 },
          { id: "Cable_Crossover", sets: 3, reps: "12–15", rest: 75 },
          { id: "Seated_Dumbbell_Press", sets: 3, reps: "8–10", rest: 90 },
          { id: "Side_Lateral_Raise", sets: 4, reps: "12–15", rest: 60 },
          { id: "Triceps_Pushdown_Rope", sets: 3, reps: "10–12", rest: 60 },
          { id: "Cable_Rope_Overhead_Triceps_Extension", sets: 3, reps: "12", rest: 60 }
        ]
      },
      {
        day: "Martes", short: "M", type: "tiron", title: "Tirón A", focus: "Espalda · Bíceps", emphasis: "Énfasis en anchura", time: 75,
        list: [
          { id: "Wide_Grip_Lat_Pulldown", sets: 4, reps: "8–10", rest: 120 },
          { id: "Seated_Cable_Rows", sets: 4, reps: "10", rest: 90 },
          { id: "One_Arm_Dumbbell_Row", sets: 3, reps: "10 c/lado", rest: 75 },
          { id: "Straight_Arm_Pulldown", sets: 3, reps: "12–15", rest: 60 },
          { id: "Face_Pull", sets: 3, reps: "15", rest: 60 },
          { id: "Incline_Dumbbell_Curl", sets: 3, reps: "10–12", rest: 75 },
          { id: "Hammer_Curls", sets: 3, reps: "12", rest: 60 }
        ]
      },
      {
        day: "Miércoles", short: "M", type: "pierna", title: "Pierna A", focus: "Cuádriceps · Femoral · Pantorrilla", emphasis: "Énfasis en cuádriceps", time: 70,
        list: [
          { id: "Leg_Press", sets: 4, reps: "10–12", rest: 120 },
          { id: "Goblet_Squat", sets: 3, reps: "10–12", rest: 90 },
          { id: "Leg_Extensions", sets: 4, reps: "12–15", rest: 75 },
          { id: "Lying_Leg_Curls", sets: 4, reps: "10–12", rest: 75 },
          { id: "Dumbbell_Romanian_Deadlift", sets: 3, reps: "10", rest: 90 },
          { id: "Calf_Press_Leg_Press", sets: 4, reps: "15", rest: 60 }
        ]
      },
      {
        day: "Jueves", short: "J", type: "empuje", title: "Empuje B", focus: "Pecho · Hombro · Tríceps", emphasis: "Énfasis en hombro", time: 75,
        list: [
          { id: "Arnold_Dumbbell_Press", sets: 4, reps: "8–10", rest: 120 },
          { id: "Hammer_Grip_Incline_DB_Bench_Press", sets: 4, reps: "8–10", rest: 120 },
          { id: "Low_Cable_Crossover", sets: 3, reps: "12–15", rest: 75 },
          { id: "Standing_Low_Pulley_Deltoid_Raise", sets: 4, reps: "12–15 c/brazo", rest: 45 },
          { id: "Close_Grip_Dumbbell_Press", sets: 3, reps: "10", rest: 90 },
          { id: "Triceps_Pushdown_V", sets: 3, reps: "12", rest: 60 }
        ]
      },
      {
        day: "Viernes", short: "V", type: "tiron", title: "Tirón B", focus: "Espalda · Bíceps", emphasis: "Énfasis en grosor", time: 75,
        list: [
          { id: "V_Bar_Pulldown", sets: 4, reps: "8–10", rest: 120 },
          { id: "Dumbbell_Incline_Row", sets: 4, reps: "10", rest: 90 },
          { id: "Seated_One_Arm_Cable_Row", sets: 3, reps: "10 c/lado", rest: 60 },
          { id: "Cable_Rear_Delt_Fly", sets: 3, reps: "15", rest: 60 },
          { id: "Dumbbell_Shrug", sets: 3, reps: "12–15", rest: 60 },
          { id: "Standing_Biceps_Cable_Curl", sets: 3, reps: "10–12", rest: 60 },
          { id: "Cable_Hammer_Curl_Rope", sets: 3, reps: "12", rest: 60 }
        ]
      },
      {
        day: "Sábado", short: "S", type: "pierna", title: "Pierna B", focus: "Femoral · Glúteo · Cuádriceps", emphasis: "Énfasis en cadena posterior", time: 70,
        list: [
          { id: "Dumbbell_Romanian_Deadlift", sets: 4, reps: "8–10", rest: 120 },
          { id: "Lying_Leg_Curls", sets: 4, reps: "10–12", rest: 75 },
          { id: "Leg_Press", sets: 4, reps: "10–12 (pies altos)", rest: 120 },
          { id: "Dumbbell_Squat", sets: 3, reps: "12", rest: 90 },
          { id: "Leg_Extensions", sets: 3, reps: "15", rest: 60 },
          { id: "Calf_Press_Leg_Press", sets: 4, reps: "15", rest: 60 }
        ]
      },
      { day: "Domingo", short: "D", type: "descanso", title: "Descanso", focus: "Recupera para la próxima semana", emphasis: "Descanso total", list: [] }
    ]
  }
];
