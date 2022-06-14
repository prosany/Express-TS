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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./Config/index"));
// Datbase Connection
require("./Utils/DatabaseConfigrations");
// Initialize the app
const app = (0, express_1.default)();
// Enable CORS for all requests
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("Public"));
// Common Route
app.get("/", (req, res, next) => {
    res.send({
        status: 1,
        message: "🎉 Congratulations! SurVideo Server is Up and Running 🎉",
    });
});
// Import Routes
app.use("/api", require("./Routes/Auth.Route").default);
// Error Handler
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: 0,
        message: err.message,
    });
};
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    next(new http_errors_1.default.NotFound());
}));
app.use(errorHandler);
const server = app.listen(index_1.default.PORT, () => console.log(`🎉 Server running at http://localhost:${index_1.default.PORT}`));
