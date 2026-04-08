import express from "express";
import connectDB from "./database/connect-db.js";
import initDB from "./database/init-db.js";
import * as routes from "./routes/index.js";
import { httpLogger } from "./logs/logger";

const app = express();

app.use(express.json());

const startServer = async () => {
    await connectDB();
    await initDB();

    app.use("/users", routes.usersRouter);
    app.use("/cards", routes.cardsRouter);

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
};

startServer();