import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const createspecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const cerateSpecificationController = new CreateSpecificationController(
  createspecificationUseCase
);

export { cerateSpecificationController };
