import { FastifyRequest, FastifyReply } from 'fastify'
import { CategoryRepositoryPrisma } from '../../repositories/category-repository-prisma.js'
import { ListCategoriesService } from '../../services/categories/list-categories-service.js'

export async function listCategoriesController(
  _: FastifyRequest,
  reply: FastifyReply
) {
  const categoryRepository = new CategoryRepositoryPrisma()
  const service = new ListCategoriesService(categoryRepository)

  const categories = await service.execute()
  return reply.send(categories)
}
