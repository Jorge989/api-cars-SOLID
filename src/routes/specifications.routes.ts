import { Router } from "express";

import { cerateSpecificationController } from "../modules/cars/useCase/createSpecification";

const specificationsRoutes = Router();
specificationsRoutes.post("/", (request, response) => {
  return cerateSpecificationController.handle(request, response);
});

export { specificationsRoutes };
