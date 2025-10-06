import express from "express";
import {
  getAllWorkItems,
  createWorkItem,
} from "../controllers/workItems.controller.js";

const router = express.Router();

router.get("/", getAllWorkItems);
router.post("/", createWorkItem);

export default router;
