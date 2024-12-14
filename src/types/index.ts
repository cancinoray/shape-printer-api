import Koa from 'koa';

export type ShapeName = 'rectangle' | 'triangle' | 'diamond';

export interface ShapeContext extends Koa.Context {
    params: {
        shape: ShapeName;
    };
    query: {
        times?: string;
    };
}

export interface ShapeRequestBody {
    size?: number;
}

export interface ShapeResponseBody {
    shape: ShapeName;
    times: number;
    area: number;
}