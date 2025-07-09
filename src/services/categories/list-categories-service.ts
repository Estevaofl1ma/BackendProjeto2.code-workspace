import { ICategoryRepository } from "../../repositories/category-interface-repository.js";

export class ListCategoriesService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute() {
    return this.categoryRepository.findAll();
  }
}
