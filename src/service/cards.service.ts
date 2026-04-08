import Card from "../models/card";

class CardsService {
    async getAllCards() {
        return Card.find();
    }

    async getMyCards(userId: string) {
        return Card.find({ user_id: userId });
    }

    async getCardById(id: string) {
        return Card.findById(id);
    }

    async createCard(data: any, userId: string) {
        data.user_id = userId;
        return Card.create(data);
    }

    async updateCard(id: string, data: any, userId: string) {
        return Card.findOneAndUpdate(
            { _id: id, user_id: userId },
            data,
            { new: true }
        );
    }

    async likeCard(id: string, userId: string) {
        const card = await Card.findById(id);

        if (!card) {
            throw new Error("Card not found");
        }

        const likes = card.likes.map((like: any) => like.toString());

        if (likes.includes(userId)) {
            card.likes = card.likes.filter(
                (like: any) => like.toString() !== userId
            );
        } else {
            card.likes.push(userId as any);
        }

        return card.save();
    }

    async deleteCard(id: string, userId: string) {
        return Card.findOneAndDelete({
            _id: id,
            user_id: userId,
        });
    }
}

export default new CardsService();