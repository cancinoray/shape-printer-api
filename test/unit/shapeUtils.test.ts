import { expect } from 'chai';
import { CalculateArea } from '../../src/utils/shapeUtils';

describe('ShapeUtils', () => {
    describe('CalculateArea', () => {
        it('should calculate rectangle area correctly', () => {
            expect(CalculateArea('rectangle', 5)).to.equal(25);
        });

        it('should calculate triangle area correctly', () => {
            expect(CalculateArea('triangle', 5)).to.equal(12.5);
        });

        it('should calculate diamond area correctly', () => {
            expect(CalculateArea('diamond', 5)).to.equal(25);
        });
    });
});