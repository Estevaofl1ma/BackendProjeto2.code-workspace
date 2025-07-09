import { AppError } from "../../common/AppError";
import { IBankRepository } from "../../repositories/bank-interface-repository";

export class DeleteBankService {
  constructor(private bankRepository: IBankRepository) {}

  async execute(id: string) {
    const existing = await this.bankRepository.findById(id);
    if (!existing) {
      throw new AppError("Bank not found", 404);
    }

    await this.bankRepository.delete(id);
  }
}
