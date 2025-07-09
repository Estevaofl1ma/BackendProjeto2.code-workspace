import { Entity } from "./entity";

export class Bank extends Entity {
  ispb: string;
  name: string;
  code: string;
  fullName: string;

  constructor(ispb: string, name: string, code: string, fullName: string, id?: string, createdAt?: Date, updatedAt?: Date | null) {
    super(id, createdAt, updatedAt);
    this.ispb = ispb;
    this.name = name;
    this.code = code;
    this.fullName = fullName;
  }
}
