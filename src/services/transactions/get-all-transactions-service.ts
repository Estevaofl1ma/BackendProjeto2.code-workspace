import { ITransactionRepository } from "../../repositories/transaction-interface-repository";

export class GetAllTransactionsService {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute() {
    return await this.transactionRepository.findAll();
  }
}
