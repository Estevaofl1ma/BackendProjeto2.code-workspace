import { AppError } from "../../common/AppError";
import { ITransactionRepository } from "../../repositories/transaction-interface-repository";

export class DeleteTransactionService {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(id: string) {
    const existing = await this.transactionRepository.findById(id);
    if (!existing) {
      throw new AppError("Transaction not found", 404);
    }

    await this.transactionRepository.delete(id);
  }
}
