/* // server.js

const express = require('express');
const { ObjectID } = require('mongodb');
const { connect, getDb } = require('./db');

const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the RESTful API!');
});


// GET /students
app.get('/students', async (req, res) => {
    try {
        const db = getDb();
        const students = await db.collection('students').find().toArray();
        res.json(students);
    } catch (error) {
        console.error('Error fetching students', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /students/:id
app.get('/students/:id', async (req, res) => {
    try {
        const db = getDb();
        const student = await db
            .collection('students')
            .findOne({ _id: ObjectID(req.params.id) });

        if (!student) {
            res.status(404).json({ error: 'Student not found' });
        } else {
            res.json(student);
        }
    } catch (error) {
        console.error('Error fetching student', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /students
app.post('/students', async (req, res) => {
    try {
        const db = getDb();
        const { name, age, grade } = req.body;

        if (!name || !age || !grade) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        const result = await db.collection('students').insertOne({
            name,
            age,
            grade,
        });

        res.json(result.ops[0]);
    } catch (error) {
        console.error('Error creating student', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT /students/:id
app.put('/students/:id', async (req, res) => {
    try {
        const db = getDb();
        const { name, age, grade } = req.body;

        if (!name || !age || !grade) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        const result = await db.collection('students').findOneAndUpdate(
            { _id: ObjectID(req.params.id) },
            { $set: { name, age, grade } },
            { returnOriginal: false }
        );

        if (!result.value) {
            res.status(404).json({ error: 'Student not found' });
        } else {
            res.json(result.value);
        }
    } catch (error) {
        console.error('Error updating student', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE /students/:id
app.delete('/students/:id', async (req, res) => {
    try {
        const db = getDb();
        const result = await db.collection('students').deleteOne({
            _id: ObjectID(req.params.id),
        });

        if (result.deletedCount === 0) {
            res.status(404).json({ error: 'Student not found' });
        } else {
            res.json({ message: 'Student deleted successfully' });
        }
    } catch (error) {
        console.error('Error deleting student', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
connect().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
 */


const express = require('express');
const { ObjectID } = require('mongodb');
const { connect, getDb } = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

// GET /students
app.get('/students', async (req, res) => {
    try {
        const db = getDb();
        const students = await db.collection('students').find().toArray();
        res.json(students);
    } catch (error) {
        console.error('Error fetching students', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /students/:id
app.get('/students/:id', async (req, res) => {
    try {
        const db = getDb();
        const student = await db
            .collection('students')
            .findOne({ _id: ObjectID(req.params.id) });

        if (!student) {
            res.status(404).json({ error: 'Student not found' });
        } else {
            res.json(student);
        }
    } catch (error) {
        console.error('Error fetching student', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /students
app.post('/students', async (req, res) => {
    try {
        const db = getDb();
        const { name, age, grade } = req.body;
        if (!name || !age || !grade) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }
        const result = await db.collection('students').insertOne({
            name,
            age,
            grade,
        });
        if (result && result.result.ok === 1) {
            res.json(result.ops[0]);
        } else {
            throw new Error('Failed to insert student');
        }
    } catch (error) {
        console.error('Error creating student', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// PUT /students/:id
app.put('/students/:id', async (req, res) => {
    try {
        const db = getDb();
        const { name, age, grade } = req.body;

        if (!name || !age || !grade) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        const result = await db.collection('students').findOneAndUpdate(
            { _id: ObjectID(req.params.id) },
            { $set: { name, age, grade } },
            { returnOriginal: false }
        );

        if (!result.value) {
            res.status(404).json({ error: 'Student not found' });
        } else {
            res.json(result.value);
        }
    } catch (error) {
        console.error('Error updating student', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE /students/:id
app.delete('/students/:id', async (req, res) => {
    try {
        const db = getDb();
        const result = await db.collection('students').deleteOne({
            _id: ObjectID(req.params.id),
        });

        if (result.deletedCount === 0) {
            res.status(404).json({ error: 'Student not found' });
        } else {
            res.json({ message: 'Student deleted successfully' });
        }
    } catch (error) {
        console.error('Error deleting student', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
connect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to database', error);
    });
