import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { CategoryRepositoryPrisma } from '../../repositories/category-repository-prisma.js'
import { CreateCategoryService } from '../../services/categories/create-category-service.js'

export async function createCategoryController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const bodySchema = z.object({
    name: z.string(),
    icon: z.string().nullable().optional()
  })

  const { name, icon } = bodySchema.parse(request.body)

  const categoryRepository = new CategoryRepositoryPrisma()
  const service = new CreateCategoryService(categoryRepository)

  const newCategory = await service.execute(name, icon)

  return reply.status(201).send(newCategory)
}
