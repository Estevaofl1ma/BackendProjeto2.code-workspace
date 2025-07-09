import { AppError } from "../../common/AppError";
import { ITransactionRepository } from "../../repositories/transaction-interface-repository";
import { Transaction } from "../../entities/transaction";

export class UpdateTransactionService {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(transaction: Transaction) {
    const existing = await this.transactionRepository.findById(transaction.id);
    if (!existing) {
      throw new AppError("Transaction not found", 404);
    }

    return await this.transactionRepository.update(transaction);
  }
}
