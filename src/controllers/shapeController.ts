import { ShapeContext, ShapeResponseBody } from '../types';
import { PrintRectangle,  PrintTriangle, PrintDiamond, CalculateArea} from '../utils/shapeUtils';

/**
 * Handles the shape printing logic and returns the result.
 * @param {ShapeContext} ctx - The context object containing parameters and request data.
 */
export async function PrintShape(ctx: ShapeContext) {
    const shape = ctx.params.shape;
    const times = parseInt(ctx.query.times || '1', 10);
    const size = parseInt((ctx.request.body as any)?.size || '5', 10);

    // Validate shape
    const validShapes = ['rectangle', 'triangle', 'diamond'];
    if (!validShapes.includes(shape)) {
        console.log('Invalid shape');
        ctx.status = 400;
        ctx.body = { error: 'Invalid shape' };
        return;
    }

    try {
        // Print shape multiple times
        for (let i = 0; i < times; i++) {
            switch (shape) {
                case 'rectangle':
                    PrintRectangle(size);
                    break;
                case 'triangle':
                    PrintTriangle(size);
                    break;
                case 'diamond':
                    PrintDiamond(size);
                    break;
            }
        }

        // Calculate and return area
        const area = CalculateArea(shape, size);
        const responseBody: ShapeResponseBody = {
            shape,
            times,
            area
        };

        ctx.body = responseBody;
    } catch (error) {
        ctx.status = 500;
        ctx.body = { error: 'Internal Server Error' };
    }
}
