import { Transaction } from "../entities/transaction";

export type CreateTransactionDTO = {
  description: string;
  type: 'income' | 'expense';
  amount: number;
  bank: any; // pode tipar como Bank se importar corretamente
  category: any; // idem para Category
  date: Date;
};

export interface ITransactionRepository {
  findById(id: string): Promise<Transaction | null>;
  findAll(): Promise<Transaction[]>;
  create(transaction: CreateTransactionDTO): Promise<Transaction>;
  update(transaction: Transaction): Promise<Transaction>;
  delete(id: string): Promise<void>;
}
