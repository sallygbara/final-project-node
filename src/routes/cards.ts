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
router.post("/", validateToken, validateCard, isBusiness, async (req, res) => {
    const userId = req.user!._id as string;
    const card = await cardsService.createCard(req.body, userId);
    res.status(201).json(card);
});

// GET my cards
router.get("/my-cards", validateToken, async (req, res) => {
    const userId = req.user!._id as string;
    const cards = await cardsService.getMyCards(userId);
    res.json(cards);
});

// GET single card
router.get("/:id", async (req, res) => {
    const id = req.params.id as string;
    const card = await cardsService.getCardById(id);
    res.json(card);
});

// UPDATE card
router.put("/:id", validateToken, validateCard, async (req, res) => {
    const id = req.params.id as string;

    const updatedCard = await cardsService.updateCard(
        id,
        req.body,
        req.user!._id as string
    );

    res.json(updatedCard);
});

// LIKE / UNLIKE card
router.patch("/:id", validateToken, async (req, res) => {
    const id = req.params.id as string;

    const card = await cardsService.likeCard(
        id,
        req.user!._id as string
    );

    res.json(card);
});

// DELETE card
router.delete("/:id", validateToken, async (req, res) => {
    const id = req.params.id as string;

    const deletedCard = await cardsService.deleteCard(
        id,
        req.user!._id as string
    );

    res.json(deletedCard);
});

export { router as cardsRouter };
export default router;