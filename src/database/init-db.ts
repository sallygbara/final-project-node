import env from "../config";
import { logger } from "../logs/logger";
import { authService } from "../service";
import { User } from "./models";
import { InitialUsers } from "./initial-users";

const initDB = async () => {
    if (env.NODE_ENV !== "production") {
        console.log("Init database in non-production env");

        //  Add 3 users
        const usersCount = await User.countDocuments();
        if (usersCount === 0) {
            for (let user of InitialUsers) {
                user.password = await authService.hashPassword(user.password ?? "");
                const saved = await new User(user).save();

                logger.trace("Add user: %s", saved);
            }
        }

        // TODO: Add 3 cards

        console.log("DB Initiliazed successfully");
    }
};

export default initDB;
