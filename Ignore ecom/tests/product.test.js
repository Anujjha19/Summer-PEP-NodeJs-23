const request = require('supertest');
const app = require('../config/server');
const mongoose = require('mongoose');
const Product = require('../app/models/productModel');

beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    // Disconnect from the test database
    await mongoose.connection.close();
});

beforeEach(async () => {
    // Clear the product collection before each test
    await Product.deleteMany();
});

describe('Product API', () => {
    it('should create a new product', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                name: 'Product 1',
                description: 'This is product 1',
                price: 9.99,
                quantity: 10,
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.name).toEqual('Product 1');
        // Add more assertions as needed
    });

    it('should retrieve all products', async () => {
        await Product.create([
            {
                name: 'Product 1',
                description: 'This is product 1',
                price: 9.99,
                quantity: 10,
            },
            {
                name: 'Product 2',
                description: 'This is product 2',
                price: 19.99,
                quantity: 5,
            },
        ]);

        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
        // Add more assertions as needed
    });

    it('should retrieve a specific product by ID', async () => {
        const createdProduct = await Product.create({
            name: 'Product 1',
            description: 'This is product 1',
            price: 9.99,
            quantity: 10,
        });

        const res = await request(app).get(`/api/products/${createdProduct._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Product 1');
        // Add more assertions as needed
    });

    it('should update an existing product', async () => {
        const createdProduct = await Product.create({
            name: 'Product 1',
            description: 'This is product 1',
            price: 9.99,
            quantity: 10,
        });

        const res = await request(app)
            .put(`/api/products/${createdProduct._id}`)
            .send({
                name: 'Updated Product',
                description: 'This is the updated product',
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Updated Product');
        // Add more assertions as needed
    });

    it('should delete an existing product', async () => {
        const createdProduct = await Product.create({
            name: 'Product 1',
            description: 'This is product 1',
            price: 9.99,
            quantity: 10,
        });

        const res = await request(app).delete(`/api/products/${createdProduct._id}`);
        expect(res.statusCode).toEqual(204);

        const deletedProduct = await Product.findById(createdProduct._id);
        expect(deletedProduct).toBeNull();
    });
});
