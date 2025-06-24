import { FastifyInstance } from 'fastify'

interface Transacao {
  id: number
  titulo: string
  valor: number
}

let transacoes: Transacao[] = []
let proximoId = 1

export default async function rotasTransacoes(app: FastifyInstance) {
  // Listar todas as transações
  app.get('/', async () => transacoes)

  // Criar uma nova transação
  app.post('/', async (request, reply) => {
    const { titulo, valor } = request.body as { titulo: string; valor: number }
    const novaTransacao = { id: proximoId++, titulo, valor }
    transacoes.push(novaTransacao)
    return novaTransacao
  })

  // Atualizar uma transação existente
  app.patch('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const transacao = transacoes.find(t => t.id === id)

    if (!transacao) {
      return reply.status(404).send({ mensagem: 'Transação não encontrada' })
    }

    const { titulo, valor } = request.body as { titulo?: string; valor?: number }
    if (titulo !== undefined) transacao.titulo = titulo
    if (valor !== undefined) transacao.valor = valor

    return transacao
  })

  // Deletar uma transação pelo id
  app.delete('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    transacoes = transacoes.filter(t => t.id !== id)
    return { mensagem: 'Transação deletada' }
  })
}
