"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNotFoundResponse = exports.errorMiddleware = void 0;
const errorMiddleware = async (_req, res, next) => {
    try {
        await next();
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
exports.errorMiddleware = errorMiddleware;
const pageNotFoundResponse = async (_req, res) => {
    res.status(404).json({
        success: false,
        message: 'Page not found'
    });
};
exports.pageNotFoundResponse = pageNotFoundResponse;
