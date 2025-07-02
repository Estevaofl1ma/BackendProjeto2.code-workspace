import { prisma } from '../lib/prisma'

// Listar todos os bancos
export const listarBancos = () => {
  return prisma.bank.findMany()
}

// Criar um novo banco
export const criarBanco = (nome: string) => {
  return prisma.bank.create({
    data: { nome },
  })
}

// Atualizar um banco existente
export const atualizarBanco = (id: number, nome?: string) => {
  return prisma.bank.update({
    where: { id },
    data: { nome },
  })
}

// Deletar um banco pelo ID
export const deletarBanco = (id: number) => {
  return prisma.bank.delete({
    where: { id },
  })
}
