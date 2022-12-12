import { Router } from "express";
import { handleParseDateRequest } from "./date-r-middleware";

const router = Router();

router.get("/:dt", handleParseDateRequest);

export default router;
