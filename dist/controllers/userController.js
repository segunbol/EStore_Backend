"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const userValidator_1 = require("../validators/userValidator");
// Create user
const createUser = async (req, res) => {
    try {
        const { error, value } = userValidator_1.createUserSchema.body.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }
        const { first_name, last_name, email, passwordHash, phone, isAdmin, apartment, street, zip, city, country } = value;
        // create feedback
        const newUser = await user_1.default.create({
            first_name, last_name, email, passwordHash, phone, isAdmin, apartment, street, zip, city, country,
        });
        //TODO send email notification to User
        return res.status(200).json({
            success: true,
            newUser,
            message: 'Welcome on board',
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
exports.createUser = createUser;
