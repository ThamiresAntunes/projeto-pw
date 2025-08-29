# 🍃 Plataforma de Conscientização ao Vício em Álcool

## 📖 Sobre o Projeto
A **Plataforma de Conscientização ao Vício em Álcool** tem como objetivo oferecer **apoio, informação e recursos** para pessoas que sofrem com o vício, bem como seus familiares.  
O sistema promove a **conscientização** através de conteúdos educativos, a possibilidade de **compartilhar relatos** e o **cadastro de instituições de apoio** com localização no mapa.

---

## ✨ Funcionalidades
### 👤 Usuário
- Registro e login de usuários
- Autenticação segura com **JWT**
- Acesso diferenciado conforme permissões

### 🏥 Instituição
- Cadastro de instituições de apoio
- Informações detalhadas de contato
- **Geolocalização** para visualização no mapa
- Atualização e exclusão de instituições

### 📚 Conteúdo Educativo
- Publicação de artigos e materiais educativos
- Upload de **imagens ilustrativas**
- Listagem e visualização de conteúdos

### 📝 Relato
- Usuários podem compartilhar relatos pessoais
- Relatos podem ser listados e consultados
- Espaço para apoio e troca de experiências

---

## 🛠 Tecnologias Utilizadas
- **Backend**
  - ⚡ Node.js + Express
  - 🟦 TypeScript
- **Banco de Dados**
  - 🗄 MongoDB
  - 🔗 Prisma (ORM com suporte a MongoDB)
- **Autenticação**
  - 🔐 JWT (JSON Web Token)
- **Upload de Arquivos**
  - 📦 Multer (ou similar para upload de imagens)
- **Mapas e Geolocalização**
  - 🗺 PostGIS (opcional) ou bibliotecas de mapas (Leaflet, Google Maps API)

---

## 🏗 Estrutura das Entidades
- **Usuário**
  - id, nome, email, senha (hash), role
- **Instituição**
  - id, nome, descrição, localização (GeoJSON), contato
- **Conteúdo Educativo**
  - id, título, descrição, imagem, dataPublicação
- **Relato**
  - id, autor, texto, data

---

## ▶ Como Executar o Projeto
### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/plataforma-conscientizacao.git
cd plataforma-conscientizacao
