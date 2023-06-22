require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const mongoString = process.env.DB_URL;
// console.log(mongoString)

mongoose.connect(mongoString);

const database = mongoose.connection;
database.on("error", (err)=>{
    console.log(err);
});

database.once('connected' , () => {
    console.log( "DB Connected")
})


const app = express();

app.use(express.json());

const routes = require('./routes/routes')
app.use('/api', routes);

app.listen( 3000 , () => {
    console.log(`Server is running at ${3000}`)
})

/* mongodb+srv://anujjha710:20242024@anujjhadb.zmcq26w.mongodb.net/ */