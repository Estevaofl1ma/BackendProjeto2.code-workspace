
# BackendProjeto2

Sistema backend desenvolvido com **Node.js**, **TypeScript**, **Fastify** e **Prisma**, utilizando **SQLite** como banco de dados. Este projeto registra e gerencia informações de **transações**, **categorias** e **bancos**, com dados persistidos no banco.

---

## Estrutura do Projeto

```
src/
├── lib/                    # Configuração e instância do Prisma Client
│   └── prisma.ts
│
├── services/               # Serviços que encapsulam regras de negócio e acesso ao banco
│   ├── banksService.ts
│   ├── categoriesService.ts
│   └── transactionsService.ts
│
├── routes/                 # Rotas HTTP da API (consomem os services)
│   ├── banks.ts
│   ├── categories.ts
│   └── transactions.ts
│
└── server.ts               # Inicializa o servidor e registra as rotas
prisma/
├── schema.prisma           # Modelo do banco de dados e datasource SQLite
.env                       # Variáveis de ambiente (string de conexão)
package.json               # Dependências e scripts
```

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [TSX](https://www.npmjs.com/package/tsx) (para executar TypeScript direto)

---

## Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/Estevaofl1ma/BackendProjeto2.code-workspace.git
cd BackendProjeto2.code-workspace
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variável de ambiente `.env`

Crie o arquivo `.env` na raiz com o conteúdo:

```env
DATABASE_URL="file:./dev.db"
```

### 4. Rodar migrações para criar o banco e tabelas

```bash
npx prisma migrate dev --name init
```

### 5. Rodar o servidor

```bash
npx tsx src/server.ts
```

> O servidor estará rodando em: [http://localhost:3333]

---

## Rotas Disponíveis

Todas as rotas seguem a arquitetura REST e persistem dados no banco SQLite:

### Transações (`/transactions`)
- `GET /transactions` → Listar todas as transações
- `POST /transactions` → Criar nova transação  
  Exemplo JSON:
  ```json
  {
    "titulo": "Compra no mercado",
    "valor": 150
  }
  ```
- `PATCH /transactions/:id` → Atualizar transação existente  
- `DELETE /transactions/:id` → Deletar transação pelo ID

### Bancos (`/banks`)
- `GET /banks` → Listar todos os bancos
- `POST /banks` → Criar banco  
  Exemplo JSON:
  ```json
  {
    "nome": "Banco do Brasil"
  }
  ```
- `PATCH /banks/:id` → Atualizar banco existente
- `DELETE /banks/:id` → Deletar banco pelo ID

### Categorias (`/categories`)
- `GET /categories` → Listar todas as categorias
- `POST /categories` → Criar categoria  
  Exemplo JSON:
  ```json
  {
    "nome": "Alimentação"
  }
  ```
- `PATCH /categories/:id` → Atualizar categoria existente
- `DELETE /categories/:id` → Deletar categoria pelo ID

---

## Observações Importantes

- Os dados são armazenados em um banco SQLite persistente (`dev.db`), que fica no projeto.
- Ao rodar `npx prisma migrate dev --name init` pela primeira vez, as tabelas são criadas automaticamente.
- Prisma Client é usado para acessar o banco de forma segura e tipada.


## Autor

Feito por Estevão Ferreira  
[https://github.com/Estevaofl1ma]


