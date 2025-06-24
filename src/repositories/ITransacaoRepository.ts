import { Transacao } from '../entities/Transacao'

export interface ITransacaoRepository {
  listar(): Transacao[]
  criar(titulo: string, valor: number): Transacao
  atualizar(id: number, dados: Partial<Omit<Transacao, 'id'>>): Transacao | null
  deletar(id: number): boolean
}
