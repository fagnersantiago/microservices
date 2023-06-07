import { prismaClient } from "../infra/database/prisma-client";

type CreateOrder = {
  customerId: string;
  items: [{ productId: string; quantity: number; order: string }];
};
export class CreateOrderUseCase {
  async execute(props: CreateOrder) {
    const order = await prismaClient.ordered.create({
      data: {
        customerId: props.customerId,
        OrderItems: {
          createMany: {
            data: props.items,
          },
        },
      },
    });
    return order;
  }
}
