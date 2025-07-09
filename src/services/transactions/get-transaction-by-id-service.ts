import { AppError } from "../../common/AppError";
import { ITransactionRepository } from "../../repositories/transaction-interface-repository";

export class GetTransactionByIdService {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(id: string) {
    const transaction = await this.transactionRepository.findById(id);

    if (!transaction) {
      throw new AppError("Transaction not found", 404);
    }

    return transaction;
  }
}
