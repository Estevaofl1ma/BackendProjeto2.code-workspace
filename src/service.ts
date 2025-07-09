
import fastify from 'fastify'
import categoriesRoute from './routes/categories-route.js'
import cors from '@fastify/cors'
import { AppError } from './common/AppError.js'
import { ZodError } from 'zod'

export const app = fastify()
app.register(cors, {
  origin: '*',
})

app.register(categoriesRoute)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

 if (error instanceof AppError) {
    reply.status(error.statusCode).send({
      status: "error",
      message: error.message,
    });
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})

;(async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()