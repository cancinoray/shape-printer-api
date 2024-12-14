"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const basic_auth_1 = __importDefault(require("basic-auth"));
const authMiddleware = async (ctx, next) => {
    const credentials = (0, basic_auth_1.default)(ctx.req);
    // Simple hardcoded credentials (in a real app, use environment variables or a database)
    const validUsername = process.env.API_USERNAME || 'admin';
    const validPassword = process.env.API_PASSWORD || 'password';
    if (!credentials ||
        credentials.name !== validUsername ||
        credentials.pass !== validPassword) {
        ctx.status = 401;
        ctx.body = { error: 'Unauthorized' };
        return;
    }
    await next();
};
exports.authMiddleware = authMiddleware;
