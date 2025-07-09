export interface CategoryDTO {
  id?: string
  name: string
  icon?: string | null
}

export interface ICategoryRepository {
  create(data: CategoryDTO): Promise<any>
  findAll(): Promise<any[]>
  findById(id: string): Promise<any | null>
  findByName(name: string): Promise<any | null>
  update(id: string, data: Partial<CategoryDTO>): Promise<any>
  delete(id: string): Promise<void>
}
