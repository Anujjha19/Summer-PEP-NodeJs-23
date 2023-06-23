const express = require('express');
const router = express.Router();


const Model = require('../models/model')

//Post 
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    console.log({ data })
    try {
        const savedData = await data.save();
        res.status(200).json(savedData)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all 
router.get('/getData', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
    res.send(" Get All Data  API ");
})
//Get One  
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id)
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    res.send(" Get Data by API " + req.params.id);
})

//Update  
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(id, updatedData, options);
        res.send(result);

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    res.send(" Update by ID API ");
})
//Delete  

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const del = await Model.findByIdAndDelete(id)
        res.send(del);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})



module.exports = router;