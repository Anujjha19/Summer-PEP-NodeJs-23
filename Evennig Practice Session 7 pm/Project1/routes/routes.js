const express = require('express');
const router = express.Router();


const Model = require('../models/model')

//Post 
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
    })
    console.log({data});
    try {
        const savedData =  await data.save();
        res.status(200).json(savedData)

    } catch (error) {
        console.log({ message: error.message })
    }
    res.send(" Post API ");
})
//Get all 
router.get('/getData', (req, res) => {
    res.send(" Get All Data  API ");
})
//Get One  
router.get('/getOne/:id', (req, res) => {
    res.send(" Get Data by API " + req.params.id);
})
//Update  
router.patch('/update/:id', (req, res) => {
    res.send(" Update by ID API ");
})

//Delete  
router.delete('/delete/:id', (req, res) => {
    res.send(" Delete Data by ID API ");
})

module.exports = router;