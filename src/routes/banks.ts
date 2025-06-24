import { FastifyInstance } from 'fastify'
import { BancoMemoryRepository } from '../repositories/BancoMemoryRepository'

const repositorio = new BancoMemoryRepository()

export default async function rotasBancos(app: FastifyInstance) {
  app.get('/', async () => repositorio.listar())

  app.post('/', async (request, reply) => {
    const { nome } = request.body as { nome: string }
    const novo = repositorio.criar(nome)
    return novo
  })

  app.patch('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const { nome } = request.body as { nome?: string }
    const atualizado = repositorio.atualizar(id, { nome })
    if (!atualizado) return reply.status(404).send({ mensagem: 'Banco não encontrado' })
    return atualizado
  })

  app.delete('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const deletado = repositorio.deletar(id)
    if (!deletado) return reply.status(404).send({ mensagem: 'Banco não encontrado' })
    return { mensagem: 'Banco deletado com sucesso' }
  })
}
