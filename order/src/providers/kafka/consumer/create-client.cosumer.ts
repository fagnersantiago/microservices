import { kafkaConusmer } from "./kafka-consumer";

export async function createClientConsumer() {
  console.log("COSUMER");
  const consumer = await kafkaConusmer("CLIENT_CREATED");
  await consumer.run({
    eachMessage: async ({ message }: any) => {
      const messageToString = message.value.toString();
      console.log(messageToString);
    },
  });
}
createClientConsumer();
