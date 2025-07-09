import { Entity } from "./entity";

export class Category extends Entity {
  icon?: string | null;
  name: string;

  constructor(name: string, icon?: string | null, id?: string, createdAt?: Date, updatedAt?: Date | null) {
    super(id, createdAt, updatedAt);
    this.icon = icon;
    this.name = name;
  }
}
