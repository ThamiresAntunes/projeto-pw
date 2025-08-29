export interface Relato {
  title: string;
  content: string;
  likes?: number;
  userId?: string;
}

export interface RelatoGet {
  id: string;
  title: string;
  content: string;
  likes: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RelatoUpdate {
  title?: string;
  content?: string;
}
