const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('burgers routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/burgers should return a list of burgers', async () => {
    const resp = await request(app).get('/burgers');
    expect(resp.body.length).toEqual(8);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),  
      name: expect.any(String),
    });
  });

  it('/burgers/:id should return burger detail', async () => {
    const resp = await request(app).get('/burgers/1');
    expect(resp.body).toEqual({
      id: '1',
      name: 'New Bacon-ings',
      season: 1,
      episode: 1
    });
  });
  afterAll(() => {
    pool.end();
  });
});
