const mongoose = require('mongoose');
const User = require('../models/user');
const Project = require('../models/project');

describe('Mongoose Models Validation', () => {
  beforeAll(async () => {
    const url = 'mongodb://127.0.0.1/test-db';
    await mongoose.connect(url);
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  test('User model should require email and password', async () => {
    const user = new User({ role: 'user' });
    let err = user.validateSync();
    expect(err.errors.email).toBeDefined();
    expect(err.errors.password).toBeDefined();
  });

  test('User model should restrict roles to enum values', async () => {
    const user = new User({
      email: 'test@test.com',
      password: 'password123',
      role: 'invalidRole'
    });
    let err = user.validateSync();
    expect(err.errors.role).toBeDefined();
  });

  test('Project model should require all fields', async () => {
    const project = new Project({});
    let err = project.validateSync();
    expect(err.errors.imageUrl).toBeDefined();
    expect(err.errors.title).toBeDefined();
    expect(err.errors.appUrl).toBeDefined();
    expect(err.errors.techno).toBeDefined();
    expect(err.errors.description).toBeDefined();
    expect(err.errors.userId).toBeDefined();
  });
});