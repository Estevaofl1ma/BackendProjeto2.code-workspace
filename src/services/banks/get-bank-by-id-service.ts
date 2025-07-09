import { AppError } from "../../common/AppError";
import { IBankRepository } from "../../repositories/bank-interface-repository";

export class GetBankByIdService {
  constructor(private bankRepository: IBankRepository) {}

  async execute(id: string) {
    const bank = await this.bankRepository.findById(id);

    if (!bank) {
      throw new AppError("Bank not found", 404);
    }

    return bank;
  }
}
