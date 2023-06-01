import { kafka } from "..";

export const kafkaConusmer = async (topic: string) => {
  const consumer = kafka.consumer({ groupId: "ORDER_APP " });
  await consumer.connect();

  await consumer.subscribe({ topic, fromBeginning: true });

  return consumer;
};
