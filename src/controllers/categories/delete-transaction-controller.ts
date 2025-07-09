import { FastifyRequest, FastifyReply } from 'fastify'
import { CategoryRepositoryPrisma } from '../../repositories/category-repository-prisma.js'
import { DeleteCategoryService } from '../../services/categories/delete-category-service.js'

export async function deleteCategoryController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string }

  const categoryRepository = new CategoryRepositoryPrisma()
  const service = new DeleteCategoryService(categoryRepository)

  await service.execute(id)
  return reply.status(204).send()
}
