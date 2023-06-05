const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  brokers: ["amazed-dinosaur-9437-us1-kafka.upstash.io:9092"],
  sasl: {
    mechanism: "scram-sha-256",
    username: "YW1hemVkLWRpbm9zYXVyLTk0MzckPZq9pvpNwws-PCq1Cqc2l-up8P2VgsLSafA",
    password: "91ff6e68970646019c97c522d4bca0f5",
  },
  ssl: true,
});

export { kafka };
