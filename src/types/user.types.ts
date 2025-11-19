// Types for sec_users model based on Prisma schema

export interface SecUser {
  RunnerUID: string;
  RunnerUIDRef?: string | null;
  AliasRunner?: string | null;
  DisciplinaPrincipal?: string | null;
  name: string;
  login: string; // @id
  phone: string;
  email: string;
  pswd: string;
  RFC?: string | null;
  TipoMembresia?: string | null;
  FechaUltimaActividad?: Date | null;
  FechaRegistro: Date;
  FechaActualizacion: Date;
  InvitacionesTotales: number;
  SuscripcionMXN?: number | null;
  WalletPuntos?: number | null;
  WalletPuntosI?: number | null;
  WalletSaldoMXN: number;
  GananciasAcumuladasMXN: number;
  InvitacionesMensuales: number;
  PorcentajeCumplimiento: number;
  NivelRunner?: string | null;
  FechaRenovacionMembresia?: Date | null;
  CFDIEmitido: boolean;
  StravaAthleteID?: bigint | null;
  GarminUserID?: string | null;
  Z2TotalHistorico: bigint;
  Z2Recibidas30d: number;
  Z2Otorgadas30d: number;
  Actividades30d: number;
  NivelMensual?: string | null;
  FechaUltimaZ2?: Date | null;
  fechaNacimiento?: Date | null;
  Genero?: string | null;
  Peso?: string | null;
  Estatura?: string | null;
  Ciudad?: string | null;
  Estado?: string | null;
  Pais?: string | null;
  EmergenciaContacto?: string | null;
  EmergenciaCelular?: string | null;
  EmergenciaParentesco?: string | null;
  equipoID?: string | null;
  active?: string | null;
  activation_code?: string | null;
  priv_admin?: string | null;
  mfa?: string | null;
  picture?: Buffer | null;
  role?: string | null;
  pswd_last_updated?: Date | null;
  mfa_last_updated?: Date | null;
}

// Type for creating a new user (pre-registration)
export interface CreateUserDto {
  name: string;
  login: string; // @id - required
  email: string;
  phone: string;
  pswd?: string; // Optional for pre-registration, backend might generate a default
  // Optional fields that can be set during creation
  AliasRunner?: string;
  DisciplinaPrincipal?: string;
  RFC?: string;
  TipoMembresia?: string;
  RunnerUIDRef?: string;
  Ciudad?: string;
  Estado?: string;
  Pais?: string;
}

// Type for pre-registration form data (what we collect from the user)
export interface PreregisterFormData {
  firstName: string; // Maps to 'name' in the schema
  email: string;     // Maps to both 'email' and 'login' in the schema
  phone: string;     // Maps to 'phone' in the schema
}

