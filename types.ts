
export enum Case {
  Nominativo = 'Nominativo',
  Vocativo = 'Vocativo',
  Acusativo = 'Acusativo',
  Genitivo = 'Genitivo',
  Dativo = 'Dativo',
  Ablativo = 'Ablativo'
}

export enum Number {
  Singular = 'Singular',
  Plural = 'Plural'
}

export enum Gender {
  Masculino = 'Masculino',
  Femenino = 'Femenino',
  Neutro = 'Neutro'
}

export interface DeclensionEnding {
  case: Case;
  singular: string;
  plural: string;
}

export interface DeclensionGroup {
  id: number;
  name: string;
  description: string;
  variants: {
    gender: Gender[];
    endings: DeclensionEnding[];
    examples: { latin: string; translation: string; }[];
  }[];
}

export enum ExerciseType {
  Identification = 'Identification',
  Production = 'Production',
  Contextual = 'Contextual'
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  latinWord?: string;
  context?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  declensionTarget: number;
  caseTarget?: Case;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
}

export interface SessionResult {
  correct: number;
  total: number;
  errors: {
    exercise: Exercise;
    userAnswer: string;
  }[];
}
