const request = require('supertest');
const app = require('../config/server');
const mongoose = require('mongoose');
const Order = require('../app/models/orderModel');

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
    await Order.deleteMany();
});

describe('Order API', () => {
    it('should create a new order', async () => {
        const res = await request(app)
            .post('/api/orders')
            .send({
                user: '1234567890',
                products: ['0987654321'],
                quantity: 2,
                totalPrice: 19.98,
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.quantity).toEqual(2);
        // Add more assertions as needed
    });

    it('should retrieve all orders', async () => {
        await Order.create([
            {
                user: '1234567890',
                products: ['0987654321'],
                quantity: 2,
                totalPrice: 19.98,
            },
            {
                user: '0987654321',
                products: ['1234567890'],
                quantity: 1,
                totalPrice: 9.99,
            },
        ]);

        const res = await request(app).get('/api/orders');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
        // Add more assertions as needed
    });

    it('should retrieve a specific order by ID', async () => {
        const createdOrder = await Order.create({
            user: '1234567890',
            products: ['0987654321'],
            quantity: 2,
            totalPrice: 19.98,
        });

        const res = await request(app).get(`/api/orders/${createdOrder._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.quantity).toEqual(2);
        // Add more assertions as needed
    });

    it('should update an existing order', async () => {
        const createdOrder = await Order.create({
            user: '1234567890',
            products: ['0987654321'],
            quantity: 2,
            totalPrice: 19.98,
        });

        const res = await request(app)
            .put(`/api/orders/${createdOrder._id}`)
            .send({
                quantity: 3,
                totalPrice: 29.97,
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body.quantity).toEqual(3);
        // Add more assertions as needed
    });

    it('should delete an existing order', async () => {
        const createdOrder = await Order.create({
            user: '1234567890',
            products: ['0987654321'],
            quantity: 2,
            totalPrice: 19.98,
        });

        const res = await request(app).delete(`/api/orders/${createdOrder._id}`);
        expect(res.statusCode).toEqual(204);

        const deletedOrder = await Order.findById(createdOrder._id);
        expect(deletedOrder).toBeNull();
    });
});
