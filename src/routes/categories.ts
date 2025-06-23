import { FastifyInstance } from 'fastify'

// Interface para Categoria
interface Categoria {
  id: number
  nome: string
}

// Lista em memória para armazenar categorias
let categorias: Categoria[] = []
let proximoIdCategoria = 1

export default async function rotasCategorias(app: FastifyInstance) {
  // Retorna todas as categorias cadastradas
  app.get('/', async () => categorias)

  // Cria uma nova categoria e adiciona à lista
  app.post('/', async (request, reply) => {
    const { nome } = request.body as { nome: string }
    const novaCategoria = { id: proximoIdCategoria++, nome }
    categorias.push(novaCategoria)
    return novaCategoria
  })

  // Atualiza dados de uma categoria específica pelo id
  app.patch('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    const categoria = categorias.find(c => c.id === id)

    if (!categoria) {
      return reply.status(404).send({ mensagem: 'Categoria não encontrada' })
    }

    const { nome } = request.body as { nome?: string }
    if (nome !== undefined) categoria.nome = nome

    return categoria
  })

  // Remove uma categoria pelo id
  app.delete('/:id', async (request, reply) => {
    const id = Number((request.params as any).id)
    categorias = categorias.filter(c => c.id !== id)
    return { mensagem: 'Categoria deletada' }
  })
}
