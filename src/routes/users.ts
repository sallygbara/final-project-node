import { Router } from "express";
import usersService from "../service/users.service";
import {
    validateLogin,
    validateUser,
    validateIsAdmin,
    isOwnerOrAdmin,
    validateUserUpdate,
} from "../middleware";


const router = Router();


router.post("/", validateUser, async (req, res) => {
    const user = await usersService.registerUser(req.body);
    res.status(201).json(user);
});

router.post("/login", validateLogin, async (req, res) => {
    const token = await usersService.login(req.body);
    res.json(token);
});

router.get("/", validateIsAdmin, async (req, res) => {
    const users = await usersService.getAllUsers();
    res.json(users);
});

router.get("/:id", isOwnerOrAdmin, async (req, res) => {
    const user = await usersService.getUserById(req.params.id as string);
    res.json(user);
});

router.put("/:id", validateUserUpdate, async (req, res) => {
    const user = await usersService.updateUser(
        req.params.id as string,
        req.body
    );
    res.json(user);
});

router.patch("/:id", async (req, res) => {
    const user = await usersService.changeBusinessStatus(
        req.params.id as string
    );
    res.json(user);
});

router.delete("/:id", isOwnerOrAdmin, async (req, res) => {
    const user = await usersService.deleteUser(req.params.id as string);
    res.json(user);
});

export { router as usersRouter };
export default router;

