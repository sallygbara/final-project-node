import { User, Card } from "../models";
import initialUsers from "./initial-users";
import initialCards from "./initial-cards";

const initDB = async () => {
    const usersCount = await User.countDocuments();
    const cardsCount = await Card.countDocuments();

    let businessUser;

    if (usersCount === 0) {
        const users = await User.insertMany(initialUsers);
        console.log("Users seeded");

        businessUser = users.find((user) => user.isBusiness);
    } else {
        businessUser = await User.findOne({ isBusiness: true });
    }

    if (cardsCount === 0 && businessUser) {
        const cardsWithUser = initialCards.map((card) => ({
            ...card,
            user_id: businessUser._id,
        }));

        await Card.insertMany(cardsWithUser);
        console.log("Cards seeded");
    }
};

export default initDB;