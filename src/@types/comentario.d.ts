// Define a estrutura para a criação de um novo comentário.
export interface ComentarioCreate {
  content: string;
}

// Define a estrutura para a atualização de um comentário.
export interface ComentarioUpdate {
  content?: string;
}