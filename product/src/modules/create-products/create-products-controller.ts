import { Request, Response } from "express";
import { CreateProductUseCase } from "./create-products-useCase";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const productUsecase = new CreateProductUseCase();

    try {
      const product = await productUsecase.execute(request.body);

      return response.status(201).json(product);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
