# Documentação Completa do Projeto: Ate a Falha - API

Este documento contém o README principal para a configuração do projeto, bem como a definição completa do schema do banco de dados Prisma.

---

## 📖 README.md

Esta é a API backend para o aplicativo "Ate a Falha", focada no gerenciamento de dietas, treinos e composição corporal de usuários.

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas na sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/) (um servidor de banco de dados rodando localmente ou uma URL de conexão)
- Um cliente de API como o [Postman](https://www.postman.com/) para testar os endpoints.

### 🚀 Começando

Siga os passos abaixo para configurar e rodar o projeto localmente.

1.  npm install

2.  a)
    cp .env.example .env
    b)
    .env
    DATABASE_URL="postgresql://SEU_USUARIO:SUA_SENHA@localhost:5432/NOME_DO_BANCO?schema=public"

3.  npx prisma migrate dev

4.  # 1. Compilar o projeto
    npm run build

# 2. Iniciar o servidor

npm run

Abrir o prisma studio:
npx prisma studio

Gerar o Prisma Client:
npx prisma generate
