import { ITransacaoRepository } from './ITransacaoRepository'
import { Transacao } from '../entities/Transacao'

export class TransacaoMemoryRepository implements ITransacaoRepository {
  private transacoes: Transacao[] = []
  private proximoId = 1

  listar(): Transacao[] {
    return this.transacoes
  }

  criar(titulo: string, valor: number): Transacao {
    const nova = { id: this.proximoId++, titulo, valor }
    this.transacoes.push(nova)
    return nova
  }

  atualizar(id: number, dados: Partial<Omit<Transacao, 'id'>>): Transacao | null {
    const transacao = this.transacoes.find(t => t.id === id)
    if (!transacao) return null

    if (dados.titulo !== undefined) transacao.titulo = dados.titulo
    if (dados.valor !== undefined) transacao.valor = dados.valor
    return transacao
  }

  deletar(id: number): boolean {
    const tamanhoInicial = this.transacoes.length
    this.transacoes = this.transacoes.filter(t => t.id !== id)
    return this.transacoes.length < tamanhoInicial
  }
}
