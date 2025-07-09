import { FastifyInstance } from "fastify";
import { createCategoryController } from "../controllers/create-category-controller.js";

export default async function (app: FastifyInstance) {
  app.post('/categories', createCategoryController)

  app.get('/categories/:id', async (request, reply) => {
    return reply.status(501).send({ message: 'Not implemented' });
  });

}