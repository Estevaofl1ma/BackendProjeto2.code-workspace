import { randomUUID } from "node:crypto";

export class Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;

  constructor(id?: string, createdAt?: Date, updatedAt?: Date | null) {
    this.id = id || randomUUID();
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || null;
  }
}
