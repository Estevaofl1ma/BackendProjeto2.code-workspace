import { FastifyInstance } from 'fastify'

// Interface para Banco
interface Banco {
  id: number
  nome: string
}

// Lista em memória para armazenar bancos
let bancos: Banco[] = []
let proximoIdBanco = 1

export default async function rotasBancos(app: FastifyInstance) {
  // Retorna todos os bancos cadastrados
  app.get('/', async () => bancos)

  // Cria um novo banco e adiciona à lista
  app.post('/', async (request, reply) => {
    const { nome } = request.body as { nome: string }
    const novoBanco = { id: proximoIdBanco++, nome }
    bancos.push(novoBanco)
    return novoBanco
  })

  // Atualiza dados de um banco específico pelo id
  app.patch('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const banco = bancos.find(b => b.id === id)

    if (!banco) {
      return reply.status(404).send({ mensagem: 'Banco não encontrado' })
    }

    const { nome } = request.body as { nome?: string }
    if (nome !== undefined) banco.nome = nome

    return banco
  })

  // Remove um banco pelo id
  app.delete('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    bancos = bancos.filter(b => b.id !== id)
    return { mensagem: 'Banco deletado' }
  })
}
