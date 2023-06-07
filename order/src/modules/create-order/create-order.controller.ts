import { Request, Response } from "express";
import { CreateOrderUseCase } from "./create-order.useCase";

export class CreateOrderController {
  async handle(request: Request, response: Response) {
    const useCase = new CreateOrderUseCase();
    await useCase.execute(request.body);
  }
}
