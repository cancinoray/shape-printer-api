"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintRectangle = PrintRectangle;
exports.PrintTriangle = PrintTriangle;
exports.PrintDiamond = PrintDiamond;
exports.CalculateArea = CalculateArea;
/**
 * Prints a rectangle of the specified size.
 * @param {number} size - The size of the rectangle.
 * @returns {string} The string representation of the rectangle.
 */
function PrintRectangle(size = 5) {
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
function PrintTriangle(size = 5) {
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
function PrintDiamond(size = 5) {
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
function CalculateArea(shape, size = 5) {
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
