import { Router } from "express";
import { getTasks } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
// router.post("/", createTask);

export default router;
