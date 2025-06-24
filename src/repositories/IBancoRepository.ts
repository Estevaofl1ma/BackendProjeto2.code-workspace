import { Banco } from '../entities/Banco'

export interface IBancoRepository {
  listar(): Banco[]
  criar(nome: string): Banco
  atualizar(id: number, dados: Partial<Omit<Banco, 'id'>>): Banco | null
  deletar(id: number): boolean
}
