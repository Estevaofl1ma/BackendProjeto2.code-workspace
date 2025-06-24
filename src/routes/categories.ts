import { FastifyInstance } from 'fastify'
import { CategoriaMemoryRepository } from '../repositories/CategoriaMemoryRepository'

const repositorio = new CategoriaMemoryRepository()

export default async function rotasCategorias(app: FastifyInstance) {
  app.get('/', async () => repositorio.listar())

  app.post('/', async (request, reply) => {
    const { nome } = request.body as { nome: string }
    const nova = repositorio.criar(nome)
    return nova
  })

  app.patch('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const { nome } = request.body as { nome?: string }
    const atualizada = repositorio.atualizar(id, { nome })
    if (!atualizada) return reply.status(404).send({ mensagem: 'Categoria não encontrada' })
    return atualizada
  })

  app.delete('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const deletada = repositorio.deletar(id)
    if (!deletada) return reply.status(404).send({ mensagem: 'Categoria não encontrada' })
    return { mensagem: 'Categoria deletada com sucesso' }
  })
}
