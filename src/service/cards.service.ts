import { Card } from "../database/models.js";
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

        const likes = (card as any).likes as string[];

        const liked = likes.includes(userId);

        if (liked) {
            (card as any).likes = likes.filter(
                (likedUserId) => likedUserId !== userId
            );
        } else {
            likes.push(userId);
            (card as any).likes = likes;
        }

        return card.save();
    }

    async deleteCard(id: string) {
        return Card.findByIdAndDelete(id);
    }
}

export default new CardsService();