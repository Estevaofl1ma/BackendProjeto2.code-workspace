import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { CategoryRepositoryPrisma } from '../../repositories/category-repository-prisma.js'
import { GetCategoryByIdService } from '../../services/categories/get-category-service.js'

export async function getCategoryController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const paramsSchema = z.object({
    id: z.string().uuid()
  })

  const { id } = paramsSchema.parse(request.params)

  const categoryRepository = new CategoryRepositoryPrisma()
  const service = new GetCategoryByIdService(categoryRepository)

  const category = await service.execute(id)
  return reply.send(category)
}
