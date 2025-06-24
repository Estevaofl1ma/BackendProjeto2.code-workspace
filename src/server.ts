import Fastify from 'fastify'
import rotasTransacoes from './routes/transactions'
import rotasBancos from './routes/banks'
import rotasCategorias from './routes/categories'

const app = Fastify()

app.register(rotasTransacoes, { prefix: '/transactions' })
app.register(rotasBancos, { prefix: '/banks' })
app.register(rotasCategorias, { prefix: '/categories' })

app.listen({ port: 3333 }, () => {
  console.log('Servidor rodando em http://localhost:3333')
})
