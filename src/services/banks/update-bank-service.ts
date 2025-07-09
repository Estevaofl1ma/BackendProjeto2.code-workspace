import { AppError } from "../../common/AppError";
import { IBankRepository } from "../../repositories/bank-interface-repository";
import { Bank } from "../../entities/bank";

export class UpdateBankService {
  constructor(private bankRepository: IBankRepository) {}

  async execute(bank: Bank) {
    const existing = await this.bankRepository.findById(bank.id);
    if (!existing) {
      throw new AppError("Bank not found", 404);
    }

    return await this.bankRepository.update(bank);
  }
}
