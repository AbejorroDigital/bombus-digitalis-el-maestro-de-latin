import { Case, Gender, DeclensionGroup, ExerciseType, Exercise } from './types';

export const DECLENSIONS_DATA: DeclensionGroup[] = [
  {
    id: 1,
    name: '1ª Declinación',
    description: 'Temas en -a. Incluye sustantivos femeninos (la mayoría) y algunos masculinos de oficio.',
    variants: [
      {
        gender: [Gender.Femenino, Gender.Masculino],
        endings: [
          { case: Case.Nominativo, singular: '-a', plural: '-ae' },
          { case: Case.Vocativo, singular: '-a', plural: '-ae' },
          { case: Case.Acusativo, singular: '-am', plural: '-as' },
          { case: Case.Genitivo, singular: '-ae', plural: '-arum' },
          { case: Case.Dativo, singular: '-ae', plural: '-is' },
          { case: Case.Ablativo, singular: '-a', plural: '-is' },
        ],
        examples: [
          { latin: 'puella, -ae', translation: 'niña' },
          { latin: 'rosa, -ae', translation: 'rosa' },
          { latin: 'agricola, -ae', translation: 'campesino (M)' },
          { latin: 'poeta, -ae', translation: 'poeta (M)' }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '2ª Declinación',
    description: 'Temas en -o. Masculinos en -us/-er (algunos pierden la -e) y Neutros en -um.',
    variants: [
      {
        gender: [Gender.Masculino],
        endings: [
          { case: Case.Nominativo, singular: '-us / -er', plural: '-i' },
          { case: Case.Vocativo, singular: '-e / -er', plural: '-i' },
          { case: Case.Acusativo, singular: '-um', plural: '-os' },
          { case: Case.Genitivo, singular: '-i', plural: '-orum' },
          { case: Case.Dativo, singular: '-o', plural: '-is' },
          { case: Case.Ablativo, singular: '-o', plural: '-is' },
        ],
        examples: [
          { latin: 'dominus, -i', translation: 'señor' },
          { latin: 'puer, pueri', translation: 'niño (mantiene -e)' },
          { latin: 'ager, agri', translation: 'campo (pierde -e)' },
          { latin: 'filius, -ii', translation: 'hijo' }
        ]
      },
      {
        gender: [Gender.Neutro],
        endings: [
          { case: Case.Nominativo, singular: '-um', plural: '-a' },
          { case: Case.Vocativo, singular: '-um', plural: '-a' },
          { case: Case.Acusativo, singular: '-um', plural: '-a' },
          { case: Case.Genitivo, singular: '-i', plural: '-orum' },
          { case: Case.Dativo, singular: '-o', plural: '-is' },
          { case: Case.Ablativo, singular: '-o', plural: '-is' },
        ],
        examples: [
          { latin: 'templum, -i', translation: 'templo' },
          { latin: 'bellum, -i', translation: 'guerra' },
          { latin: 'verbum, -i', translation: 'palabra' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: '3ª Declinación',
    description: 'Temas en Consonante y en -i. ¡Cuidado! El Genitivo Plural puede ser -um (Cons) o -ium (Tema en -i).',
    variants: [
      {
        gender: [Gender.Masculino, Gender.Femenino],
        endings: [
          { case: Case.Nominativo, singular: '(variable)', plural: '-es' },
          { case: Case.Vocativo, singular: '(variable)', plural: '-es' },
          { case: Case.Acusativo, singular: '-em', plural: '-es' },
          { case: Case.Genitivo, singular: '-is', plural: '-um / -ium' },
          { case: Case.Dativo, singular: '-i', plural: '-ibus' },
          { case: Case.Ablativo, singular: '-e', plural: '-ibus' },
        ],
        examples: [
          { latin: 'rex, regis', translation: 'rey (Cons)' },
          { latin: 'miles, militis', translation: 'soldado (Cons)' },
          { latin: 'civis, civis', translation: 'ciudadano (Tema en -i)' },
          { latin: 'urbs, urbis', translation: 'ciudad (Tema en -i)' }
        ]
      },
      {
        gender: [Gender.Neutro],
        endings: [
          { case: Case.Nominativo, singular: '(variable)', plural: '-a / -ia' },
          // Fix: Added plural property and corrected singular value for Vocative in 3rd Declension Neutro
          { case: Case.Vocativo, singular: '(variable)', plural: '-a / -ia' },
          { case: Case.Acusativo, singular: '(variable)', plural: '-a / -ia' },
          { case: Case.Genitivo, singular: '-is', plural: '-um / -ium' },
          { case: Case.Dativo, singular: '-i', plural: '-ibus' },
          { case: Case.Ablativo, singular: '-e / -i', plural: '-ibus' },
        ],
        examples: [
          { latin: 'corpus, corporis', translation: 'cuerpo (Cons: pl. -a)' },
          { latin: 'nomen, nominis', translation: 'nombre (Cons: pl. -a)' },
          { latin: 'mare, maris', translation: 'mar (Tema en -i: pl. -ia, abl. -i)' }
        ]
      }
    ]
  },
  {
    id: 4,
    name: '4ª Declinación',
    description: 'Temas en -u. Mayoritariamente masculinos, algunos neutros. Ojo con "Manus" (Femenino).',
    variants: [
      {
        gender: [Gender.Masculino, Gender.Femenino],
        endings: [
          { case: Case.Nominativo, singular: '-us', plural: '-us' },
          { case: Case.Vocativo, singular: '-us', plural: '-us' },
          { case: Case.Acusativo, singular: '-um', plural: '-us' },
          { case: Case.Genitivo, singular: '-us', plural: '-uum' },
          { case: Case.Dativo, singular: '-ui', plural: '-ibus' },
          { case: Case.Ablativo, singular: '-u', plural: '-ibus' },
        ],
        examples: [
          { latin: 'manus, -us', translation: 'mano (F)' },
          { latin: 'senatus, -us', translation: 'senado (M)' },
          { latin: 'exercitus, -us', translation: 'ejército (M)' }
        ]
      },
      {
        gender: [Gender.Neutro],
        endings: [
          { case: Case.Nominativo, singular: '-u', plural: '-ua' },
          { case: Case.Vocativo, singular: '-u', plural: '-ua' },
          { case: Case.Acusativo, singular: '-u', plural: '-ua' },
          { case: Case.Genitivo, singular: '-us', plural: '-uum' },
          { case: Case.Dativo, singular: '-u / -ui', plural: '-ibus' },
          { case: Case.Ablativo, singular: '-u', plural: '-ibus' },
        ],
        examples: [
          { latin: 'genu, -us', translation: 'rodilla' },
          { latin: 'cornu, -us', translation: 'cuerno/ala' }
        ]
      }
    ]
  },
  {
    id: 5,
    name: '5ª Declinación',
    description: 'Temas en -e. Casi todos femeninos (excepto Dies y Meridies).',
    variants: [
      {
        gender: [Gender.Femenino, Gender.Masculino],
        endings: [
          { case: Case.Nominativo, singular: '-es', plural: '-es' },
          { case: Case.Vocativo, singular: '-es', plural: '-es' },
          { case: Case.Acusativo, singular: '-em', plural: '-es' },
          { case: Case.Genitivo, singular: '-ei', plural: '-erum' },
          { case: Case.Dativo, singular: '-ei', plural: '-ebus' },
          { case: Case.Ablativo, singular: '-e', plural: '-ebus' },
        ],
        examples: [
          { latin: 'res, rei', translation: 'cosa / asunto (F)' },
          { latin: 'dies, diei', translation: 'día (M)' },
          { latin: 'fides, fidei', translation: 'fe / lealtad (F)' },
          { latin: 'spes, spei', translation: 'esperanza (F)' }
        ]
      }
    ]
  }
];

export const EXERCISES_DATA: Exercise[] = [
  // --- Ejercicios Originales ---
  {
    id: '1',
    type: ExerciseType.Identification,
    question: '¿Cuál es el caso y número de "puellam"?',
    latinWord: 'puellam',
    options: ['Acusativo Singular', 'Genitivo Singular', 'Nominativo Plural', 'Ablativo Singular'],
    correctAnswer: 'Acusativo Singular',
    explanation: 'La terminación -am es característica del Acusativo Singular de la primera declinación.',
    declensionTarget: 1,
    difficulty: 'Basic'
  },
  {
    id: '2',
    type: ExerciseType.Production,
    question: 'Declina "dominus" (señor) en Dativo Plural:',
    latinWord: 'dominus',
    correctAnswer: 'dominis',
    explanation: 'En la segunda declinación masculina, el Dativo Plural termina en -is.',
    declensionTarget: 2,
    caseTarget: Case.Dativo,
    difficulty: 'Intermediate'
  },
  {
    id: '3',
    type: ExerciseType.Contextual,
    question: 'Completa: "Rosae in ______ sunt" (Las rosas están en el jardín). Jardín = hortus, -i (2ª decl).',
    context: 'Rosae in ______ sunt.',
    options: ['horto', 'hortum', 'horte', 'horti'],
    correctAnswer: 'horto',
    explanation: 'La preposición "in" con sentido de ubicación ("en") rige caso Ablativo. El ablativo singular de hortus es horto.',
    declensionTarget: 2,
    difficulty: 'Advanced'
  },
  {
    id: '4',
    type: ExerciseType.Production,
    question: 'Declina "manus" (mano) en Genitivo Plural:',
    latinWord: 'manus',
    correctAnswer: 'manuum',
    explanation: 'En la cuarta declinación, el Genitivo Plural termina en -uum.',
    declensionTarget: 4,
    caseTarget: Case.Genitivo,
    difficulty: 'Intermediate'
  },
  {
    id: '5',
    type: ExerciseType.Identification,
    question: '¿A qué declinación pertenece "res, rei"?',
    latinWord: 'res, rei',
    options: ['1ª Declinación', '2ª Declinación', '5ª Declinación', '3ª Declinación'],
    correctAnswer: '5ª Declinación',
    explanation: 'El genitivo singular en -ei es la marca distintiva de la quinta declinación.',
    declensionTarget: 5,
    difficulty: 'Basic'
  },

  // --- EJERCICIOS 1ª DECLINACIÓN ---
  {
    id: 'new_1',
    type: ExerciseType.Identification,
    question: '¿Cuál es el género gramatical de "Agricola" (Campesino)?',
    latinWord: 'agricola',
    options: ['Femenino', 'Masculino', 'Neutro'],
    correctAnswer: 'Masculino',
    explanation: 'Aunque "agricola" pertenece a la primera declinación (que es mayoritariamente femenina), al referirse a un oficio tradicionalmente masculino en Roma, es de género Masculino.',
    declensionTarget: 1,
    difficulty: 'Basic'
  },
  {
    id: 'new_2',
    type: ExerciseType.Contextual,
    question: 'Completa: "Nauta ______ amat" (El marinero ama el agua). Agua = Aqua, -ae.',
    context: 'Nauta ______ amat.',
    options: ['aqua', 'aquae', 'aquam', 'aquas'],
    correctAnswer: 'aquam',
    explanation: 'El verbo "amat" es transitivo y requiere un Objeto Directo. En la primera declinación, el Acusativo Singular termina en -am.',
    declensionTarget: 1,
    difficulty: 'Intermediate'
  },
  {
    id: 'new_3',
    type: ExerciseType.Production,
    question: 'Declina "Domina" (Señora) en Genitivo Plural:',
    latinWord: 'domina',
    correctAnswer: 'dominarum',
    explanation: 'El Genitivo Plural de la primera declinación se forma con la terminación -arum.',
    declensionTarget: 1,
    caseTarget: Case.Genitivo,
    difficulty: 'Intermediate'
  },
  {
    id: 'new_4',
    type: ExerciseType.Contextual,
    question: 'Completa: "Amicae in ______ ambulant" (Las amigas caminan en la vía/calle). Vía = Via, -ae.',
    context: 'Amicae in ______ ambulant.',
    options: ['viam', 'viae', 'via', 'vias'],
    correctAnswer: 'via',
    explanation: 'La preposición "in" indicando lugar ("en dónde") rige caso Ablativo. El Ablativo Singular de la 1ª es -a (larga).',
    declensionTarget: 1,
    difficulty: 'Advanced'
  },
  {
    id: 'new_5',
    type: ExerciseType.Contextual,
    question: 'Completa: "Poeta ______ regnat" (El poeta reina con/por su sabiduría). Sabiduría = Sapientia, -ae.',
    context: 'Poeta ______ regnat.',
    options: ['sapientiam', 'sapientia', 'sapientiae', 'sapientias'],
    correctAnswer: 'sapientia',
    explanation: 'El ablativo sin preposición se usa frecuentemente para indicar el instrumento o medio ("con sabiduría"). La terminación es -a.',
    declensionTarget: 1,
    difficulty: 'Advanced'
  },
  {
    id: 'new_6',
    type: ExerciseType.Identification,
    question: '¿Qué significa la palabra "Copiae" (Plural)?',
    latinWord: 'copiae',
    options: ['Abundancias', 'Tropas', 'Copias', 'Comidas'],
    correctAnswer: 'Tropas',
    explanation: 'Aunque "Copia" en singular significa "Abundancia", en plural ("Copiae") adquiere el significado militar de "Tropas" o "Fuerzas militares".',
    declensionTarget: 1,
    difficulty: 'Intermediate'
  },
  {
    id: 'new_7',
    type: ExerciseType.Production,
    question: 'Declina "Amica" (Amiga) en Genitivo Plural:',
    latinWord: 'amica',
    correctAnswer: 'amicarum',
    explanation: 'El genitivo plural de la primera declinación siempre termina en -arum.',
    declensionTarget: 1,
    caseTarget: Case.Genitivo,
    difficulty: 'Basic'
  },
  {
    id: 'new_8',
    type: ExerciseType.Contextual,
    question: 'Completa: "Pirata ______ magnam habet" (El pirata tiene gran audacia). Audacia = Audacia, -ae.',
    context: 'Pirata ______ magnam habet.',
    options: ['audacia', 'audaciae', 'audaciam', 'audacias'],
    correctAnswer: 'audaciam',
    explanation: 'El verbo "habet" (tiene) rige Acusativo (Objeto Directo). La terminación es -am.',
    declensionTarget: 1,
    difficulty: 'Basic'
  },
  {
    id: 'new_9',
    type: ExerciseType.Contextual,
    question: 'Completa: "Puer ______ rosam dat" (El niño da una rosa a la niña). Niña = Puella, -ae.',
    context: 'Puer ______ rosam dat.',
    options: ['puellae', 'puella', 'puellam', 'puellas'],
    correctAnswer: 'puellae',
    explanation: 'El Objeto Indirecto (a quién se da) va en Dativo. El Dativo Singular de la 1ª es -ae.',
    declensionTarget: 1,
    difficulty: 'Intermediate'
  },
  {
    id: 'new_10',
    type: ExerciseType.Contextual,
    question: 'Completa: "Corona ______ est aurea" (La corona de la reina es dorada). Reina = Regina, -ae.',
    context: 'Corona ______ est aurea.',
    options: ['reginae', 'regina', 'reginam', 'reginarum'],
    correctAnswer: 'reginae',
    explanation: 'El complemento del nombre ("de la reina") se expresa en Genitivo Singular (-ae).',
    declensionTarget: 1,
    difficulty: 'Basic'
  },
  {
    id: 'new_11',
    type: ExerciseType.Identification,
    question: '¿Cuál es el género de "Poeta"?',
    latinWord: 'poeta',
    options: ['Masculino', 'Femenino', 'Neutro'],
    correctAnswer: 'Masculino',
    explanation: 'Al igual que Nauta y Agricola, Poeta es un sustantivo masculino de la 1ª declinación por referirse a un oficio tradicionalmente masculino.',
    declensionTarget: 1,
    difficulty: 'Basic'
  },
  {
    id: 'new_12',
    type: ExerciseType.Contextual,
    question: 'Completa: "Milites ______ timent" (Los soldados temen la batalla). Batalla = Pugna, -ae.',
    context: 'Milites ______ timent.',
    options: ['pugnam', 'pugna', 'pugnae', 'pugnas'],
    correctAnswer: 'pugnam',
    explanation: 'El objeto del miedo va en Acusativo Singular (-am).',
    declensionTarget: 1,
    difficulty: 'Intermediate'
  },
  {
    id: 'new_13',
    type: ExerciseType.Identification,
    question: 'Distingue el significado: "Littera" vs "Litterae".',
    latinWord: 'litterae',
    options: ['Letra vs Carta/Literatura', 'Carta vs Letras', 'Basura vs Cartas', 'Literal vs Literario'],
    correctAnswer: 'Letra vs Carta/Literatura',
    explanation: 'En singular, "Littera" es una letra del alfabeto. En plural, "Litterae" significa carta (epístola) o literatura.',
    declensionTarget: 1,
    difficulty: 'Advanced'
  },
  {
    id: 'new_14',
    type: ExerciseType.Contextual,
    question: 'Completa: "Bestiae in ______ habitant" (Las bestias habitan en la selva). Selva = Silva, -ae.',
    context: 'Bestiae in ______ habitant.',
    options: ['silva', 'silvam', 'silvae', 'silvas'],
    correctAnswer: 'silva',
    explanation: 'Ubicación con "in" rige Ablativo. Ablativo singular de la 1ª declinación es -a.',
    declensionTarget: 1,
    difficulty: 'Basic'
  },
  {
    id: 'new_15',
    type: ExerciseType.Production,
    question: 'Declina "Filia" (Hija) en Acusativo Plural:',
    latinWord: 'filia',
    correctAnswer: 'filias',
    explanation: 'El acusativo plural de la primera declinación termina en -as.',
    declensionTarget: 1,
    caseTarget: Case.Acusativo,
    difficulty: 'Basic'
  },
  {
    id: 'new_16',
    type: ExerciseType.Contextual,
    question: 'Completa: "Miles ______ tenet" (El soldado sostiene la lanza). Lanza = Hasta, -ae.',
    context: 'Miles ______ tenet.',
    options: ['hastam', 'hasta', 'hastae', 'hastas'],
    correctAnswer: 'hastam',
    explanation: 'Objeto Directo Singular (-am).',
    declensionTarget: 1,
    difficulty: 'Basic'
  },
  {
    id: 'new_17',
    type: ExerciseType.Contextual,
    question: 'Completa: "Agricola in ______ laborat" (El campesino trabaja en la tierra). Tierra = Terra, -ae.',
    context: 'Agricola in ______ laborat.',
    options: ['terra', 'terram', 'terrae', 'terras'],
    correctAnswer: 'terra',
    explanation: 'Ablativo singular regido por la preposición "in" (lugar).',
    declensionTarget: 1,
    difficulty: 'Basic'
  },
  {
    id: 'new_18',
    type: ExerciseType.Contextual,
    question: 'Completa: "Naves in ______ sunt" (Las naves están en las olas/aguas). Ola = Unda, -ae.',
    context: 'Naves in ______ sunt.',
    options: ['undis', 'undae', 'undam', 'unda'],
    correctAnswer: 'undis',
    explanation: 'Ablativo Plural (en las olas). La terminación de Ablativo Plural es -is.',
    declensionTarget: 1,
    difficulty: 'Advanced'
  },
  {
    id: 'new_19',
    type: ExerciseType.Production,
    question: 'Declina "Dextera" (Mano derecha) en Ablativo Singular:',
    latinWord: 'dextera',
    correctAnswer: 'dextera',
    explanation: 'El ablativo singular termina en -a (larga).',
    declensionTarget: 1,
    caseTarget: Case.Ablativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'new_20',
    type: ExerciseType.Contextual,
    question: 'Completa: "Vir ______ barbam habet" (El hombre tiene una larga barba). Barba = Barba, -ae.',
    context: 'Vir ______ longam habet.',
    options: ['barbam', 'barba', 'barbae', 'barbas'],
    correctAnswer: 'barbam',
    explanation: 'Objeto Directo Singular (-am).',
    declensionTarget: 1,
    difficulty: 'Basic'
  },

  // --- EJERCICIOS 2ª DECLINACIÓN ---
  {
    id: 'decl2_1',
    type: ExerciseType.Production,
    question: '¿Cómo saludas a un amigo? Vocativo Singular de "Amicus":',
    latinWord: 'amicus',
    correctAnswer: 'amice',
    explanation: 'En la 2ª declinación, los sustantivos terminados en -us forman el vocativo singular en -e.',
    declensionTarget: 2,
    caseTarget: Case.Vocativo,
    difficulty: 'Basic'
  },
  {
    id: 'decl2_2',
    type: ExerciseType.Production,
    question: 'Declina "Filius" (Hijo) en Vocativo Singular:',
    latinWord: 'filius',
    correctAnswer: 'fili',
    explanation: 'Los sustantivos de la 2ª declinación terminados en -ius forman el vocativo singular en -i, no en -ie.',
    declensionTarget: 2,
    caseTarget: Case.Vocativo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl2_3',
    type: ExerciseType.Identification,
    question: '¿Cuál es el Acusativo Singular de "Bellum" (Guerra)?',
    latinWord: 'bellum',
    options: ['Bellus', 'Belli', 'Bellum', 'Bello'],
    correctAnswer: 'Bellum',
    explanation: 'En el género neutro, el Nominativo, Vocativo y Acusativo son siempre iguales. Por tanto, el acusativo es "Bellum".',
    declensionTarget: 2,
    difficulty: 'Basic'
  },
  {
    id: 'decl2_4',
    type: ExerciseType.Production,
    question: 'Escribe el Nominativo Plural de "Templum" (Templo):',
    latinWord: 'templum',
    correctAnswer: 'templa',
    explanation: 'El plural de los neutros (Nominativo, Vocativo y Acusativo) siempre termina en -a.',
    declensionTarget: 2,
    caseTarget: Case.Nominativo,
    difficulty: 'Basic'
  },
  {
    id: 'decl2_5',
    type: ExerciseType.Production,
    question: 'Declina "Ager" (Campo) en Genitivo Singular:',
    latinWord: 'ager',
    correctAnswer: 'agri',
    explanation: 'Muchos sustantivos en -er de la 2ª declinación pierden la "e" en el resto de la declinación (Ager -> Agri).',
    declensionTarget: 2,
    caseTarget: Case.Genitivo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl2_6',
    type: ExerciseType.Production,
    question: 'Declina "Puer" (Niño) en Genitivo Singular:',
    latinWord: 'puer',
    correctAnswer: 'pueri',
    explanation: '"Puer" es una de las excepciones que conserva la "e" en toda la declinación (Puer -> Pueri).',
    declensionTarget: 2,
    caseTarget: Case.Genitivo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl2_7',
    type: ExerciseType.Contextual,
    question: 'Completa: "Discipulus ______ librum dat" (El alumno da el libro al maestro). Maestro = Magister, -tri.',
    context: 'Discipulus ______ librum dat.',
    options: ['magistrum', 'magistro', 'magistri', 'magister'],
    correctAnswer: 'magistro',
    explanation: 'El objeto indirecto (a quién se da) va en Dativo. "Magister" pierde la e, formando "Magistro".',
    declensionTarget: 2,
    difficulty: 'Advanced'
  },
  {
    id: 'decl2_8',
    type: ExerciseType.Contextual,
    question: 'Completa: "Oculi ______ sunt rubri" (Los ojos del lobo son rojos). Lobo = Lupus, -i.',
    context: 'Oculi ______ sunt rubri.',
    options: ['lupis', 'lupos', 'lupus', 'lupi'],
    correctAnswer: 'lupi',
    explanation: 'El complemento del nombre ("del lobo") se expresa en Genitivo Singular. La terminación es -i.',
    declensionTarget: 2,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl2_9',
    type: ExerciseType.Contextual,
    question: 'Completa: "Milites ______ pugnant" (Los soldados luchan con espadas). Espada = Gladius, -i.',
    context: 'Milites ______ pugnant.',
    options: ['gladios', 'gladii', 'gladiis', 'gladium'],
    correctAnswer: 'gladiis',
    explanation: 'El instrumento ("con espadas") se expresa en Ablativo (aquí plural). La terminación de Ablativo Plural es -is.',
    declensionTarget: 2,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl2_10',
    type: ExerciseType.Identification,
    question: '¿Cuál es el género de "Humus" (Suelo/Tierra)?',
    latinWord: 'humus',
    options: ['Masculino', 'Femenino', 'Neutro'],
    correctAnswer: 'Femenino',
    explanation: '"Humus" es una excepción notable en la 2ª declinación: termina en -us pero es de género Femenino (como los nombres de árboles y ciudades).',
    declensionTarget: 2,
    difficulty: 'Advanced'
  },
  {
    id: 'decl2_11',
    type: ExerciseType.Identification,
    question: 'Analiza la palabra "Castra" (Campamento):',
    latinWord: 'castra',
    options: ['Nominativo Singular Femenino', 'Nominativo Plural Neutro', 'Acusativo Plural Femenino', 'Ablativo Singular'],
    correctAnswer: 'Nominativo Plural Neutro',
    explanation: '"Castra" es un "Plurale Tantum" (solo tiene plural) y es Neutro. Aunque se traduce como "Campamento" (singular), gramaticalmente es plural.',
    declensionTarget: 2,
    difficulty: 'Advanced'
  },
  {
    id: 'decl2_12',
    type: ExerciseType.Contextual,
    question: 'Completa: "Agricola ______ videt" (El campesino ve el caballo). Caballo = Equus, -i.',
    context: 'Agricola ______ videt.',
    options: ['equus', 'equi', 'equum', 'equo'],
    correctAnswer: 'equum',
    explanation: 'Objeto Directo singular de la 2ª declinación: terminación -um.',
    declensionTarget: 2,
    difficulty: 'Basic'
  },
  {
    id: 'decl2_13',
    type: ExerciseType.Contextual,
    question: 'Completa: "Femina ______ amat" (La mujer ama el oro). Oro = Aurum, -i.',
    context: 'Femina ______ amat.',
    options: ['aurum', 'auri', 'auro', 'auras'],
    correctAnswer: 'aurum',
    explanation: 'Al ser neutro, el Acusativo es igual al Nominativo: "Aurum".',
    declensionTarget: 2,
    difficulty: 'Intermediate'
  },
  // Nuevos 2ª Declinación (Expansion)
  {
    id: 'decl2_new_1',
    type: ExerciseType.Production,
    question: 'Declina "Vir" (Hombre/Varón) en Genitivo Plural:',
    latinWord: 'vir',
    correctAnswer: 'virorum',
    explanation: 'Aunque "Vir" termina en -ir, sigue las desinencias de la 2ª declinación. Genitivo Plural: -orum.',
    declensionTarget: 2,
    caseTarget: Case.Genitivo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl2_new_2',
    type: ExerciseType.Production,
    question: 'Declina "Socer" (Suegro) en Genitivo Singular:',
    latinWord: 'socer',
    correctAnswer: 'soceri',
    explanation: '"Socer" es uno de los sustantivos en -er que MANTIENE la "e" en su declinación (como Puer). Socer -> Soceri.',
    declensionTarget: 2,
    caseTarget: Case.Genitivo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl2_new_3',
    type: ExerciseType.Production,
    question: 'Declina "Faber" (Artesano) en Genitivo Singular:',
    latinWord: 'faber',
    correctAnswer: 'fabri',
    explanation: '"Faber" es un sustantivo en -er que PIERDE la "e" (como Ager). Faber -> Fabri.',
    declensionTarget: 2,
    caseTarget: Case.Genitivo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl2_new_4',
    type: ExerciseType.Contextual,
    question: 'Completa: "Miles ______ portat" (El soldado lleva el escudo). Escudo = Scutum, -i.',
    context: 'Miles ______ portat.',
    options: ['scutum', 'scuti', 'scuto', 'scuta'],
    correctAnswer: 'scutum',
    explanation: 'Objeto Directo (Acusativo). Al ser neutro, el Acusativo es igual al Nominativo: "Scutum".',
    declensionTarget: 2,
    difficulty: 'Basic'
  },
  {
    id: 'decl2_new_5',
    type: ExerciseType.Identification,
    question: 'Analiza "Astra" (Astros/Estrellas):',
    latinWord: 'astra',
    options: ['Nominativo Singular Femenino', 'Nominativo Plural Neutro', 'Ablativo Singular', 'Genitivo Singular'],
    correctAnswer: 'Nominativo Plural Neutro',
    explanation: '"Astrum" es neutro. Su plural (Nominativo, Vocativo, Acusativo) termina en -a: "Astra".',
    declensionTarget: 2,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl2_new_6',
    type: ExerciseType.Contextual,
    question: 'Completa: "Facta, non ______" (Hechos, no palabras). Palabra = Verbum, -i.',
    context: 'Facta, non ______.',
    options: ['verba', 'verbum', 'verbi', 'verbis'],
    correctAnswer: 'verba',
    explanation: 'Se requiere el plural (Palabras) en contraposición a "Facta" (Hechos, también plural neutro). Nominativo Plural Neutro: "Verba".',
    declensionTarget: 2,
    difficulty: 'Basic'
  },
  {
    id: 'decl2_new_7',
    type: ExerciseType.Contextual,
    question: 'Completa: "Legatus ______ mittit" (El legado envía un mensajero). Mensajero = Nuntius, -i.',
    context: 'Legatus ______ mittit.',
    options: ['nuntium', 'nuntius', 'nuntii', 'nuntio'],
    correctAnswer: 'nuntium',
    explanation: 'Objeto Directo (Acusativo Singular). Terminación -um.',
    declensionTarget: 2,
    difficulty: 'Basic'
  },
  {
    id: 'decl2_new_8',
    type: ExerciseType.Identification,
    question: '¿Cuál es el género de "Vulgus" (Vulgo/Gente)?',
    latinWord: 'vulgus',
    options: ['Masculino', 'Femenino', 'Neutro'],
    correctAnswer: 'Neutro',
    explanation: '"Vulgus" es una excepción: un sustantivo neutro terminado en -us en la 2ª declinación (aunque a veces se usa como masculino).',
    declensionTarget: 2,
    difficulty: 'Advanced'
  },
  {
    id: 'decl2_new_9',
    type: ExerciseType.Production,
    question: 'Declina "Gener" (Yerno) en Dativo Singular:',
    latinWord: 'gener',
    correctAnswer: 'genero',
    explanation: '"Gener" mantiene la "e" (Gener -> Generi). Dativo Singular termina en -o: "Genero".',
    declensionTarget: 2,
    caseTarget: Case.Dativo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl2_new_10',
    type: ExerciseType.Contextual,
    question: 'Completa: "In ______ ambulamus" (Caminamos en el jardín). Jardín = Hortus, -i.',
    context: 'In ______ ambulamus.',
    options: ['horto', 'hortum', 'horti', 'hortus'],
    correctAnswer: 'horto',
    explanation: 'Ubicación con "in" rige Ablativo. Terminación -o.',
    declensionTarget: 2,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl2_new_11',
    type: ExerciseType.Contextual,
    question: 'Completa: "Pueri in ______ ludunt" (Los niños juegan en la escuela/juego). Escuela = Ludus, -i.',
    context: 'Pueri in ______ ludunt.',
    options: ['ludo', 'ludum', 'ludi', 'ludis'],
    correctAnswer: 'ludo',
    explanation: 'Ablativo Singular (Ubicación). Terminación -o.',
    declensionTarget: 2,
    difficulty: 'Basic'
  },
  {
    id: 'decl2_new_12',
    type: ExerciseType.Contextual,
    question: 'Completa: "Dux ______ petit" (El líder pide auxilio). Auxilio = Auxilium, -ii.',
    context: 'Dux ______ petit.',
    options: ['auxilium', 'auxilii', 'auxilio', 'auxilia'],
    correctAnswer: 'auxilium',
    explanation: 'Objeto Directo (Acusativo). Al ser neutro, es igual al Nominativo.',
    declensionTarget: 2,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl2_new_13',
    type: ExerciseType.Production,
    question: 'Declina "Vesper" (Tarde) en Ablativo Singular:',
    latinWord: 'vesper',
    correctAnswer: 'vespero',
    explanation: 'Ablativo Singular de la 2ª declinación es -o. Vesper mantiene la e.',
    declensionTarget: 2,
    caseTarget: Case.Ablativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl2_new_14',
    type: ExerciseType.Contextual,
    question: 'Completa: "Folia in ______ sunt" (Las hojas están en el suelo). Suelo = Humus, -i.',
    context: 'Folia in ______ sunt.',
    options: ['humo', 'humum', 'humi', 'humus'],
    correctAnswer: 'humo',
    explanation: 'Ablativo Singular (Lugar). Aunque "Humus" es femenino, sus terminaciones son de la 2ª declinación (-o).',
    declensionTarget: 2,
    difficulty: 'Advanced'
  },
  {
    id: 'decl2_new_15',
    type: ExerciseType.Contextual,
    question: 'Completa: "Romani ______ colunt" (Los romanos cultivan el campo). Campo = Ager, agri.',
    context: 'Romani ______ colunt.',
    options: ['agrum', 'ager', 'agri', 'agro'],
    correctAnswer: 'agrum',
    explanation: 'Objeto Directo. "Ager" pierde la "e" -> raíz "agr-". Acusativo: "Agrum".',
    declensionTarget: 2,
    difficulty: 'Intermediate'
  },

  // --- EJERCICIOS 3ª DECLINACIÓN ---
  {
    id: 'decl3_1',
    type: ExerciseType.Contextual,
    question: 'Completa: "Dux ______ dat" (El líder da la ley). Ley = Lex, legis.',
    context: 'Dux ______ dat.',
    options: ['lex', 'legem', 'legis', 'leges'],
    correctAnswer: 'legem',
    explanation: 'Objeto Directo singular. Al ser la raíz "leg-" (de legis), el Acusativo es "leg-em".',
    declensionTarget: 3,
    difficulty: 'Basic'
  },
  {
    id: 'decl3_2',
    type: ExerciseType.Production,
    question: 'Declina "Corpus" (Cuerpo) en Nominativo Plural:',
    latinWord: 'corpus',
    correctAnswer: 'corpora',
    explanation: 'Los neutros de la 3ª con tema en consonante cambian la raíz (corpus -> corpor-) y hacen el plural en -a: "Corpora".',
    declensionTarget: 3,
    caseTarget: Case.Nominativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_3',
    type: ExerciseType.Production,
    question: 'Declina "Urbs" (Ciudad) en Genitivo Plural:',
    latinWord: 'urbs',
    correctAnswer: 'urbium',
    explanation: '"Urbs, urbis" es un tema en -i (falso imparisílabo: dos consonantes antes de la -is). Su Genitivo Plural es -ium, no -um.',
    declensionTarget: 3,
    caseTarget: Case.Genitivo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_4',
    type: ExerciseType.Identification,
    question: '¿Cuál es el Genitivo Plural de "Rex" (Rey)?',
    latinWord: 'rex',
    options: ['Rexum', 'Regium', 'Regum', 'Rexium'],
    correctAnswer: 'Regum',
    explanation: '"Rex, regis" es tema en consonante pura. Su Genitivo Plural es -um ("Regum"), a diferencia de los temas en -i.',
    declensionTarget: 3,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_5',
    type: ExerciseType.Contextual,
    question: 'Completa: "Naves in ______ sunt" (Las naves están en el mar). Mar = Mare, maris.',
    context: 'Naves in ______ sunt.',
    options: ['mare', 'mari', 'maris', 'maria'],
    correctAnswer: 'mari',
    explanation: 'Los neutros terminados en -e, -al, -ar son temas en -i puros. Su Ablativo Singular es -i (no -e). Por eso es "in mari".',
    declensionTarget: 3,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_6',
    type: ExerciseType.Production,
    question: 'Declina "Miles" (Soldado) en Acusativo Plural:',
    latinWord: 'miles',
    correctAnswer: 'milites',
    explanation: 'La raíz es "milit-". El Acusativo Plural M/F siempre es -es. "Milites".',
    declensionTarget: 3,
    caseTarget: Case.Acusativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_7',
    type: ExerciseType.Identification,
    question: '¿Cuál es el género de "Arbor, arboris" (Árbol)?',
    latinWord: 'arbor',
    options: ['Masculino', 'Femenino', 'Neutro'],
    correctAnswer: 'Femenino',
    explanation: 'Aunque termina en -or (usualmente masculino como "dolor"), "Arbor" es Femenino, siguiendo la regla de que los árboles suelen ser femeninos.',
    declensionTarget: 3,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_8',
    type: ExerciseType.Production,
    question: 'Declina "Vis" (Fuerza/Violencia) en Acusativo Singular:',
    latinWord: 'vis',
    correctAnswer: 'vim',
    explanation: '"Vis" es muy irregular en singular: Nom: vis, Ac: vim, Abl: vi.',
    declensionTarget: 3,
    caseTarget: Case.Acusativo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_9',
    type: ExerciseType.Production,
    question: 'Declina "Nomen" (Nombre) en Dativo Singular:',
    latinWord: 'nomen',
    correctAnswer: 'nomini',
    explanation: 'La raíz de "nomen" cambia a "nomin-" en los casos oblicuos. Dativo Singular: raíz + i = "Nomini".',
    declensionTarget: 3,
    caseTarget: Case.Dativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_10',
    type: ExerciseType.Contextual,
    question: 'Completa: "Vox ______ est severa" (La voz del padre es severa). Padre = Pater, patris.',
    context: 'Vox ______ est severa.',
    options: ['pater', 'patri', 'patris', 'patrum'],
    correctAnswer: 'patris',
    explanation: 'Genitivo Singular de "Pater" es "Patris" (pierde la e de la raíz en los casos oblicuos).',
    declensionTarget: 3,
    difficulty: 'Basic'
  },
  {
    id: 'decl3_11',
    type: ExerciseType.Contextual,
    question: 'Completa: "Miles ______ servit" (El soldado sirve a la ciudad/estado). Ciudad = Civitas, civitatis.',
    context: 'Miles ______ servit.',
    options: ['civitatem', 'civitatis', 'civitati', 'civitate'],
    correctAnswer: 'civitati',
    explanation: 'El verbo servir puede regir Dativo. La raíz es "civitat-". Dativo Singular: "Civitati".',
    declensionTarget: 3,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_12',
    type: ExerciseType.Identification,
    question: '¿Cuál es el Genitivo Singular de "Iter" (Camino/Viaje)?',
    latinWord: 'iter',
    options: ['Iteris', 'Itineris', 'Iteri', 'Itinis'],
    correctAnswer: 'Itineris',
    explanation: '"Iter" es un sustantivo neutro muy irregular. Su raíz cambia drásticamente a "Itiner-".',
    declensionTarget: 3,
    difficulty: 'Advanced'
  },
  // Nuevos 3ª Declinación (Expansion)
  {
    id: 'decl3_new_1',
    type: ExerciseType.Contextual,
    question: 'Completa: "Dura ______, sed lex" (La ley es dura, pero es la ley). Ley = Lex, legis.',
    context: 'Dura ______, sed lex.',
    options: ['legem', 'legis', 'lex', 'lege'],
    correctAnswer: 'lex',
    explanation: 'Sujeto de la oración (Nominativo Singular). "Lex".',
    declensionTarget: 3,
    difficulty: 'Basic'
  },
  {
    id: 'decl3_new_2',
    type: ExerciseType.Production,
    question: 'Declina "Amor" (Amor) en Ablativo Singular:',
    latinWord: 'amor',
    correctAnswer: 'amore',
    explanation: 'La terminación del Ablativo Singular en la 3ª declinación (temas en consonante) es -e.',
    declensionTarget: 3,
    caseTarget: Case.Ablativo,
    difficulty: 'Basic'
  },
  {
    id: 'decl3_new_3',
    type: ExerciseType.Identification,
    question: 'Analiza la palabra "Tempus" (Tiempo) en "Tempus fugit":',
    latinWord: 'tempus',
    options: ['Masculino Nominativo', 'Neutro Nominativo/Acusativo', 'Masculino Acusativo', 'Neutro Genitivo'],
    correctAnswer: 'Neutro Nominativo/Acusativo',
    explanation: 'Tempus, temporis es Neutro. En la frase "Tempus fugit", actúa como sujeto (Nominativo).',
    declensionTarget: 3,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_new_4',
    type: ExerciseType.Contextual,
    question: 'Completa: "Multitudo ______ clamat" (La multitud de hombres grita). Hombre = Homo, hominis.',
    context: 'Multitudo ______ clamat.',
    options: ['hominum', 'hominis', 'homines', 'hominibus'],
    correctAnswer: 'hominum',
    explanation: 'Genitivo Plural. Al ser tema en consonante ("homin-"), la terminación es -um.',
    declensionTarget: 3,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_new_5',
    type: ExerciseType.Production,
    question: 'Declina "Civis" (Ciudadano) en Genitivo Plural:',
    latinWord: 'civis',
    correctAnswer: 'civium',
    explanation: 'Civis, civis es un tema en -i (parasilábico). Su Genitivo Plural es -ium.',
    declensionTarget: 3,
    caseTarget: Case.Genitivo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_new_6',
    type: ExerciseType.Contextual,
    question: 'Completa: "Magna ______ in silva sunt" (Grandes animales hay en el bosque). Animal = Animal, animalis.',
    context: 'Magna ______ in silva sunt.',
    options: ['animalia', 'animales', 'animal', 'animali'],
    correctAnswer: 'animalia',
    explanation: 'Sujeto Plural Neutro (Tema en -i neutro). El plural Nominativo/Acusativo termina en -ia.',
    declensionTarget: 3,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_new_7',
    type: ExerciseType.Production,
    question: 'Declina "Jupiter" en Dativo Singular:',
    latinWord: 'jupiter',
    correctAnswer: 'jovi',
    explanation: 'Jupiter es irregular. Su raíz cambia a "Jov-". Dativo: Jovi.',
    declensionTarget: 3,
    caseTarget: Case.Dativo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_new_8',
    type: ExerciseType.Identification,
    question: '¿Cuál es el Genitivo Singular de "Os" (Hueso)?',
    latinWord: 'os',
    options: ['Oris', 'Ossis', 'Osis', 'Ossi'],
    correctAnswer: 'Ossis',
    explanation: 'Cuidado: "Os, oris" es boca/rostro. "Os, ossis" es hueso.',
    declensionTarget: 3,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_new_9',
    type: ExerciseType.Production,
    question: 'Declina "Flumen" (Río) en Nominativo Plural:',
    latinWord: 'flumen',
    correctAnswer: 'flumina',
    explanation: 'Sustantivo neutro tema en consonante ("flumin-"). Plural en -a.',
    declensionTarget: 3,
    caseTarget: Case.Nominativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_new_10',
    type: ExerciseType.Contextual,
    question: 'Completa: "Vir magna ______" (Hombre de gran virtud/valor). Virtud = Virtus, virtutis.',
    context: 'Vir magna ______.',
    options: ['virtute', 'virtus', 'virtutis', 'virtuti'],
    correctAnswer: 'virtute',
    explanation: 'Ablativo de cualidad (también podría ser genitivo, pero aquí "magna" concuerda en ablativo). "Virtute".',
    declensionTarget: 3,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_new_11',
    type: ExerciseType.Contextual,
    question: 'Completa: "Timor ______" (El temor de la noche). Noche = Nox, noctis.',
    context: 'Timor ______.',
    options: ['noctis', 'noctium', 'nox', 'nocte'],
    correctAnswer: 'noctis',
    explanation: 'Genitivo Singular. "Noctis".',
    declensionTarget: 3,
    difficulty: 'Basic'
  },
  {
    id: 'decl3_new_12',
    type: ExerciseType.Production,
    question: 'Declina "Nox" (Noche) en Genitivo Plural:',
    latinWord: 'nox',
    correctAnswer: 'noctium',
    explanation: 'Tema mixto (falso imparisílabo). Genitivo Plural en -ium.',
    declensionTarget: 3,
    caseTarget: Case.Genitivo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_new_13',
    type: ExerciseType.Contextual,
    question: 'Completa: "Hostes ______ petunt" (Los enemigos buscan la paz). Paz = Pax, pacis.',
    context: 'Hostes ______ petunt.',
    options: ['pacem', 'pax', 'pacis', 'paci'],
    correctAnswer: 'pacem',
    explanation: 'Objeto Directo (Acusativo Singular). Pax -> Pacem.',
    declensionTarget: 3,
    difficulty: 'Basic'
  },
  {
    id: 'decl3_new_14',
    type: ExerciseType.Production,
    question: 'Declina "Hostis" (Enemigo) en Acusativo Plural:',
    latinWord: 'hostis',
    correctAnswer: 'hostes',
    explanation: 'Acusativo Plural de masculinos/femeninos de 3ª siempre es -es.',
    declensionTarget: 3,
    caseTarget: Case.Acusativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_new_15',
    type: ExerciseType.Identification,
    question: 'Analiza "Vim":',
    latinWord: 'vis',
    options: ['Acusativo Singular', 'Ablativo Singular', 'Genitivo Plural', 'Nominativo Singular'],
    correctAnswer: 'Acusativo Singular',
    explanation: 'Vis (Fuerza) es irregular. Nom: Vis, Ac: Vim, Abl: Vi.',
    declensionTarget: 3,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_new_16',
    type: ExerciseType.Production,
    question: 'Declina "Caput" (Cabeza) en Ablativo Singular:',
    latinWord: 'caput',
    correctAnswer: 'capite',
    explanation: 'Tema en consonante ("capit-"). Ablativo Singular en -e.',
    declensionTarget: 3,
    caseTarget: Case.Ablativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl3_new_17',
    type: ExerciseType.Contextual,
    question: 'Completa: "In ______" (En la ciudad - lugar). Ciudad = Urbs, urbis.',
    context: 'In ______.',
    options: ['urbe', 'urbem', 'urbis', 'urbi'],
    correctAnswer: 'urbe',
    explanation: 'Ablativo Singular con "in". "Urbe".',
    declensionTarget: 3,
    difficulty: 'Basic'
  },
  {
    id: 'decl3_new_18',
    type: ExerciseType.Identification,
    question: '¿Cuál es el Genitivo Plural de "Gens" (Gente/Clan)?',
    latinWord: 'gens',
    options: ['Gentum', 'Gentium', 'Gentes', 'Genti'],
    correctAnswer: 'Gentium',
    explanation: 'Tema mixto (dos consonantes antes de la terminación -is del Gen. Sing.). Genitivo Plural en -ium.',
    declensionTarget: 3,
    difficulty: 'Advanced'
  },
  {
    id: 'decl3_new_19',
    type: ExerciseType.Contextual,
    question: 'Completa: "Pastor ______ ducit" (El pastor guía las ovejas - acusativo implícito). Sujeto.',
    context: '______ oves ducit.',
    options: ['pastor', 'pastorem', 'pastoris', 'pastori'],
    correctAnswer: 'pastor',
    explanation: 'Sujeto (Nominativo Singular). "Pastor".',
    declensionTarget: 3,
    difficulty: 'Basic'
  },
  {
    id: 'decl3_new_20',
    type: ExerciseType.Production,
    question: 'Declina "Scelus" (Crimen) en Genitivo Singular:',
    latinWord: 'scelus',
    correctAnswer: 'sceleris',
    explanation: 'Neutro en -us de la 3ª (como Opus, operis). Scelus -> Sceleris.',
    declensionTarget: 3,
    caseTarget: Case.Genitivo,
    difficulty: 'Intermediate'
  },

  // --- EJERCICIOS 4ª DECLINACIÓN ---
  {
    id: 'decl4_1',
    type: ExerciseType.Identification,
    question: '¿Cuál es el género de "Manus, -us" (Mano)?',
    latinWord: 'manus',
    options: ['Masculino', 'Femenino', 'Neutro'],
    correctAnswer: 'Femenino',
    explanation: 'Aunque termina en -us como los masculinos de la 2ª y 4ª, "Manus" es una importante excepción femenina de la 4ª declinación.',
    declensionTarget: 4,
    difficulty: 'Basic'
  },
  {
    id: 'decl4_2',
    type: ExerciseType.Production,
    question: 'Declina "Cornu" (Cuerno) en Nominativo Plural:',
    latinWord: 'cornu',
    correctAnswer: 'cornua',
    explanation: 'Los sustantivos neutros de la 4ª declinación terminan en -ua en Nominativo, Vocativo y Acusativo Plural.',
    declensionTarget: 4,
    caseTarget: Case.Nominativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_3',
    type: ExerciseType.Contextual,
    question: 'Completa: "Hostes ______ faciunt" (Los enemigos hacen un ataque). Ataque = Impetus, -us.',
    context: 'Hostes ______ faciunt.',
    options: ['impetum', 'impetus', 'impetu', 'impetui'],
    correctAnswer: 'impetum',
    explanation: 'Objeto Directo singular. En la 4ª declinación (M/F), el Acusativo Singular termina en -um.',
    declensionTarget: 4,
    difficulty: 'Basic'
  },
  {
    id: 'decl4_4',
    type: ExerciseType.Contextual,
    question: 'Completa: "Decreto ______" (Por decreto del Senado). Senado = Senatus, -us.',
    context: 'Decreto ______.',
    options: ['senati', 'senatus', 'senatum', 'senatu'],
    correctAnswer: 'senatus',
    explanation: 'El Genitivo Singular de la 4ª declinación es -us (vocal larga), a diferencia de la 2ª declinación que es -i.',
    declensionTarget: 4,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_5',
    type: ExerciseType.Production,
    question: 'Declina "Genu" (Rodilla) en Ablativo Singular:',
    latinWord: 'genu',
    correctAnswer: 'genu',
    explanation: 'En los neutros de la 4ª declinación, el singular es invariable en Nominativo y Acusativo (-u), y el Ablativo también es -u.',
    declensionTarget: 4,
    caseTarget: Case.Ablativo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl4_6',
    type: ExerciseType.Contextual,
    question: 'Completa: "Dux ______ imperat" (El líder da órdenes al ejército). Ejército = Exercitus, -us.',
    context: 'Dux ______ imperat.',
    options: ['exercitui', 'exercitu', 'exercitus', 'exercitum'],
    correctAnswer: 'exercitui',
    explanation: 'Objeto Indirecto (Dativo). La terminación del Dativo Singular en la 4ª declinación es -ui.',
    declensionTarget: 4,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_7',
    type: ExerciseType.Production,
    question: 'Declina "Fructus" (Fruto) en Genitivo Plural:',
    latinWord: 'fructus',
    correctAnswer: 'fructuum',
    explanation: 'El Genitivo Plural de la 4ª declinación tiene la terminación característica -uum.',
    declensionTarget: 4,
    caseTarget: Case.Genitivo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl4_8',
    type: ExerciseType.Contextual,
    question: 'Completa: "Puer ______ clamat" (El niño grita por miedo). Miedo = Metus, -us.',
    context: 'Puer ______ clamat.',
    options: ['metum', 'metu', 'metui', 'metus'],
    correctAnswer: 'metu',
    explanation: 'Ablativo de causa. El Ablativo Singular de los masculinos de la 4ª es -u.',
    declensionTarget: 4,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_9',
    type: ExerciseType.Contextual,
    question: 'Completa: "Naves in ______ sunt" (Las naves están en el puerto). Puerto = Portus, -us.',
    context: 'Naves in ______ sunt.',
    options: ['portu', 'portus', 'portui', 'portuum'],
    correctAnswer: 'portu',
    explanation: 'Ubicación con "in" rige Ablativo. Ablativo singular de Portus es Portu.',
    declensionTarget: 4,
    difficulty: 'Basic'
  },
  {
    id: 'decl4_10',
    type: ExerciseType.Identification,
    question: 'Si decimos "Magistratus conveniunt" (Los magistrados se reúnen), ¿en qué caso está Magistratus?',
    latinWord: 'magistratus',
    options: ['Nominativo Singular', 'Nominativo Plural', 'Genitivo Singular', 'Acusativo Plural'],
    correctAnswer: 'Nominativo Plural',
    explanation: 'Aunque se escribe igual que el Genitivo Singular (-us), el verbo plural "conveniunt" indica que "Magistratus" es el sujeto plural.',
    declensionTarget: 4,
    difficulty: 'Advanced'
  },
  // Nuevos ejercicios 4ª Declinación
  {
    id: 'decl4_11',
    type: ExerciseType.Identification,
    question: '¿Cuál es el género de "Quercus, -us" (Roble)?',
    latinWord: 'quercus',
    options: ['Masculino', 'Femenino', 'Neutro'],
    correctAnswer: 'Femenino',
    explanation: 'Aunque es de la 4ª declinación, "Quercus" es Femenino, siguiendo la regla general de que los árboles son femeninos en latín.',
    declensionTarget: 4,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_12',
    type: ExerciseType.Contextual,
    question: 'Completa: "Miles ______ ducis audit" (El soldado escucha la orden del líder). Orden = Iussus, -us.',
    context: 'Miles ______ ducis audit.',
    options: ['iussum', 'iussus', 'iussu', 'iussui'],
    correctAnswer: 'iussum',
    explanation: 'Objeto Directo (Acusativo Singular). La terminación es -um.',
    declensionTarget: 4,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_13',
    type: ExerciseType.Production,
    question: 'Declina "Vultus" (Rostro/Cara) en Acusativo Plural:',
    latinWord: 'vultus',
    correctAnswer: 'vultus',
    explanation: 'En los masculinos de la 4ª, el Acusativo Plural (-us) es idéntico al Nominativo Singular y Plural.',
    declensionTarget: 4,
    caseTarget: Case.Acusativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_14',
    type: ExerciseType.Contextual,
    question: 'Completa: "In ______ dextro" (En el ala derecha [del ejército]). Ala = Cornu, -us.',
    context: 'In ______ dextro.',
    options: ['cornu', 'cornus', 'cornui', 'cornuum'],
    correctAnswer: 'cornu',
    explanation: 'Preposición "in" (ubicación) con Ablativo. "Cornu" es neutro y su ablativo singular es invariable (-u).',
    declensionTarget: 4,
    difficulty: 'Advanced'
  },
  {
    id: 'decl4_15',
    type: ExerciseType.Production,
    question: 'Declina "Spiritus" (Espíritu/Aliento) en Genitivo Plural:',
    latinWord: 'spiritus',
    correctAnswer: 'spirituum',
    explanation: 'Genitivo Plural de la 4ª declinación siempre termina en -uum.',
    declensionTarget: 4,
    caseTarget: Case.Genitivo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_16',
    type: ExerciseType.Contextual,
    question: 'Completa: "Puer ______ magno clamat" (El niño grita con gran llanto). Llanto = Fletus, -us.',
    context: 'Puer ______ magno clamat.',
    options: ['fletu', 'fletus', 'fletum', 'fletui'],
    correctAnswer: 'fletu',
    explanation: 'Ablativo de modo o instrumento. Ablativo singular de 4ª es -u.',
    declensionTarget: 4,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_17',
    type: ExerciseType.Identification,
    question: '¿Qué significa "Lapsus"?',
    latinWord: 'lapsus',
    options: ['Error / Desliz', 'Piedra', 'Trabajo', 'Lapso de tiempo'],
    correctAnswer: 'Error / Desliz',
    explanation: 'Significa deslizamiento, caída o error. De ahí la expresión "lapsus linguae" (error al hablar).',
    declensionTarget: 4,
    difficulty: 'Basic'
  },
  {
    id: 'decl4_18',
    type: ExerciseType.Contextual,
    question: 'Completa: "Magister ______ audit" (El maestro oye el trueno). Trueno = Tonitrus, -us.',
    context: 'Magister ______ audit.',
    options: ['tonitrum', 'tonitrus', 'tonitru', 'tonitrui'],
    correctAnswer: 'tonitrum',
    explanation: 'Objeto Directo (Acusativo Singular). Terminación -um.',
    declensionTarget: 4,
    difficulty: 'Basic'
  },
  {
    id: 'decl4_19',
    type: ExerciseType.Production,
    question: 'Declina "Genu" (Rodilla) en Nominativo Plural:',
    latinWord: 'genu',
    correctAnswer: 'genua',
    explanation: 'Los neutros de la 4ª declinación forman el plural (Nom/Voc/Ac) en -ua.',
    declensionTarget: 4,
    caseTarget: Case.Nominativo,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_20',
    type: ExerciseType.Contextual,
    question: 'Completa: "Navis in ______ iactatur" (La nave es sacudida en las olas). Ola = Fluctus, -us.',
    context: 'Navis in ______ iactatur.',
    options: ['fluctibus', 'fluctuum', 'fluctus', 'fluctu'],
    correctAnswer: 'fluctibus',
    explanation: 'Ablativo Plural (ubicación plural). La terminación es -ibus.',
    declensionTarget: 4,
    difficulty: 'Advanced'
  },
  {
    id: 'decl4_21',
    type: ExerciseType.Contextual,
    question: 'Completa: "Sol ad ______ vergit" (El sol se inclina hacia el ocaso/oeste). Ocaso = Occasus, -us.',
    context: 'Sol ad ______ vergit.',
    options: ['occasum', 'occasu', 'occasus', 'occasui'],
    correctAnswer: 'occasum',
    explanation: 'Preposición "ad" rige Acusativo. Terminación -um.',
    declensionTarget: 4,
    difficulty: 'Intermediate'
  },
  {
    id: 'decl4_22',
    type: ExerciseType.Contextual,
    question: 'Completa: "Puella in ______ matris est" (La niña está en el regazo de la madre). Regazo/Seno = Sinus, -us.',
    context: 'Puella in ______ matris est.',
    options: ['sinu', 'sinus', 'sinum', 'sinui'],
    correctAnswer: 'sinu',
    explanation: 'Ablativo singular con "in". Terminación -u.',
    declensionTarget: 4,
    difficulty: 'Basic'
  },
  {
    id: 'decl4_23',
    type: ExerciseType.Production,
    question: 'Declina "Risus" (Risa) en Dativo Singular:',
    latinWord: 'risus',
    correctAnswer: 'risui',
    explanation: 'Dativo Singular de la 4ª declinación termina en -ui.',
    declensionTarget: 4,
    caseTarget: Case.Dativo,
    difficulty: 'Advanced'
  },
  {
    id: 'decl4_24',
    type: ExerciseType.Contextual,
    question: 'Completa: "Mille ______" (Mil pasos = Una milla). Paso = Passus, -us.',
    context: 'Mille ______.',
    options: ['passus', 'passuum', 'passibus', 'passu'],
    correctAnswer: 'passus',
    explanation: 'Con "mille" (indeclinable en singular) se usa el sustantivo en el caso requerido, aquí aposición o partitivo, comúnmente se cita como "mille passus" (Nom/Ac Plural).',
    declensionTarget: 4,
    difficulty: 'Advanced'
  },
  {
    id: 'decl4_25',
    type: ExerciseType.Contextual,
    question: 'Completa: "Aqua ______ vertitur" (El agua se convierte en hielo). Hielo = Gelu, -us (o Gelus).',
    context: 'Aqua in ______ vertitur.',
    options: ['gelu', 'gelum', 'gelus', 'gelui'],
    correctAnswer: 'gelu',
    explanation: 'Si tomamos "Gelu" como neutro de la 4ª, el Acusativo (con "in" de cambio) es "Gelu".',
    declensionTarget: 4,
    difficulty: 'Advanced'
  },

  // --- EJERCICIOS 5ª DECLINACIÓN ---
  // Identificación Género (Dies)
  {
    id: 'decl5_1',
    type: ExerciseType.Identification,
    question: '¿Cuál es el género de "Dies, diei" (Día)?',
    latinWord: 'dies',
    options: ['Femenino', 'Masculino', 'Neutro'],
    correctAnswer: 'Masculino',
    explanation: '"Dies" es mayoritariamente Masculino, aunque en singular puede ser femenino cuando se refiere a una fecha fija o plazo.',
    declensionTarget: 5,
    difficulty: 'Basic'
  },
  // Genitivo Singular (Fides)
  {
    id: 'decl5_2',
    type: ExerciseType.Production,
    question: 'Declina "Fides" (Fe/Lealtad) en Genitivo Singular:',
    latinWord: 'fides',
    correctAnswer: 'fidei',
    explanation: 'La terminación del Genitivo Singular de la 5ª declinación es -ei. "Fidei".',
    declensionTarget: 5,
    caseTarget: Case.Genitivo,
    difficulty: 'Basic'
  },
  // Contextual Acusativo (Spes)
  {
    id: 'decl5_3',
    type: ExerciseType.Contextual,
    question: 'Completa: "Hominem sine ______ video" (Veo al hombre sin esperanza - asumiendo contra/ad). O simplemente Acusativo de Spes.',
    context: 'Contra ______ pugno.',
    options: ['spem', 'spei', 'spes', 'spe'],
    correctAnswer: 'spem',
    explanation: 'La preposición "contra" rige Acusativo. El Acusativo Singular de la 5ª declinación es -em ("Spem").',
    declensionTarget: 5,
    difficulty: 'Intermediate'
  },
  // Compuesto Res Publica (Ablativo)
  {
    id: 'decl5_4',
    type: ExerciseType.Contextual,
    question: 'Completa: "Cicero pro ______ pugnat" (Cicerón lucha por la república). República = Res publica.',
    context: 'Cicero pro ______ pugnat.',
    options: ['re publica', 'rem publicam', 'rei publicae', 'res publica'],
    correctAnswer: 're publica',
    explanation: 'La preposición "pro" rige Ablativo. "Res" (5ª) hace el ablativo en "re", y el adjetivo "publica" (1ª) en "publica".',
    declensionTarget: 5,
    difficulty: 'Advanced'
  },
  // Plural Nominativo/Acusativo (Acies)
  {
    id: 'decl5_5',
    type: ExerciseType.Production,
    question: 'Declina "Acies" (Línea de batalla) en Nominativo Plural:',
    latinWord: 'acies',
    correctAnswer: 'acies',
    explanation: 'En la 5ª declinación, el Nominativo y Acusativo Plural son iguales al Nominativo Singular: -es.',
    declensionTarget: 5,
    caseTarget: Case.Nominativo,
    difficulty: 'Intermediate'
  },
  // Significado Res Novae
  {
    id: 'decl5_6',
    type: ExerciseType.Identification,
    question: '¿Qué significa la expresión "Res novae"?',
    latinWord: 'res novae',
    options: ['Cosas nuevas', 'Revolución', 'Noticias', 'Inventos'],
    correctAnswer: 'Revolución',
    explanation: 'Literalmente "cosas nuevas", en el contexto político romano "Res novae" significaba un cambio de régimen o revolución.',
    declensionTarget: 5,
    difficulty: 'Advanced'
  },
  // Ablativo Glacies
  {
    id: 'decl5_7',
    type: ExerciseType.Production,
    question: 'Declina "Glacies" (Hielo) en Ablativo Singular:',
    latinWord: 'glacies',
    correctAnswer: 'glacie',
    explanation: 'El Ablativo Singular de la 5ª declinación termina en -e.',
    declensionTarget: 5,
    caseTarget: Case.Ablativo,
    difficulty: 'Intermediate'
  },
  // Identificación Meridies
  {
    id: 'decl5_8',
    type: ExerciseType.Identification,
    question: '¿Cuál es el género de "Meridies" (Mediodía)?',
    latinWord: 'meridies',
    options: ['Masculino', 'Femenino', 'Neutro'],
    correctAnswer: 'Masculino',
    explanation: 'Junto con "Dies", "Meridies" es uno de los pocos sustantivos masculinos de la 5ª declinación.',
    declensionTarget: 5,
    difficulty: 'Advanced'
  },
  // Contextual Species
  {
    id: 'decl5_9',
    type: ExerciseType.Contextual,
    question: 'Completa: "Sub ______ pacis" (Bajo la apariencia de paz). Apariencia = Species, -ei.',
    context: 'Sub ______ pacis.',
    options: ['specie', 'speciem', 'speciei', 'species'],
    correctAnswer: 'specie',
    explanation: 'Con "sub" indicando estado o condición (bajo), se usa Ablativo: "Specie".',
    declensionTarget: 5,
    difficulty: 'Advanced'
  },
  // Acusativo Pernicies
  {
    id: 'decl5_10',
    type: ExerciseType.Contextual,
    question: 'Completa: "Ad ______ civitatis" (Hacia la ruina de la ciudad). Ruina = Pernicies, -ei.',
    context: 'Ad ______ civitatis.',
    options: ['perniciem', 'pernicies', 'perniciei', 'pernicie'],
    correctAnswer: 'perniciem',
    explanation: 'La preposición "ad" rige Acusativo. La terminación es -em.',
    declensionTarget: 5,
    difficulty: 'Intermediate'
  },
  // Genitivo de Cualidad (Fides)
  {
    id: 'decl5_11',
    type: ExerciseType.Contextual,
    question: 'Completa: "Vir magnae ______" (Hombre de gran fe). Fe = Fides, -ei.',
    context: 'Vir magnae ______.',
    options: ['fidei', 'fidem', 'fides', 'fide'],
    correctAnswer: 'fidei',
    explanation: 'Genitivo de cualidad. Fides en Genitivo Singular es Fidei.',
    declensionTarget: 5,
    difficulty: 'Intermediate'
  },
  // Acusativo Facies
  {
    id: 'decl5_12',
    type: ExerciseType.Production,
    question: 'Declina "Facies" (Cara/Aspecto) en Acusativo Singular:',
    latinWord: 'facies',
    correctAnswer: 'faciem',
    explanation: 'Acusativo Singular de la 5ª declinación termina en -em.',
    declensionTarget: 5,
    caseTarget: Case.Acusativo,
    difficulty: 'Basic'
  },
  // Locativo/Ablativo Planities
  {
    id: 'decl5_13',
    type: ExerciseType.Contextual,
    question: 'Completa: "Exercitus in ______ est" (El ejército está en la llanura). Llanura = Planities, -ei.',
    context: 'Exercitus in ______ est.',
    options: ['planitie', 'planitiem', 'planities', 'planitiei'],
    correctAnswer: 'planitie',
    explanation: 'La preposición "in" (ubicación) rige Ablativo. Ablativo singular de 5ª es -e.',
    declensionTarget: 5,
    difficulty: 'Intermediate'
  },
  // Identificación Res Gestae
  {
    id: 'decl5_14',
    type: ExerciseType.Identification,
    question: '¿Qué significa "Res gestae"?',
    latinWord: 'res gestae',
    options: ['Hazañas / Hechos', 'Gestos', 'Cosas de embarazadas', 'Administración'],
    correctAnswer: 'Hazañas / Hechos',
    explanation: 'Literalmente "cosas hechas" o "hechos llevados a cabo". Se refiere a las hazañas históricas o militares.',
    declensionTarget: 5,
    difficulty: 'Basic'
  },
  // Genitivo Effigies
  {
    id: 'decl5_15',
    type: ExerciseType.Production,
    question: 'Declina "Effigies" (Retrato) en Genitivo Singular:',
    latinWord: 'effigies',
    correctAnswer: 'effigiei',
    explanation: 'Genitivo Singular de la 5ª declinación es -ei.',
    declensionTarget: 5,
    caseTarget: Case.Genitivo,
    difficulty: 'Intermediate'
  },
  // Acusativo Pernicies (Repaso)
  {
    id: 'decl5_16',
    type: ExerciseType.Contextual,
    question: 'Completa: "Romani ______ non timebant" (Los romanos no temían la ruina/destrucción). Ruina = Pernicies, -ei.',
    context: 'Romani ______ non timebant.',
    options: ['perniciem', 'pernicies', 'perniciei', 'pernicie'],
    correctAnswer: 'perniciem',
    explanation: 'Objeto Directo (Acusativo). Terminación -em.',
    declensionTarget: 5,
    difficulty: 'Intermediate'
  },
  // Ablativo Spes
  {
    id: 'decl5_17',
    type: ExerciseType.Contextual,
    question: 'Completa: "Sine ______ vivere non possumus" (No podemos vivir sin esperanza). Esperanza = Spes, spei.',
    context: 'Sine ______ vivere non possumus.',
    options: ['spe', 'spem', 'spei', 'spes'],
    correctAnswer: 'spe',
    explanation: 'La preposición "sine" rige Ablativo. Ablativo singular de Spes es Spe.',
    declensionTarget: 5,
    difficulty: 'Advanced'
  },
  // Dies Fecha (Excepción)
  {
    id: 'decl5_18',
    type: ExerciseType.Identification,
    question: 'En "Dies constituta" (Fecha fijada), ¿por qué Dies es femenino?',
    latinWord: 'dies',
    options: ['Por ser una fecha específica', 'Es un error', 'Dies siempre es femenino', 'Por eufonía'],
    correctAnswer: 'Por ser una fecha específica',
    explanation: 'Dies es generalmente masculino, pero se usa como femenino cuando designa un plazo o fecha fija.',
    declensionTarget: 5,
    difficulty: 'Advanced'
  },
  // Ablativo Luxuries
  {
    id: 'decl5_19',
    type: ExerciseType.Production,
    question: 'Declina "Luxuries" (Lujo) en Ablativo Singular:',
    latinWord: 'luxuries',
    correctAnswer: 'luxurie',
    explanation: 'Ablativo Singular termina en -e.',
    declensionTarget: 5,
    caseTarget: Case.Ablativo,
    difficulty: 'Basic'
  },
  // Nominativo Series
  {
    id: 'decl5_20',
    type: ExerciseType.Contextual,
    question: 'Completa: "Longa ______ rerum" (Una larga serie de cosas). Serie = Series, -ei.',
    context: 'Longa ______ rerum.',
    options: ['series', 'seriem', 'seriei', 'serie'],
    correctAnswer: 'series',
    explanation: 'Sujeto (Nominativo). La palabra es Series (Nominativo Singular).',
    declensionTarget: 5,
    difficulty: 'Basic'
  },
  // Acusativo Progenies
  {
    id: 'decl5_21',
    type: ExerciseType.Contextual,
    question: 'Completa: "Pater ______ amat" (El padre ama a su descendencia). Descendencia = Progenies, -ei.',
    context: 'Pater ______ amat.',
    options: ['progeniem', 'progenies', 'progeniei', 'progenie'],
    correctAnswer: 'progeniem',
    explanation: 'Objeto Directo (Acusativo). Terminación -em.',
    declensionTarget: 5,
    difficulty: 'Intermediate'
  },
  // Significado Res Adversae
  {
    id: 'decl5_22',
    type: ExerciseType.Identification,
    question: '¿Qué significa "Res adversae"?',
    latinWord: 'res adversae',
    options: ['Adversidad / Desgracia', 'Enemigos', 'Cosas inversas', 'La oposición'],
    correctAnswer: 'Adversidad / Desgracia',
    explanation: 'Literalmente "cosas adversas", se traduce comúnmente como adversidad o desgracia.',
    declensionTarget: 5,
    difficulty: 'Basic'
  }
];

/**
 * Repository pattern: Get filtered and shuffled exercises
 */
export const getExercisesForSession = (declensionId: number | 'all', limit: number = 7): Exercise[] => {
  // 1. Filter
  const filtered = declensionId === 'all' 
    ? EXERCISES_DATA 
    : EXERCISES_DATA.filter(ex => ex.declensionTarget === declensionId);

  // 2. Clone to avoid mutating the original
  const deck = [...filtered];

  // 3. Fisher-Yates Shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // 4. Slice
  return deck.slice(0, limit);
};

export const getExercisesCountByDeclension = (declensionId: number): number => {
  return EXERCISES_DATA.filter(ex => ex.declensionTarget === declensionId).length;
}