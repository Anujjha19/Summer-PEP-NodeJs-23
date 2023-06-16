const mongoose = require('mongoose')
require('dotenv').config();

async function dbConnect (){
    mongoose.connect(process.env.DB_URL ).then( () => console.log( "DB Connected  ->  Connection Successfull "))
    .catch( error => console.log( 'Error ' , error ))
}

module.exports= dbConnect