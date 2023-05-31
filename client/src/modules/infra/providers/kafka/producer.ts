import { kafka } from ".";

export class KafkaSendMessage {
  async execute(topic: string, payload: any): Promise<void> {
    const producer = kafka.producer({
      allowAutoTopicCreation: true,
    });

    await producer.connect();

    console.log(`Message send to topic ${topic}`);
    console.log(`Message send payload`, payload);

    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(payload) }],
    });

    await producer.disconnect();
  }
}
