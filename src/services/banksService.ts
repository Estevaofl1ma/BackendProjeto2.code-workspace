// src/services/banksService.ts

interface Banco {
  id: number
  nome: string
}

let bancos: Banco[] = []
let proximoId = 1

export const listarBancos = () => {
  return bancos
}

export const criarBanco = (nome: string) => {
  const novo = { id: proximoId++, nome }
  bancos.push(novo)
  return novo
}

export const atualizarBanco = (id: number, nome?: string) => {
  const banco = bancos.find((b) => b.id === id)
  if (!banco) return null

  if (nome !== undefined) banco.nome = nome

  return banco
}

export const deletarBanco = (id: number) => {
  const antes = bancos.length
  bancos = bancos.filter((b) => b.id !== id)
  return bancos.length < antes
}
