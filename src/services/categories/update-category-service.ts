import { AppError } from "../../common/AppError.js";
import { ICategoryRepository } from "../../repositories/category-interface-repository.js";

export class UpdateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string, name: string, icon?: string | null) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new AppError("Category not found", 404);
    }

    category.name = name;
    category.icon = icon ?? null;

    return this.categoryRepository.update(category);
  }
}
