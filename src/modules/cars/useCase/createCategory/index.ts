import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryControler";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export {
  CreateCategoryController,
  createCategoryUseCase,
  createCategoryController,
};
