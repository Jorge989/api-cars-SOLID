import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImporCategoryUseCase } from "./ImportCategoryUseCase";
const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImporCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);
export { importCategoryController };
