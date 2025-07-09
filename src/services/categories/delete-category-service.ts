import { AppError } from "../../common/AppError.js";
import { ICategoryRepository } from "../../repositories/category-interface-repository.js";

export class DeleteCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string): Promise<void> {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new AppError("Category not found", 404);
    }

    await this.categoryRepository.delete(id);
  }
}
