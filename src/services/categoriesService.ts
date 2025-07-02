import { prisma } from '../lib/prisma'

// Listar todas as categorias
export const listarCategorias = () => {
  return prisma.category.findMany()
}

// Criar uma nova categoria
export const criarCategoria = (nome: string) => {
  return prisma.category.create({
    data: { nome },
  })
}

// Atualizar uma categoria existente
export const atualizarCategoria = (id: number, nome?: string) => {
  return prisma.category.update({
    where: { id },
    data: { nome },
  })
}

// Deletar uma categoria pelo ID
export const deletarCategoria = (id: number) => {
  return prisma.category.delete({
    where: { id },
  })
}
