import { Request, Response } from "express";
import { CreateClient } from "./create-client.useCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const useCase = new CreateClient();

    try {
      const client = await useCase.execute(request.body);

      return response.status(201).json(client);
    } catch (error) {
      console.log(error);
    }
  }
}
