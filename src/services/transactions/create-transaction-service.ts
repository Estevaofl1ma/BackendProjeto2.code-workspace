import { AppError } from "../../common/AppError";
import { ITransactionRepository } from "../../repositories/transaction-interface-repository";
import { Bank } from "../../entities/bank";
import { Category } from "../../entities/category";

export class CreateTransactionService {
  private transactionRepository: ITransactionRepository;

  constructor(transactionRepository: ITransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async execute(
    description: string,
    type: 'income' | 'expense',
    amount: number,
    bank: Bank,
    category: Category,
    date: Date
  ) {
    if (!description || !type || !amount || !bank || !category || !date) {
      throw new AppError("All fields are required");
    }

    const transaction = await this.transactionRepository.create({
      description,
      type,
      amount,
      bank,
      category,
      date,
    });

    return transaction;
  }
}
