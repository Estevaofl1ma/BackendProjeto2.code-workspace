import { AppError } from "../../common/AppError";
import { IBankRepository } from "../../repositories/bank-interface-repository";

export class CreateBankService {
  private bankRepository: IBankRepository;

  constructor(bankRepository: IBankRepository) {
    this.bankRepository = bankRepository;
  }

  async execute(ispb: string, name: string, code: string, fullName: string) {
    if (!name || !ispb || !code || !fullName) {
      throw new AppError("All fields are required");
    }

    const existingBank = await this.bankRepository.findByName(name);
    if (existingBank) {
      throw new AppError("Bank with this name already exists");
    }

    const bank = await this.bankRepository.create({
      ispb,
      name,
      code,
      fullName,
    });

    return bank;
  }
}
