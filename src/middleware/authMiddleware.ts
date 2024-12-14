import Koa from 'koa';
import auth from 'basic-auth';

export const authMiddleware = async (ctx: Koa.Context, next: Koa.Next) => {
    const credentials = auth(ctx.req);

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