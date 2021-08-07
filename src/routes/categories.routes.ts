import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCase/createCategory";
import { listCategoriesController } from "../modules/cars/useCase/listCategories";
import { importCategoryController } from "../modules/cars/useCase/importCategory";
const upload = multer({
  dest: "./tmp",
});
const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});
categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});
export { categoriesRoutes };
