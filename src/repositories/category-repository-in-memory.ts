import { CategoryDTO, ICategoryRepository } from './category-interface-repository'
import { randomUUID } from 'node:crypto'

export class CategoryRepositoryInMemory implements ICategoryRepository {
  private categories: CategoryDTO[] = []

  async create(data: CategoryDTO): Promise<CategoryDTO> {
    const category: CategoryDTO = {
      id: data.id ?? randomUUID(),
      name: data.name,
      icon: data.icon ?? null,
    }

    this.categories.push(category)
    return category
  }

  async findAll(): Promise<CategoryDTO[]> {
    return this.categories
  }

  async findById(id: string): Promise<CategoryDTO | null> {
    return this.categories.find(category => category.id === id) ?? null
  }

  async findByName(name: string): Promise<CategoryDTO | null> {
    return this.categories.find(category => category.name === name) ?? null
  }

  async update(id: string, data: Partial<CategoryDTO>): Promise<CategoryDTO> {
    const categoryIndex = this.categories.findIndex(category => category.id === id)

    if (categoryIndex === -1) {
      throw new Error('Category not found')
    }

    const updatedCategory = {
      ...this.categories[categoryIndex],
      ...data,
    }

    this.categories[categoryIndex] = updatedCategory
    return updatedCategory
  }

  async delete(id: string): Promise<void> {
    this.categories = this.categories.filter(category => category.id !== id)
  }
}
