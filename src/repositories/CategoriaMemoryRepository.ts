import { ICategoriaRepository } from './ICategoriaRepository'
import { Categoria } from '../entities/Categoria'

export class CategoriaMemoryRepository implements ICategoriaRepository {
  private categorias: Categoria[] = []
  private proximoId = 1

  listar(): Categoria[] {
    return this.categorias
  }

  criar(nome: string): Categoria {
    const categoria = { id: this.proximoId++, nome }
    this.categorias.push(categoria)
    return categoria
  }

  atualizar(id: number, dados: Partial<Omit<Categoria, 'id'>>): Categoria | null {
    const categoria = this.categorias.find(c => c.id === id)
    if (!categoria) return null
    if (dados.nome !== undefined) categoria.nome = dados.nome
    return categoria
  }

  deletar(id: number): boolean {
    const tamanho = this.categorias.length
    this.categorias = this.categorias.filter(c => c.id !== id)
    return this.categorias.length < tamanho
  }
}
