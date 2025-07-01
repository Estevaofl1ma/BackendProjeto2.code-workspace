// src/services/categoriesService.ts

interface Categoria {
  id: number
  nome: string
}

let categorias: Categoria[] = []
let proximoId = 1

export const listarCategorias = () => {
  return categorias
}

export const criarCategoria = (nome: string) => {
  const nova = { id: proximoId++, nome }
  categorias.push(nova)
  return nova
}

export const atualizarCategoria = (id: number, nome?: string) => {
  const categoria = categorias.find((c) => c.id === id)
  if (!categoria) return null

  if (nome !== undefined) categoria.nome = nome

  return categoria
}

export const deletarCategoria = (id: number) => {
  const antes = categorias.length
  categorias = categorias.filter((c) => c.id !== id)
  return categorias.length < antes
}
