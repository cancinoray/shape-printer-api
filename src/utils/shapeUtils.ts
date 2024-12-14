import { ShapeName } from '../types';

/**
 * Prints a rectangle of the specified size.
 * @param {number} size - The size of the rectangle.
 * @returns {string} The string representation of the rectangle.
 */
export function PrintRectangle(size = 5): string {
    let shape = '';
    for (let i = 0; i < size; i++) {
        shape += '*'.repeat(size) + '\n';
    }
    console.log(shape);
    return shape;
}

/**
 * Prints a triangle of the specified size.
 * @param {number} size - The size of the triangle.
 * @returns {string} The string representation of the triangle.
 */
export function PrintTriangle(size = 5): string {
    let shape = '';
    for (let i = 1; i <= size; i++) {
        shape += ' '.repeat(size - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    console.log(shape);
    return shape;
}

/**
 * Prints a diamond of the specified size.
 * @param {number} size - The size of the diamond.
 * @returns {string} The string representation of the diamond.
 */
export function PrintDiamond(size = 5): string {
    let shape = '';
    // Top half
    for (let i = 1; i <= size; i++) {
        shape += ' '.repeat(size - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    // Bottom half
    for (let i = size - 1; i > 0; i--) {
        shape += ' '.repeat(size - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    console.log(shape);
    return shape;
}

/**
 * Calculates the area of a shape given its type and size.
 * @param {ShapeName} shape - The type of shape.
 * @param {number} size - The size of the shape.
 * @returns {number} The calculated area.
 */
export function CalculateArea(shape: ShapeName, size = 5): number {
    switch (shape) {
        case 'rectangle':
            return size * size;
        case 'triangle':
            return (size * size) / 2;
        case 'diamond':
            return size * size;
        default:
            throw new Error('Invalid shape type');
    }
}
