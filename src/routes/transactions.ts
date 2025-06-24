import { FastifyInstance } from 'fastify'
import { TransacaoMemoryRepository } from '../repositories/TransacaoMemoryRepository'

const repositorio = new TransacaoMemoryRepository()

export default async function rotasTransacoes(app: FastifyInstance) {
  app.get('/', async () => repositorio.listar())

  app.post('/', async (request, reply) => {
    const { titulo, valor } = request.body as { titulo: string; valor: number }
    const nova = repositorio.criar(titulo, valor)
    return nova
  })

  app.patch('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const { titulo, valor } = request.body as { titulo?: string; valor?: number }
    const atualizada = repositorio.atualizar(id, { titulo, valor })

    if (!atualizada) return reply.status(404).send({ mensagem: 'Transação não encontrada' })
    return atualizada
  })

  app.delete('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const sucesso = repositorio.deletar(id)
    if (!sucesso) return reply.status(404).send({ mensagem: 'Transação não encontrada' })
    return { mensagem: 'Transação deletada com sucesso' }
  })
}
