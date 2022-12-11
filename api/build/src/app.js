"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const rateLimiter_1 = require("./config/rateLimiter");
const date_routes_1 = __importDefault(require("./routes/date-routes"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(rateLimiter_1.limiter);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", date_routes_1.default);
app.get("/ping", (req, res) => {
    return res.send("PONG!");
});
exports.default = app;
