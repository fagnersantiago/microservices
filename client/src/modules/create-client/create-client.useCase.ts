import { prismaClient } from "../infra/database/prisma-client";
import { KafkaSendMessage } from "../infra/providers/kafka/producer";

type CreateClienteRequest = {
  name: string;
  password: string;
  email: string;
};

export class CreateClient {
  constructor() {}

  async execute(props: CreateClienteRequest) {
    const emailExists = await prismaClient.client.findFirst({
      where: {
        email: props.email,
      },
    });

    if (emailExists) {
      throw new Error("Email already exists");
    }

    const clientCreated = await prismaClient.client.create({
      data: {
        ...props,
      },
    });

    const kafkaProducer = new KafkaSendMessage();
    await kafkaProducer.execute("CLIENT_CREATED", {
      id: clientCreated.id,
      email: clientCreated.email,
    });

    return clientCreated;
  }
}
