import Fastify from 'fastify'

// Importando as rotas do projeto
import rotasTransacoes from './routes/transactions'
import rotasBancos from './routes/banks'
import rotasCategorias from './routes/categories'

// Criando a instância do servidor Fastify
const app = Fastify()

// Registrando as rotas com seus respectivos prefixos
app.register(rotasTransacoes, { prefix: '/transactions' })
app.register(rotasBancos, { prefix: '/banks' })
app.register(rotasCategorias, { prefix: '/categories' })

// Rota raiz para verificar se a API está online
app.get('/', async () => {
  return { message: 'Bem-vindo à API BackendProjeto2!' }
})

// Iniciando o servidor
app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error('Erro ao iniciar o servidor:', err)
    process.exit(1)
  }
  console.log(`Servidor rodando em ${address}`)
})
