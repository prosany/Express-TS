"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/login", (req, res, next) => {
    res.send("Get Login Done");
});
router.post("/login", (req, res, next) => {
    res.send("login");
});
exports.default = router;
