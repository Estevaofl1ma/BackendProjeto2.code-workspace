import { IBancoRepository } from './IBancoRepository'
import { Banco } from '../entities/Banco'

export class BancoMemoryRepository implements IBancoRepository {
  private bancos: Banco[] = []
  private proximoId = 1

  listar(): Banco[] {
    return this.bancos
  }

  criar(nome: string): Banco {
    const banco = { id: this.proximoId++, nome }
    this.bancos.push(banco)
    return banco
  }

  atualizar(id: number, dados: Partial<Omit<Banco, 'id'>>): Banco | null {
    const banco = this.bancos.find(b => b.id === id)
    if (!banco) return null
    if (dados.nome !== undefined) banco.nome = dados.nome
    return banco
  }

  deletar(id: number): boolean {
    const tamanho = this.bancos.length
    this.bancos = this.bancos.filter(b => b.id !== id)
    return this.bancos.length < tamanho
  }
}
