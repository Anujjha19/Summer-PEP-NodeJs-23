const express = require('express');
const { getAllIdeas } = require('../controllers/admin');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/ideas', verifyToken, getAllIdeas);

module.exports = router;
