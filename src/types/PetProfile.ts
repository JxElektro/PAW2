// src/types/PetProfile.ts

export interface BasicInfo {
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  sexo: string;
  color: string;
  marcasIdentificativas?: string;
  microchipNumero?: string;
  fotos?: string[];
}

export interface SleepInfo {
  totalSuenoDiario: number;
  patronesSueno: {
    manana: number;
    tarde: number;
    noche: number;
  };
  observaciones?: string;
}

export interface Toy {
  nombre: string;
  frecuenciaUso: string;
  tipo: string;
}

export interface PlayHours {
  horario: string;
  duracion: string;
  actividades: string[];
}

export interface Recommendation {
  cuidadosEspeciales?: string;
  alimentacion?: string;
  salud?: string;
  entrenamiento?: string;
}

export interface Mischief {
  descripcion: string;
  frecuencia: string;
  contexto: string;
  correcciones?: string;
}

export interface DailyActivities {
  rutinaMatutina: string[];
  rutinaVespertina: string[];
  rutinaNocturna: string[];
  ejercicio: string[];
}

export interface MedicalHistory {
  condicion: string;
  fechaDiagnostico: string;
  tratamiento: string;
  notas?: string;
}

export interface Medication {
  nombre: string;
  dosis: string;
  frecuencia: string;
  duracion: string;
}

export interface VeterinaryVisit {
  fecha: string;
  motivo: string;
  veterinario: string;
  notas?: string;
}

export interface HealthAndMedication {
  historialMedico: MedicalHistory[];
  medicacionesActuales: Medication[];
  alergias?: string[];
  visitasVeterinario: VeterinaryVisit[];
}

export interface PreferencesAndPersonality {
  personalidad: string;
  preferenciasInteraccion: string;
  relacionConOtrosAnimales: string;
}

export interface Document {
  tipo: string;
  filePath: string;
}

export interface EmergencyContact {
  nombre: string;
  telefono: string;
  direccion?: string;
  relacion?: string;
}

export interface BehaviorObservation {
  fecha: string;
  comportamiento: string;
  notas?: string;
}

export interface BehaviorProfile {
  observaciones: BehaviorObservation[];
  resumen?: string; // Generado por IA
}

export interface PetProfile {
  basicInfo: BasicInfo;
  sleepInfo?: SleepInfo;
  favoriteToys?: Toy[];
  playHours?: PlayHours[];
  recommendations?: Recommendation;
  mischiefs?: Mischief[];
  dailyActivities?: DailyActivities;
  healthAndMedication?: HealthAndMedication;
  preferencesAndPersonality?: PreferencesAndPersonality;
  documents?: Document[];
  emergencyContacts?: EmergencyContact[];
  behaviorProfile?: BehaviorProfile;
}

export interface PetState {
  perfil: PetProfile;
}

export interface PetsState {
  pets: Record<string, PetState>;
  selectedPetId: string | null;
}
