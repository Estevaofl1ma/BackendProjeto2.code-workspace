import { Entity } from "./entity";
import { Bank } from "./bank";
import { Category } from "./category";

export type TransactionType = 'income' | 'expense';

export class Transaction extends Entity {
  description: string;
  type: TransactionType;
  amount: number;
  bank: Bank;
  category: Category;
  date: Date;

  constructor(
    description: string,
    type: TransactionType,
    amount: number,
    bank: Bank,
    category: Category,
    date: Date,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date | null
  ) {
    super(id, createdAt, updatedAt);
    this.description = description;
    this.type = type;
    this.amount = amount;
    this.bank = bank;
    this.category = category;
    this.date = date;
  }
}
export { Category };

