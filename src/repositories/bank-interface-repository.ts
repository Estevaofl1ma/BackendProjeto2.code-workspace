import { Bank } from "../entities/bank";

export type CreateBankDTO = {
  ispb: string;
  name: string;
  code: string;
  fullName: string;
};

export interface IBankRepository {
  findById(id: string): Promise<Bank | null>;
  findByName(name: string): Promise<Bank | null>;
  findAll(): Promise<Bank[]>;
  create(bank: CreateBankDTO): Promise<Bank>;
  update(bank: Bank): Promise<Bank>;
  delete(id: string): Promise<void>;
}
