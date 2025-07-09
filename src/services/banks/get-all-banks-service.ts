import { IBankRepository } from "../../repositories/bank-interface-repository";

export class GetAllBanksService {
  constructor(private bankRepository: IBankRepository) {}

  async execute() {
    return await this.bankRepository.findAll();
  }
}
