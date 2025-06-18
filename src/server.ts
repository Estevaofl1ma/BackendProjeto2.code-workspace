import Fastify from 'fastify'

import transactionsRoutes from './routes/transactions'
import banksRoutes from './routes/banks'
import categoriesRoutes from './routes/categories'

const app = Fastify()

app.register(transactionsRoutes, { prefix: '/transactions' })
app.register(banksRoutes, { prefix: '/banks' })
app.register(categoriesRoutes, { prefix: '/categories' })

app.get('/', async (request, reply) => {
  return { message: 'Servidor funcionando!' }
})

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 Servidor rodando em http://localhost:3333')
})
