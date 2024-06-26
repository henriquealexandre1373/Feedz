import request from 'supertest';
import { app } from '@src/index';

describe('Create Publication Tests', () => {
  it('must be a create publication --success-case', async () => {
    const { status, body } = await request(app).post('/publications').send({
      title: 'Test Title',
      description: 'Test Description',
      author: 'Test Author',
    });
    expect(status).toBe(200);
    expect(body).toStrictEqual({
      title: 'Test Title',
      description: 'Test Description',
      author: 'Test Author',
    });
  });
});
