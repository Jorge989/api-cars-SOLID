import { Request, Response } from "express";

import { ImporCategoryUseCase } from "./ImportCategoryUseCase";
class ImportCategoryController {
  constructor(private importCategoryUseCase: ImporCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCase.execute(file);
    return response.send();
  }
}
export { ImportCategoryController };
