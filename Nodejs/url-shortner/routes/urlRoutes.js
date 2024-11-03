import express from "express";
import {
  generateShortURL,
  getAnalytics,
} from "../controllers/urlControllers.js";

const router = express.Router();

router.post("/", generateShortURL);

router.get("/analytics/:shortId", getAnalytics);

export default router;
