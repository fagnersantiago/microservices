import { prismaClient } from "../infra/database/prisma-client";
import { KafkaSendMessage } from "../infra/provider/kafka/producer/producer";

type ProductCreate = {
  id: string;
  name: string;
  code: string;
  quantity: number;
  price: number;
};

export class CreateProductUseCase {
  async execute(props: ProductCreate) {
    const product = await prismaClient.products.findFirst({
      where: {
        code: props.code,
      },
    });

    if (product) {
      throw new Error("Products already exists");
    }
    const productCreated = await prismaClient.products.create({
      data: {
        ...props,
      },
    });

    const kafkaMessage = new KafkaSendMessage();
    await kafkaMessage.execute("PRODUCT_CREATED", {
      id: productCreated.id,
      code: productCreated.code,
    });

    return productCreated;
  }
}
