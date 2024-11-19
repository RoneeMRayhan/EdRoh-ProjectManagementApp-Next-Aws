import { Router } from "express";

import { getUsers, postUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);
// router.post("/create-user", postUser);

export default router;
