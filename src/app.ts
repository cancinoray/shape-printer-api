import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';

import { authMiddleware } from './middleware/authMiddleware';
import { PrintShape } from './controllers/shapeController';

// Load environment variables
dotenv.config();

const app = new Koa();
const router = new Router();

// Middleware
app.use(bodyParser());

// Routes
router.get('/shape/:shape',
    authMiddleware,
    PrintShape
);

// Apply routes
app.use(router.routes())
    .use(router.allowedMethods());

// Start server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default server;