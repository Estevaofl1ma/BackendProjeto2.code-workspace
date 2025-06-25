# BackendProjeto2

Sistema backend desenvolvido com **Node.js**, **TypeScript** e **Fastify**, utilizando repositórios em memória. Esse projeto tem como objetivo registrar e gerenciar informações de **transações**, **categorias** e **bancos**.

---

## Estrutura do Projeto

```
src/
├── entities/               # Modelos de dados (interfaces)
│   ├── Banco.ts
│   ├── Categoria.ts
│   └── Transacao.ts
│
├── repositories/           # Interfaces e repositórios em memória
│   ├── IBancoRepository.ts
│   ├── BancoMemoryRepository.ts
│   ├── ICategoriaRepository.ts
│   ├── CategoriaMemoryRepository.ts
│   ├── ITransacaoRepository.ts
│   └── TransacaoMemoryRepository.ts
│
├── routes/                 # Rotas HTTP da API
│   ├── banks.ts
│   ├── categories.ts
│   └── transactions.ts
│
└── server.ts               # Inicializa o servidor e registra rotas
```

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [TSX](https://www.npmjs.com/package/tsx) (para executar TS direto)

---

##  Instalação e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/Estevaofl1ma/BackendProjeto2.code-workspace.git
cd BackendProjeto2.code-workspace
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar o servidor
```bash
npx tsx src/server.ts
```

> O servidor iniciará em: [http://localhost:3333](http://localhost:3333)

---

## Rotas disponíveis

Todas as rotas seguem a estrutura REST e armazenam dados **em memória**:

### Transações (`/transactions`)
- `GET /transactions` → Listar todas
- `POST /transactions` → Criar nova
- `PATCH /transactions/:id` → Atualizar
- `DELETE /transactions/:id` → Deletar

### Bancos (`/banks`)
- `GET /banks`
- `POST /banks`
- `PATCH /banks/:id`
- `DELETE /banks/:id`

### Categorias (`/categories`)
- `GET /categories`
- `POST /categories`
- `PATCH /categories/:id`
- `DELETE /categories/:id`

---

## Observações

- Todos os dados são **armazenados temporariamente** (em memória). Ao reiniciar, os dados são perdidos.

---


## Autor

Feito por Estevão Ferreira   
[github.com/Estevaofl1ma](https://github.com/Estevaofl1ma)

---