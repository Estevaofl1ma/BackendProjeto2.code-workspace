import { prisma } from '../lib/prisma'

// Listar todas as transações
export const listarTransacoes = () => {
  return prisma.transaction.findMany()
}

// Criar uma nova transação
export const criarTransacao = (titulo: string, valor: number) => {
  return prisma.transaction.create({
    data: { titulo, valor },
  })
}

// Atualizar uma transação existente
export const atualizarTransacao = (id: number, titulo?: string, valor?: number) => {
  return prisma.transaction.update({
    where: { id },
    data: { titulo, valor },
  })
}

// Deletar uma transação pelo ID
export const deletarTransacao = (id: number) => {
  return prisma.transaction.delete({
    where: { id },
  })
}
