import { User } from "./models";
import { initialUsers } from "./initial-users";

const initDB = async () => {
    const count = await User.countDocuments();

    if (count === 0) {
        await User.insertMany(initialUsers);
        console.log("Initial users inserted");
    }
};

export default initDB;
