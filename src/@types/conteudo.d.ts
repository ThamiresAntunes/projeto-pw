// Define a estrutura para a criação de um novo conteúdo educativo.
export interface ConteudoCreate {
  title: string;
  content: string;
  imageUrl?: string;
  linkUrl?: string;
}

// Define a estrutura para a atualização de um conteúdo, onde todos os campos são opcionais.
export interface ConteudoUpdate {
  title?: string;
  content?: string;
  imageUrl?: string;
  linkUrl?: string;
}
