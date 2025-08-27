export interface Institution {
  name: string;
  cnpj: string;
  contact: string;
  description: string;
  positionX: number;
  positionY: number;

  createdById?: string;
}

export interface InstitutionGet {
  id: string;
  name: string;
  cnpj: string;
  contact: string;
  description: string;
  positionX?: number;
  positionY?: number;
  createdById?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InstitutionUpdate {
  name?: string;
  contact?: string;
  description?: string;
  positionX?: number;
  positionY?: number;
}
