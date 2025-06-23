import { FastifyInstance } from 'fastify'

type Category = {
  id: number
  name: string
  description?: string
}

const categories: Category[] = []

async function categoriesRoutes(app: FastifyInstance) {
  // GET - Listar todas as categorias
  app.get('/', async (request, reply) => {
    return categories
  })

  // POST - Criar nova categoria
  app.post('/', async (request, reply) => {
    const { name, description } = request.body as { name: string; description?: string }

    const newCategory: Category = {
      id: categories.length + 1,
      name,
      description,
    }

    categories.push(newCategory)

    return newCategory
  })

  // PATCH - Atualizar uma categoria
  app.patch('/:id', async (request, reply) => {
    const { id } = request.params as { id: string }
    const idNumber = Number(id)

    const { name, description } = request.body as Partial<Category>

    const category = categories.find((c) => c.id === idNumber)

    if (!category) {
      return reply.status(404).send({ message: 'Categoria não encontrada' })
    }

    if (name !== undefined) category.name = name
    if (description !== undefined) category.description = description

    return category
  })

  // DELETE - Remover uma categoria
  app.delete('/:id', async (request, reply) => {
    const { id } = request.params as { id: string }
    const idNumber = Number(id)

    const index = categories.findIndex((c) => c.id === idNumber)

    if (index === -1) {
      return reply.status(404).send({ message: 'Categoria não encontrada' })
    }

    categories.splice(index, 1)

    return { message: 'Categoria deletada' }
  })
}

export default categoriesRoutes
