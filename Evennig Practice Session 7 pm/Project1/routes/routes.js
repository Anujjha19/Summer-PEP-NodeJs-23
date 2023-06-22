const express  = require('express');
const router = express.Router();


//Post 
router.post('/post' , (req,res) => {
    res.send(" Post API ");
})
//Get all 
router.get('/getData' , (req,res) => {
    res.send(" Get All Data  API ");
})
//Get One  
router.get('/getOne/:id' , (req,res) => {
    res.send(" Get Data by API " + req.params.id );
})
//Update  
router.patch('/update/:id' , (req,res) => {
    res.send(" Update by ID API ");
})

//Delete  
router.delete('/delete/:id' , (req,res) => {
    res.send(" Delete Data by ID API ");
})

module.exports = router;