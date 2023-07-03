const express = require('express');
const { createIdea, updateIdea, deleteIdea } = require('../controllers/idea');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/ideas', verifyToken, createIdea);
router.put('/ideas/:id', verifyToken, updateIdea);
router.delete('/ideas/:id', verifyToken, deleteIdea);

module.exports = router;
