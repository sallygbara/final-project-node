import { Router } from "express";
import cardsService from "../service/cards.service";
import {
    isBusiness,
    validateCard,
    validateToken,
} from "../middleware";

const router = Router();
// GET all cards
router.get("/", async (req, res) => {
    const cards = await cardsService.getAllCards();
    res.json(cards);
});

// CREATE card
router.post("/", validateCard, isBusiness, async (req, res) => {
    const userId = (req.user?._id ?? "") as string;

    const card = await cardsService.createCard(req.body, userId);

    res.json({ card });
});

// GET my cards
router.get("/my-cards", validateToken, async (req, res) => {
    const userId = (req.user?._id ?? "") as string;

    const cards = await cardsService.getMyCards(userId);

    res.json({ cards });
});

// GET single card
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const card = await cardsService.getCardById(id);

    res.json({ card });
});

export { router as cardsRouter };