# API de Usuários - Node.js, Prisma e Express

Este projeto é uma API simples para gerenciamento de usuários, construída utilizando **Node.js**, **Express**, e **Prisma** como ORM para interagir com o banco de dados **MongoDB**.

A API permite a criação, leitura, atualização e deleção (CRUD) de usuários em um banco de dados. A seguir, estão as instruções para configuração e uso do projeto.


## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para construir a API de forma rápida e simples.
- **Prisma**: ORM (Object Relational Mapping) para interagir com o banco de dados.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.

---

## Funcionalidades

A API oferece os seguintes endpoints:

- **POST /users**: Cria um novo usuário.
  
  **Body**:
  ```json
  { "name": "Nome", "email": "email@example.com", "age": 30 }
  ```

  **Resposta**: Usuário criado com sucesso.

- **GET /users**: Lista todos os usuários ou filtra por nome (via query `name`).

  Exemplo de filtro: `/users?name=João`

  **Resposta**: Lista de usuários.

- **PUT /users/:id**: Atualiza as informações de um usuário.
  
  **Body**:
  ```json
  { "name": "Novo Nome", "email": "novoemail@example.com", "age": 35 }
  ```

  **Resposta**: Usuário atualizado com sucesso.

- **DELETE /users/:id**: Deleta um usuário pelo seu ID.

  **Resposta**: 
  ```json
  { "message": "Usuário deletado com sucesso" }
  ```

---

## Como Rodar

### 1. Clonar o Repositório

Clone o repositório para o seu computador:

```bash
git clone <https://github.com/ellydamicaella/API_Node.js>
cd <PASTA-DO-REPOSITORIO>
```

### 2. Instalar Dependências

Instale as dependências necessárias:

```bash
npm install
# ou
yarn install
```

### 3. Configurar o Banco de Dados

Este projeto usa **Prisma** para interagir com o banco de dados **MongoDB**. Para configurar o banco:

1. No arquivo `prisma/schema.prisma`, defina a conexão com o MongoDB:
   
   ```prisma
   datasource db {
     provider = "mongodb"
     url      = env("DATABASE_URL")
   }
   
   generator client {
     provider = "prisma-client-js"
   }

   model User {
     id    String @id @default(auto()) @map("_id") @db.ObjectId
     name  String
     email String @unique
     age   Int
   }
   ```

2. Crie um arquivo `.env` na raiz do projeto e adicione a URL de conexão do MongoDB:

   ```env
   DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority"
   ```

3. Gere o cliente Prisma:

   ```bash
   npx prisma generate
   ```

### 4. Rodar a API

Agora você pode iniciar o servidor com o comando:

```bash
npm start
# ou
yarn start
```

A API estará disponível em `http://localhost:3000`.

---

## Estrutura de Arquivos

```
/prisma
  └── schema.prisma   # Definição do esquema do banco de dados
/src
  └── app.js          # Arquivo principal que contém as rotas e a lógica da API
/package.json         # Dependências e scripts do projeto
/.env                 # Configuração de conexão com o banco de dados
```

---

## Contribuindo

Se você deseja contribuir com melhorias ou correções, fique à vontade para criar um **fork** deste repositório e enviar um **pull request** com suas alterações.

---

## Observações Finais

Este projeto foi desenvolvido como um exemplo simples de como criar uma API de CRUD usando **Node.js**, **Express**, **Prisma** e **MongoDB**. Caso tenha dúvidas ou queira sugerir melhorias, fique à vontade para abrir uma **issue** no repositório!
