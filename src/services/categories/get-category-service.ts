import { CategoryRepository } from '../../repositories/category-repository'

export class GetCategoryByIdService {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string) {
    const category = await this.categoryRepository.findById(id)

    if (!category) {
      throw new Error('Category not found.')
    }

    return category
  }
}
