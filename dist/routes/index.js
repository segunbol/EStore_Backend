"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const healthChecker = (0, express_1.Router)();
healthChecker.get('/', (_req, res) => res.json({ title: 'PMS - TARGET & GOAL SERVICE' }));
healthChecker.get('/health', (_req, res) => {
    const isHealthy = mongoose_1.default.connection.readyState === 1;
    if (isHealthy) {
        return res.status(200).json({
            successs: true,
            messsage: 'PMS  TARGET & GOAL SERVICE works properly',
            vesion: '1.0.0',
        });
    }
    return res.status(503).json({
        successs: false,
        messsage: `PMS  TARGET & GOAL SERVICE does not works properly. mongoose connection state is ${mongoose_1.default.connection.readyState}`,
    });
});
module.exports = healthChecker;
