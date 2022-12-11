import { Router } from "express";
import { handleParseDateRequest } from "./date-r-middleware";

const router = Router();

router.get("/:dt", handleParseDateRequest);

// router.get("/hola", (req, res) => {
//   return res.send("Hola!");
// });

export default router;
