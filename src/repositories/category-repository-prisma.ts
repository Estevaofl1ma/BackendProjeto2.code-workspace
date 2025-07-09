import { prisma } from "../database/prisma.js";
import { Category } from "../entities/category.js";
import { ICategoryRepository, CreateCategoryDTO } from "./category-interface-repository.js";

export class CategoryRepositoryPrisma implements ICategoryRepository {
  async findById(id: string): Promise<Category | null> {
    const category = await prisma.category.findUnique({
      where: { id },
    });
    return category || null;
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await prisma.category.findFirst({
      where: { name },
    });
    return category || null;
  }

  async findAll(): Promise<Category[]> {
    return await prisma.category.findMany();
  }

  async create(data: CreateCategoryDTO): Promise<Category> {
    const newCategory = await prisma.category.create({
      data: {
        name: data.name,
        icon: data.icon ?? null,
      },
    });
    return newCategory;
  }

  async update(category: Category): Promise<Category> {
    const updatedCategory = await prisma.category.update({
      where: { id: category.id },
      data: {
        name: category.name,
        icon: category.icon ?? null,
      },
    });
    return updatedCategory;
  }

  async delete(id: string): Promise<void> {
    await prisma.category.delete({
      where: { id },
    });
  }
}
