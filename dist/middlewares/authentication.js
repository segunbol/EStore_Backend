"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccess = exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jsonwebtoken_1.default.verify(token, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                res.status(403).send({ success: false, message: 'Invalid Token' });
            }
            else {
                req.user = decode;
                next();
            }
        });
    }
    else {
        res.status(403).send({ success: false, message: 'No Token' });
    }
};
exports.authenticate = authenticate;
const verifyAccess = async (req, access) => {
    if (req.user) {
        // allow access if user is a super admin
        // allow access if user trying to perform the action is not an admin but is a company
        if (req.user.isAdmin || req.user.isCompanyAdmin) {
            return true;
        }
        // Allow riders to view, start and stop adhocs
        if (req.user.userType.toLowerCase() === "rider") {
            const adhocsArray = ['view_adhocs', 'start_adhocs', 'end_adhocs'];
            return adhocsArray.some(item => access.includes(item));
        }
        const { role_id } = req.user;
        if (role_id) {
            const { isAdmin } = role_id;
            if (isAdmin) {
                return access.some((key) => isAdmin);
            }
        }
    }
    return false;
};
exports.verifyAccess = verifyAccess;
