"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error('MongoDB connection URI is not defined in the environment variables.');
    process.exit(1); // Exit the process or handle the error accordingly
}
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => {
    console.log('Connected to the database');
})
    .catch((err) => {
    console.error('Failed to connect to the database:', err);
});
const app = (0, express_1.default)();
//Serves resources from public folder
app.use('/resources', express_1.default.static('src/public'));
app.use(errorMiddleware_1.errorMiddleware);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)('dev'));
app.listen(3000, () => {
    console.log("Wa ti ma gbor");
});
