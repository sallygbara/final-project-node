import { Router } from "express";
import cardsService from "../service/cards.service";
import {
    isBusiness,
    validateCard,
    validateToken,
} from "../middleware";

const router = Router();

router.get("/", async (req, res) => {
    const cards = await cardsService.getAllCards();
    res.json(cards);
});

router.post("/", validateToken, validateCard, isBusiness, async (req, res) => {
    const userId = req.user!._id as string;

    const card = await cardsService.createCard(req.body, userId);

    res.status(201).json(card);
});

router.get("/my-cards", validateToken, async (req, res) => {
    const userId = req.user!._id as string;

    const cards = await cardsService.getMyCards(userId);

    res.json(cards);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const card = await cardsService.getCardById(id);

    res.json(card);
});

export { router as cardsRouter };
export default router;