import { expect } from 'chai';
import request from 'supertest';
import server from '../../src/app';

describe('Shape Printer API', () => {
    after(() => {
        server.close();
    });

    const validCredentials = 'Basic ' + Buffer.from('admin:password').toString('base64');

    it('should return area for rectangle', async () => {
        const response = await request(server)
            .get('/shape/rectangle')
            .set('Authorization', validCredentials);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('shape', 'rectangle');
        expect(response.body).to.have.property('area', 25);
    });

    it('should reject unauthorized requests', async () => {
        const response = await request(server)
            .get('/shape/triangle');

        expect(response.status).to.equal(401);
    });
});