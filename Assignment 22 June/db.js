// db.js

const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017'; // MongoDB connection URL
const dbName = 'restful-api'; // Your database name

let db = null;

async function connect() {
    try {
        const client = await MongoClient.connect(url);
        db = client.db(dbName);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1); // Exit with failure
    }
}

function getDb() {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
}

module.exports = {
    connect,
    getDb,
};
