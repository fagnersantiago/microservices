import { prismaClient } from "../../../modules/infra/database/prisma-client";
import { kafkaConusmer } from "./kafka-consumer";

type ClientConsumer = {
  id: string;
  email: string;
};
export async function createClientConsumer() {
  console.log("COSUMER");
  const consumer = await kafkaConusmer("CLIENT_CREATED");
  await consumer.run({
    eachMessage: async ({ message }: any) => {
      const messageToString = message.value.toString();
      const client = JSON.parse(messageToString) as ClientConsumer;

      await prismaClient.orderCostumer.create({
        data: {
          externalId: client.id,
          email: client.email,
        },
      });
    },
  });
}
createClientConsumer();
