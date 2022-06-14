"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Config_1 = __importDefault(require("../Config"));
const mongooseDB_URI = Config_1.default.NODE_ENV === "development"
    ? `mongodb://${Config_1.default.DB_URL}/${Config_1.default.DB_NAME}`
    : `mongodb+srv://${Config_1.default.DB_USER}:${Config_1.default.DB_PASSWORD}@${Config_1.default.DB_URL}/${Config_1.default.DB_NAME}?retryWrites=true&w=majority`;
// const mongooseConfig = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// };
mongoose_1.default
    .connect(mongooseDB_URI)
    .then(() => console.log("Connection Successful."))
    .catch((err) => console.log("Connection Failed, ", err.message));
mongoose_1.default.connection.on("connected", () => {
    console.log("Mongoose connected to Database");
});
mongoose_1.default.connection.on("error", (err) => {
    console.log("Mongoose connection error", err.message);
});
mongoose_1.default.connection.on("disconnected", () => {
    console.log("Mongoose disconnected from Database");
});
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
    process.exit(0);
}));
