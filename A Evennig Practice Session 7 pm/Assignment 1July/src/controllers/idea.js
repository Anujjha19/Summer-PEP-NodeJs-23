const Idea = require('../models/Idea');

const createIdea = async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.userId;

        const idea = new Idea({ title, description, user: userId });
        await idea.save();

        res.status(201).json({ message: 'Idea created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateIdea = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const userId = req.userId;

        const idea = await Idea.findOneAndUpdate(
            { _id: id, user: userId },
            { title, description },
            { new: true }
        );

        if (!idea) {
            return res.status(404).json({ error: 'Idea not found' });
        }

        res.status(200).json({ message: 'Idea updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteIdea = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;

        const idea = await Idea.findOneAndDelete({ _id: id, user: userId });

        if (!idea) {
            return res.status(404).json({ error: 'Idea not found' });
        }

        res.status(200).json({ message: 'Idea deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createIdea, updateIdea, deleteIdea };
