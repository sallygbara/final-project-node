import express from "express";
import { connectDB } from "./database/index.js";
import { usersRouter, cardsRouter } from "./routes/index.js";
import {
    errorHandler,
    notFound,
    cors,
} from "./middleware/index.js";
import { httpLogger, logger } from "./logs/index.js";

const app = express();

connectDB();

app.use(express.json());
app.use(httpLogger);
app.use(cors);

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
    logger.info("Server running on 3000");
});