"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const date_r_middleware_1 = require("./date-r-middleware");
const router = (0, express_1.Router)();
router.get("/:dt", date_r_middleware_1.handleParseDateRequest);
// router.get("/hola", (req, res) => {
//   return res.send("Hola!");
// });
exports.default = router;
