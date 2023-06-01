import express from "express";
import "./modules/infra/provider/kafka/index";
import { router } from "./modules/infra/router";

const app = express();

const PORT = process.env.PORT ?? 3003;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
