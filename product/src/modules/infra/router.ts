import { Router, response } from "express";
import { CreateProductController } from "../create-products/create-products-controller";

const router = Router();

router.post("/product", (request, response) => {
  new CreateProductController().handle(request, response);
});

export { router };
