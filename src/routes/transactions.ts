import { FastifyInstance } from 'fastify'

interface Transaction {
  id: number
  title: string
  amount: number
}

let transactions: Transaction[] = []
let nextId = 1

export default async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async () => transactions)

  app.post('/', async (request, reply) => {
    const { title, amount } = request.body as { title: string; amount: number }
    const newTransaction = { id: nextId++, title, amount }
    transactions.push(newTransaction)
    return newTransaction
  })

  app.patch('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const transaction = transactions.find(t => t.id === id)
    if (!transaction) return reply.code(404).send({ message: 'Transaction not found' })

    const { title, amount } = request.body as { title?: string; amount?: number }
    if (title) transaction.title = title
    if (amount) transaction.amount = amount

    return transaction
  })

  app.delete('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    transactions = transactions.filter(t => t.id !== id)
    return { message: 'Transaction deleted' }
  })
}
