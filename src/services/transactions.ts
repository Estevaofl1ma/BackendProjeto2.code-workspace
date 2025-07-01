// src/services/transactionsService.ts

interface Transacao {
  id: number
  titulo: string
  valor: number
}

let transacoes: Transacao[] = []
let proximoId = 1

export const listarTransacoes = () => {
  return transacoes
}

export const criarTransacao = (titulo: string, valor: number) => {
  const nova = { id: proximoId++, titulo, valor }
  transacoes.push(nova)
  return nova
}

export const atualizarTransacao = (id: number, titulo?: string, valor?: number) => {
  const transacao = transacoes.find((t) => t.id === id)
  if (!transacao) return null

  if (titulo !== undefined) transacao.titulo = titulo
  if (valor !== undefined) transacao.valor = valor

  return transacao
}

export const deletarTransacao = (id: number) => {
  const antes = transacoes.length
  transacoes = transacoes.filter((t) => t.id !== id)
  return transacoes.length < antes
}
