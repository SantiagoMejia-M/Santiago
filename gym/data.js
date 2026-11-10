// Rutina "Alpha" — adaptada al equipo del gym:
// Tren superior: mancuernas, 1 banco plano, 1 banco inclinable, 2 jaulas (barra olímpica + barra de dominadas).
// Pierna: máquinas (prensa, extensiones, curl femoral, hack, pantorrilla) + jaulas.

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
  Incline_Dumbbell_Flyes: {
    name: "Aperturas inclinadas con mancuernas",
    equip: "Banco inclinable + mancuernas",
    muscles: "Pecho (sobre todo la parte alta)",
    steps: [
      "Banco a 30°. Mancuernas arriba, palmas mirándose.",
      "Codos ligeramente doblados y BLOQUEADOS en ese ángulo todo el ejercicio.",
      "Abre los brazos en arco como si abrazaras un barril grande, hasta sentir el estiramiento.",
      "Regresa por el mismo arco apretando el pecho."
    ],
    errors: ["Doblar y estirar los codos (se vuelve press)", "Bajar demasiado con mucho peso", "Usar peso pesado: aquí manda el control"]
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
  Lying_Dumbbell_Tricep_Extension: {
    name: "Rompecráneos con mancuernas",
    equip: "Banco plano + mancuernas",
    muscles: "Tríceps",
    steps: [
      "Acostado en banco plano, mancuernas arriba con palmas mirándose.",
      "Deja los codos fijos apuntando al techo.",
      "Dobla solo los codos bajando las mancuernas a los lados de la cabeza.",
      "Extiende los brazos apretando el tríceps."
    ],
    errors: ["Mover los codos hacia adelante/atrás", "Abrir los codos hacia afuera"]
  },
  Standing_Dumbbell_Triceps_Extension: {
    name: "Extensión de tríceps sobre la cabeza",
    equip: "1 mancuerna (sentado en banco o de pie)",
    muscles: "Tríceps (cabeza larga)",
    steps: [
      "Agarra una mancuerna con las dos manos por el disco de arriba.",
      "Súbela por encima de la cabeza con brazos estirados.",
      "Baja la mancuerna por detrás de la cabeza doblando los codos; codos apuntando al frente/arriba.",
      "Sube estirando los brazos."
    ],
    errors: ["Abrir mucho los codos", "Arquear la espalda baja"]
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
  Dumbbell_Flyes: {
    name: "Aperturas planas con mancuernas",
    equip: "Banco plano + mancuernas",
    muscles: "Pecho",
    steps: [
      "Acostado en banco plano, mancuernas arriba con palmas mirándose.",
      "Codos ligeramente doblados y fijos.",
      "Abre en arco hasta sentir el estiramiento del pecho (no más abajo que el banco).",
      "Cierra en el mismo arco apretando el pecho."
    ],
    errors: ["Convertirlo en press", "Bajar demasiado"]
  },
  Seated_Side_Lateral_Raise: {
    name: "Elevaciones laterales sentado",
    equip: "Banco + mancuernas",
    muscles: "Hombro lateral",
    steps: [
      "Sentado en la orilla del banco, espalda recta, mancuernas a los lados.",
      "Sube los brazos hacia los lados hasta la altura de los hombros.",
      "Baja lento. Sentado no puedes hacer trampa con impulso."
    ],
    errors: ["Subir más arriba de los hombros", "Encoger los hombros"]
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
  Tricep_Dumbbell_Kickback: {
    name: "Patada de tríceps",
    equip: "Banco plano + mancuerna",
    muscles: "Tríceps",
    steps: [
      "Apoya rodilla y mano en el banco plano, espalda paralela al piso.",
      "Brazo de trabajo con el codo pegado al cuerpo a 90°.",
      "Estira el brazo hacia atrás hasta quedar recto y aprieta 1 segundo.",
      "Regresa a 90° sin mover el codo."
    ],
    errors: ["Bajar el codo", "Balancear el peso"]
  },

  // ---------------- TIRÓN ----------------
  Pullups: {
    name: "Dominadas (agarre prono)",
    equip: "Barra de la jaula",
    muscles: "Dorsales, espalda alta, bíceps",
    steps: [
      "Agarra la barra con palmas al frente, un poco más abierto que los hombros.",
      "Cuelga con brazos estirados y hombros 'activos' (lejos de las orejas).",
      "Sube llevando el pecho hacia la barra, piensa en meter los codos a los bolsillos.",
      "Baja lento hasta estirar los brazos."
    ],
    errors: ["Medias repeticiones", "Columpiarse"],
    note: "¿No te salen 6? Haz negativas: brinca arriba y baja en 4–5 segundos. O pon una liga de resistencia en la barra."
  },
  Bent_Over_Barbell_Row: {
    name: "Remo con barra",
    equip: "Jaula (barra a la altura de la rodilla)",
    muscles: "Espalda media, dorsales, bíceps",
    steps: [
      "Pon la barra en los ganchos de la jaula a la altura de las rodillas y sácala de ahí (más fácil que del piso).",
      "Rodillas un poco dobladas, inclina el torso a ~45° con la espalda recta.",
      "Jala la barra hacia el ombligo apretando la espalda.",
      "Baja controlado sin perder la postura."
    ],
    errors: ["Redondear la espalda", "Usar impulso del cuerpo", "Jalar al pecho en vez del ombligo"]
  },
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
  Straight_Arm_Dumbbell_Pullover: {
    img: "Straight-Arm_Dumbbell_Pullover",
    name: "Pullover con mancuerna",
    equip: "Banco plano + 1 mancuerna",
    muscles: "Dorsales, pecho, serratos",
    steps: [
      "Recarga la parte alta de la espalda atravesado en el banco plano, cadera abajo.",
      "Agarra una mancuerna con las dos manos encima del pecho, codos un poco doblados.",
      "Baja la mancuerna por detrás de la cabeza en arco hasta sentir el estiramiento.",
      "Regresa arriba del pecho jalando con la espalda."
    ],
    errors: ["Doblar mucho los codos", "Subir la cadera"]
  },
  Seated_Bent_Over_Rear_Delt_Raise: {
    img: "Seated_Bent-Over_Rear_Delt_Raise",
    name: "Pájaros sentado (deltoides posterior)",
    equip: "Banco + mancuernas ligeras",
    muscles: "Hombro posterior, espalda alta",
    steps: [
      "Sentado en la orilla del banco, inclina el pecho sobre los muslos.",
      "Mancuernas colgando debajo de las piernas, palmas mirándose.",
      "Abre los brazos hacia los lados como alas, codos ligeramente doblados.",
      "Baja lento."
    ],
    errors: ["Usar mucho peso", "Levantar el torso al subir"]
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
  Chin_Up: {
    img: "Chin-Up",
    name: "Dominadas supinas (chin-ups)",
    equip: "Barra de la jaula",
    muscles: "Dorsales, bíceps",
    steps: [
      "Agarra la barra con palmas hacia ti, al ancho de los hombros.",
      "Cuelga con brazos estirados.",
      "Sube hasta pasar la barbilla sobre la barra.",
      "Baja lento hasta estirar."
    ],
    errors: ["Columpiarse", "No bajar completo"],
    note: "Si no salen, haz negativas lentas (5 seg bajando)."
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
  Reverse_Flyes: {
    name: "Aperturas invertidas acostado",
    equip: "Banco inclinable + mancuernas ligeras",
    muscles: "Hombro posterior, romboides",
    steps: [
      "Acuéstate boca abajo en el banco (plano o poco inclinado).",
      "Mancuernas colgando, codos ligeramente doblados.",
      "Abre los brazos hacia los lados hasta la altura del torso.",
      "Baja lento."
    ],
    errors: ["Usar peso pesado", "Jalar con el trapecio"]
  },
  Barbell_Curl: {
    name: "Curl con barra",
    equip: "Barra de la jaula (o barra Z si hay)",
    muscles: "Bíceps",
    steps: [
      "De pie, barra con palmas al frente, ancho de hombros.",
      "Codos pegados al cuerpo y fijos.",
      "Sube la barra hasta el pecho apretando el bíceps.",
      "Baja lento hasta estirar los brazos."
    ],
    errors: ["Balancear la cadera", "Mover los codos hacia adelante"]
  },
  Standing_One_Arm_Curl_Incline_Bench: {
    img: "Standing_One-Arm_Dumbbell_Curl_Over_Incline_Bench",
    name: "Curl predicador en banco inclinado",
    equip: "Banco inclinable + 1 mancuerna",
    muscles: "Bíceps (parte baja)",
    steps: [
      "Pon el banco inclinado y párate detrás del respaldo.",
      "Apoya la parte de atrás del brazo sobre el respaldo (como predicador).",
      "Sube la mancuerna doblando el codo y aprieta.",
      "Baja lento casi hasta estirar el brazo."
    ],
    errors: ["Estirar de golpe abajo (cuida el codo)", "Levantar el brazo del respaldo"]
  },
  Cross_Body_Hammer_Curl: {
    name: "Curl martillo cruzado",
    equip: "Mancuernas",
    muscles: "Braquial, antebrazo, bíceps",
    steps: [
      "De pie, palmas mirándose.",
      "Sube la mancuerna cruzando hacia el hombro contrario.",
      "Baja lento y alterna brazos."
    ],
    errors: ["Balancear el cuerpo"]
  },

  // ---------------- PIERNA ----------------
  Barbell_Squat: {
    name: "Sentadilla con barra",
    equip: "Jaula + barra",
    muscles: "Cuádriceps, glúteos, femoral",
    steps: [
      "Pon la barra a la altura de tu pecho en la jaula y los seguros a la altura de tu sentadilla más baja.",
      "Barra sobre los trapecios (no sobre el cuello), agarre firme.",
      "Pies al ancho de hombros, puntas un poco hacia afuera.",
      "Baja como sentándote atrás, rodillas en dirección de las puntas, pecho arriba.",
      "Baja hasta que la cadera quede a la altura de las rodillas o más abajo y sube empujando el piso."
    ],
    errors: ["Rodillas hacia adentro", "Levantar talones", "Redondear la espalda abajo"],
    note: "Siempre usa los seguros de la jaula: si no puedes subir, dejas la barra ahí."
  },
  Leg_Press: {
    name: "Prensa de pierna",
    equip: "Máquina de prensa",
    muscles: "Cuádriceps, glúteos",
    steps: [
      "Espalda y glúteo pegados al respaldo.",
      "Pies al ancho de hombros en el centro de la plataforma.",
      "Quita los seguros y baja hasta que las rodillas queden a ~90°.",
      "Empuja con todo el pie sin bloquear las rodillas arriba."
    ],
    errors: ["Despegar el glúteo abajo", "Bloquear las rodillas", "Medias repeticiones con mucho peso"]
  },
  Split_Squat_with_Dumbbells: {
    name: "Sentadilla búlgara con mancuernas",
    equip: "Banco plano + mancuernas",
    muscles: "Cuádriceps, glúteos",
    steps: [
      "De espaldas al banco, pon el empeine de un pie sobre el banco.",
      "Mancuernas a los lados, pie de adelante a un paso largo del banco.",
      "Baja la rodilla de atrás hacia el piso, torso recto.",
      "Sube empujando con el talón del pie de adelante. Termina un lado y luego el otro."
    ],
    errors: ["Pie de adelante muy cerca del banco", "Rodilla hacia adentro"]
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
    name: "Curl femoral acostado",
    equip: "Máquina de curl femoral acostado",
    muscles: "Femorales (isquiotibiales)",
    steps: [
      "Acostado boca abajo, rodillas justo fuera del banco.",
      "Rodillo arriba de los talones.",
      "Dobla las piernas llevando el rodillo hacia los glúteos.",
      "Baja lento sin dejar que choquen las pesas."
    ],
    errors: ["Levantar la cadera", "Bajar rápido"]
  },
  Standing_Calf_Raises: {
    name: "Pantorrilla de pie",
    equip: "Máquina de pantorrilla de pie",
    muscles: "Pantorrillas (gemelos)",
    steps: [
      "Hombros bajo las almohadillas, puntas de los pies en la orilla del escalón.",
      "Baja los talones lo más posible (estiramiento) y aguanta 1 seg.",
      "Sube lo más alto que puedas y aprieta 1 seg."
    ],
    errors: ["Rebotar abajo", "Doblar las rodillas para ayudarte"]
  },
  Romanian_Deadlift: {
    name: "Peso muerto rumano",
    equip: "Jaula + barra (o mancuernas)",
    muscles: "Femorales, glúteos, espalda baja",
    steps: [
      "Toma la barra de los ganchos de la jaula a la altura de la cadera.",
      "Rodillas un poco dobladas y FIJAS en ese ángulo.",
      "Lleva la cadera hacia atrás bajando la barra pegada a las piernas, espalda recta.",
      "Baja hasta sentir estiramiento fuerte en el femoral (aprox. a media espinilla).",
      "Sube empujando la cadera al frente y aprieta glúteos."
    ],
    errors: ["Redondear la espalda", "Doblar mucho las rodillas (se vuelve sentadilla)", "Alejar la barra del cuerpo"]
  },
  Barbell_Hip_Thrust: {
    name: "Hip thrust con barra",
    equip: "Banco plano + barra (con almohadilla)",
    muscles: "Glúteos, femorales",
    steps: [
      "Espalda alta recargada en la orilla del banco plano, barra sobre la cadera (usa almohadilla o toalla).",
      "Pies al ancho de cadera, rodillas a 90° arriba.",
      "Empuja la cadera hacia arriba hasta que el cuerpo quede recto de hombros a rodillas.",
      "Aprieta glúteos 1 seg arriba, barbilla hacia el pecho, y baja."
    ],
    errors: ["Arquear la espalda baja arriba", "Pies muy lejos (trabaja femoral, no glúteo)"]
  },
  Seated_Leg_Curl: {
    name: "Curl femoral sentado",
    equip: "Máquina de curl femoral sentado",
    muscles: "Femorales",
    steps: [
      "Rodillas en el eje de la máquina, rodillo abajo de las pantorrillas.",
      "Baja la almohadilla de los muslos para que no te muevas.",
      "Dobla las piernas al máximo, aprieta y regresa lento."
    ],
    errors: ["Regresar rápido", "Levantar la cadera"]
  },
  Hack_Squat: {
    name: "Sentadilla hack",
    equip: "Máquina hack",
    muscles: "Cuádriceps, glúteos",
    steps: [
      "Espalda pegada al respaldo, hombros bajo las almohadillas.",
      "Pies al ancho de hombros en el centro de la plataforma.",
      "Baja hasta al menos 90° de rodilla, controlado.",
      "Sube empujando todo el pie."
    ],
    errors: ["Despegar talones", "Rodillas hacia adentro"]
  },
  Dumbbell_Lunges: {
    name: "Zancadas con mancuernas",
    equip: "Mancuernas",
    muscles: "Cuádriceps, glúteos",
    steps: [
      "De pie, mancuernas a los lados.",
      "Da un paso largo al frente y baja la rodilla de atrás casi al piso.",
      "Empuja con el pie de adelante para regresar.",
      "Alterna piernas (o camina si hay espacio)."
    ],
    errors: ["Paso muy corto", "Torso inclinado al frente"]
  },
  Seated_Calf_Raise: {
    name: "Pantorrilla sentado",
    equip: "Máquina de pantorrilla sentado",
    muscles: "Pantorrillas (sóleo)",
    steps: [
      "Sentado, almohadilla sobre los muslos, puntas en la orilla.",
      "Baja los talones al máximo y aguanta 1 seg.",
      "Sube lo más alto posible y aprieta."
    ],
    errors: ["Rebotar", "Rango corto"]
  },
  Hanging_Leg_Raise: {
    name: "Elevación de piernas colgado",
    equip: "Barra de la jaula",
    muscles: "Abdomen",
    steps: [
      "Cuelga de la barra con brazos estirados.",
      "Sube las rodillas (o piernas rectas si puedes) hacia el pecho enrollando la cadera.",
      "Baja lento sin columpiarte."
    ],
    errors: ["Columpiarse", "Solo subir las piernas sin enrollar la cadera"]
  }

};

// Rutina Alpha
const ROUTINES = [
  {
    id: "alpha",
    name: "Alpha",
    subtitle: "Push · Pull · Legs ×2 — 6 días",
    days: [
      {
        day: "Lunes", title: "Empuje A", focus: "Pecho, hombros y tríceps · énfasis pecho", time: "75–85 min",
        list: [
          { id: "Incline_Dumbbell_Press", sets: 4, reps: "8–10", rest: 120 },
          { id: "Dumbbell_Bench_Press", sets: 3, reps: "8–10", rest: 120 },
          { id: "Incline_Dumbbell_Flyes", sets: 3, reps: "12", rest: 75 },
          { id: "Seated_Dumbbell_Press", sets: 3, reps: "8–10", rest: 90 },
          { id: "Side_Lateral_Raise", sets: 4, reps: "12–15", rest: 60 },
          { id: "Lying_Dumbbell_Tricep_Extension", sets: 3, reps: "10–12", rest: 75 },
          { id: "Standing_Dumbbell_Triceps_Extension", sets: 3, reps: "12", rest: 60 }
        ]
      },
      {
        day: "Martes", title: "Tirón A", focus: "Espalda y bíceps · énfasis anchura", time: "75–85 min",
        list: [
          { id: "Pullups", sets: 4, reps: "6–10", rest: 120 },
          { id: "Bent_Over_Barbell_Row", sets: 4, reps: "8–10", rest: 120 },
          { id: "One_Arm_Dumbbell_Row", sets: 3, reps: "10 c/lado", rest: 75 },
          { id: "Straight_Arm_Dumbbell_Pullover", sets: 3, reps: "12", rest: 75 },
          { id: "Seated_Bent_Over_Rear_Delt_Raise", sets: 3, reps: "15", rest: 60 },
          { id: "Incline_Dumbbell_Curl", sets: 3, reps: "10–12", rest: 75 },
          { id: "Hammer_Curls", sets: 3, reps: "12", rest: 60 }
        ]
      },
      {
        day: "Miércoles", title: "Pierna A", focus: "Cuádriceps, femoral y pantorrilla", time: "75–85 min",
        list: [
          { id: "Barbell_Squat", sets: 4, reps: "6–8", rest: 150 },
          { id: "Leg_Press", sets: 4, reps: "10–12", rest: 120 },
          { id: "Split_Squat_with_Dumbbells", sets: 3, reps: "10 c/pierna", rest: 90 },
          { id: "Leg_Extensions", sets: 3, reps: "12–15", rest: 60 },
          { id: "Lying_Leg_Curls", sets: 3, reps: "10–12", rest: 75 },
          { id: "Standing_Calf_Raises", sets: 4, reps: "12–15", rest: 60 }
        ]
      },
      {
        day: "Jueves", title: "Empuje B", focus: "Pecho, hombros y tríceps · énfasis hombro", time: "75–85 min",
        list: [
          { id: "Arnold_Dumbbell_Press", sets: 4, reps: "8–10", rest: 120 },
          { id: "Hammer_Grip_Incline_DB_Bench_Press", sets: 4, reps: "8–10", rest: 120 },
          { id: "Dumbbell_Flyes", sets: 3, reps: "12", rest: 75 },
          { id: "Seated_Side_Lateral_Raise", sets: 4, reps: "12–15", rest: 60 },
          { id: "Close_Grip_Dumbbell_Press", sets: 3, reps: "10", rest: 90 },
          { id: "Tricep_Dumbbell_Kickback", sets: 3, reps: "12 c/brazo", rest: 60 }
        ]
      },
      {
        day: "Viernes", title: "Tirón B", focus: "Espalda y bíceps · énfasis grosor", time: "75–85 min",
        list: [
          { id: "Chin_Up", sets: 4, reps: "6–10", rest: 120 },
          { id: "Dumbbell_Incline_Row", sets: 4, reps: "10", rest: 90 },
          { id: "One_Arm_Dumbbell_Row", sets: 3, reps: "8 c/lado (pesado)", rest: 90 },
          { id: "Reverse_Flyes", sets: 3, reps: "15", rest: 60 },
          { id: "Dumbbell_Shrug", sets: 3, reps: "12–15", rest: 60 },
          { id: "Barbell_Curl", sets: 3, reps: "8–10", rest: 75 },
          { id: "Standing_One_Arm_Curl_Incline_Bench", sets: 3, reps: "10 c/brazo", rest: 60 }
        ]
      },
      {
        day: "Sábado", title: "Pierna B", focus: "Cadena posterior (femoral y glúteo) + cuádriceps", time: "75–85 min",
        list: [
          { id: "Romanian_Deadlift", sets: 4, reps: "8–10", rest: 150 },
          { id: "Barbell_Hip_Thrust", sets: 4, reps: "10", rest: 120 },
          { id: "Seated_Leg_Curl", sets: 4, reps: "10–12", rest: 75 },
          { id: "Hack_Squat", sets: 3, reps: "10", rest: 120 },
          { id: "Dumbbell_Lunges", sets: 3, reps: "10 c/pierna", rest: 75 },
          { id: "Seated_Calf_Raise", sets: 4, reps: "15", rest: 60 },
          { id: "Hanging_Leg_Raise", sets: 3, reps: "12", rest: 60 }
        ]
      },
      { day: "Domingo", title: "Descanso total", focus: "Come bien, duerme 7–9 h e hidrátate", rest: true, list: [] }
    ]
  }
];
