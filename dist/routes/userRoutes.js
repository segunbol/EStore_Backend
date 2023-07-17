"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authentication_1 = require("../middlewares/authentication");
const userRoutes = express_1.default.Router();
userRoutes
    .post('/', userController_1.createUser)
    .get('/', userController_1.getUsers)
    .get('/:userId', userController_1.getUser)
    .patch('/adminusers/:userId', userController_1.makeAdmin)
    .patch('/:userID', authentication_1.authenticate, userController_1.updateUser);
module.exports = userRoutes;
