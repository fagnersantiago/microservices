const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  brokers: ["amazed-dinosaur-9437-us1-kafka.upstash.io:9092"],
  sasl: {
    mechanism: "scram-sha-256",
    username: process.env.KAFKA_USER_NAME,
    password: process.env.KAFKA_PASSWORD,
  },
  ssl: true,
});

export { kafka };
