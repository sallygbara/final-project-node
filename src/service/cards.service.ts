import {Card } from "../database/models.js";

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

    async updateCard(id: string, data: any) {
        return Card.findByIdAndUpdate(id, data, { new: true });
    }

    async likeCard(id: string, userId: string) {
        const card = await Card.findById(id);
        if (!card) throw new Error("Card not found");

        const liked = card.likes.includes(userId);

        if (liked) {
            card.likes = card.likes.filter(
                (likedUserId: string) => likedUserId !== userId
            );
        } else {
            card.likes.push(userId);
        }

        return card.save();
    }

    async deleteCard(id: string) {
        return Card.findByIdAndDelete(id);
    }
}

export default new CardsService();