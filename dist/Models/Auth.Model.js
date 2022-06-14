"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UUID_1 = __importDefault(require("../Helpers/UUID"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
        default: (0, UUID_1.default)(15),
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
const User = mongoose_1.default.model("user", userSchema);
exports.default = User;
//#endregion
