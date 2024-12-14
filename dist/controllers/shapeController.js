"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintShape = PrintShape;
const shapeUtils_1 = require("../utils/shapeUtils");
/**
 * Handles the shape printing logic and returns the result.
 * @param {ShapeContext} ctx - The context object containing parameters and request data.
 */
async function PrintShape(ctx) {
    const shape = ctx.params.shape;
    const times = parseInt(ctx.query.times || '1', 10);
    const size = parseInt(ctx.request.body?.size || '5', 10);
    // Validate shape
    const validShapes = ['rectangle', 'triangle', 'diamond'];
    if (!validShapes.includes(shape)) {
        ctx.status = 400;
        ctx.body = { error: 'Invalid shape' };
        return;
    }
    try {
        // Print shape multiple times
        for (let i = 0; i < times; i++) {
            switch (shape) {
                case 'rectangle':
                    (0, shapeUtils_1.PrintRectangle)(size);
                    break;
                case 'triangle':
                    (0, shapeUtils_1.PrintTriangle)(size);
                    break;
                case 'diamond':
                    (0, shapeUtils_1.PrintDiamond)(size);
                    break;
            }
        }
        // Calculate and return area
        const area = (0, shapeUtils_1.CalculateArea)(shape, size);
        const responseBody = {
            shape,
            times,
            area
        };
        ctx.body = responseBody;
    }
    catch (error) {
        ctx.status = 500;
        ctx.body = { error: 'Internal Server Error' };
    }
}
