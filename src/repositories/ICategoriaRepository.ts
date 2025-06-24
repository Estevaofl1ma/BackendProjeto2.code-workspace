import { Categoria } from '../entities/Categoria'

export interface ICategoriaRepository {
  listar(): Categoria[]
  criar(nome: string): Categoria
  atualizar(id: number, dados: Partial<Omit<Categoria, 'id'>>): Categoria | null
  deletar(id: number): boolean
}
