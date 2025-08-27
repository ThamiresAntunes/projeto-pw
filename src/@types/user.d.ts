export type Role = "user" | "healthcare" | "admin" | "admin_master";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;

  instituicoes: Institution[]
}

export interface UpdateLoginUser {
  name?: string;
  email?: string;
  password?: string;
}