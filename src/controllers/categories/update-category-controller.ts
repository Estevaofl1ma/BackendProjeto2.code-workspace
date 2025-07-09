import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { CategoryRepositoryPrisma } from '../../repositories/category-repository-prisma.js'
import { UpdateCategoryService } from '../../services/categories/update-category-service.js'

export async function updateCategoryController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const paramsSchema = z.object({
    id: z.string().uuid()
  })

  const bodySchema = z.object({
    name: z.string(),
    icon: z.string().nullable().optional()
  })

  const { id } = paramsSchema.parse(request.params)
  const { name, icon } = bodySchema.parse(request.body)

  const categoryRepository = new CategoryRepositoryPrisma()
  const service = new UpdateCategoryService(categoryRepository)

  const updatedCategory = await service.execute(id, name, icon)
  return reply.send(updatedCategory)
}
