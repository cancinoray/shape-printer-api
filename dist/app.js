"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("@koa/router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const dotenv_1 = __importDefault(require("dotenv"));
const authMiddleware_1 = require("./middleware/authMiddleware");
const shapeController_1 = require("./controllers/shapeController");
// Load environment variables
dotenv_1.default.config();
const app = new koa_1.default();
const router = new router_1.default();
// Middleware
app.use((0, koa_bodyparser_1.default)());
// Routes
router.get('/shape/:shape', authMiddleware_1.authMiddleware, shapeController_1.PrintShape);
// Apply routes
app.use(router.routes())
    .use(router.allowedMethods());
// Start server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
exports.default = server;
