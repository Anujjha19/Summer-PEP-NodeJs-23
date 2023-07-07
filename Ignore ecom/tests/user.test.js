const request = require('supertest');
const app = require('../config/server');
const mongoose = require('mongoose');
const User = require('../app/models/userModel');

beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

beforeEach(async () => {
    await User.deleteMany();
});

describe('User API', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: '123456',
                address: '123 Main St',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.name).toEqual('John Doe');
        // Add more assertions as needed
    });

    it('should retrieve all users', async () => {
        await User.create([
            {
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: '123456',
                address: '123 Main St',
            },
            {
                name: 'Jane Smith',
                email: 'janesmith@example.com',
                password: '654321',
                address: '456 Elm St',
            },
        ]);

        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
        // Add more assertions as needed
    });

    it('should retrieve a specific user by ID', async () => {
        const createdUser = await User.create({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
            address: '123 Main St',
        });

        const res = await request(app).get(`/api/users/${createdUser._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('John Doe');
        // Add more assertions as needed
    });

    it('should update an existing user', async () => {
        const createdUser = await User.create({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
            address: '123 Main St',
        });

        const res = await request(app)
            .put(`/api/users/${createdUser._id}`)
            .send({
                name: 'John Updated',
                email: 'johndoe_updated@example.com',
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('John Updated');
        // Add more assertions as needed
    });

    it('should delete an existing user', async () => {
        const createdUser = await User.create({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
            address: '123 Main St',
        });

        const res = await request(app).delete(`/api/users/${createdUser._id}`);
        expect(res.statusCode).toEqual(204);

        const deletedUser = await User.findById(createdUser._id);
        expect(deletedUser).toBeNull();
    });
});
