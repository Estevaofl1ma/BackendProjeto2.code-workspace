import { FastifyInstance } from 'fastify'

type Bank = {
  id: number
  name: string
  branch: string
}

const banks: Bank[] = []

async function banksRoutes(app: FastifyInstance) {
  // GET - Listar todos os bancos
  app.get('/', async (request, reply) => {
    return banks
  })

  // POST - Criar novo banco
  app.post('/', async (request, reply) => {
    const { name, branch } = request.body as { name: string; branch: string }

    const newBank: Bank = {
      id: banks.length + 1,
      name,
      branch,
    }

    banks.push(newBank)

    return newBank
  })

  // PATCH - Atualizar um banco
  app.patch('/:id', async (request, reply) => {
    const { id } = request.params as { id: string }
    const idNumber = Number(id)

    const { name, branch } = request.body as Partial<Bank>

    const bank = banks.find((b) => b.id === idNumber)

    if (!bank) {
      return reply.status(404).send({ message: 'Bank not found' })
    }

    if (name !== undefined) bank.name = name
    if (branch !== undefined) bank.branch = branch

    return bank
  })

  // DELETE - Remover um banco
  app.delete('/:id', async (request, reply) => {
    const { id } = request.params as { id: string }
    const idNumber = Number(id)

    const index = banks.findIndex((b) => b.id === idNumber)

    if (index === -1) {
      return reply.status(404).send({ message: 'Bank not found' })
    }

    banks.splice(index, 1)

    return { message: 'Bank deleted' }
  })
}

export default banksRoutes
