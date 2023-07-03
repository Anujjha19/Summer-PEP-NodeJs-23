const Idea = require('../models/Idea');

const getAllIdeas = async (req, res) => {
    try {
        const ideas = await Idea.find().populate('user', 'name email');

        res.status(200).json({ ideas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getAllIdeas };
