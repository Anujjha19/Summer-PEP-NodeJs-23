const mongoose = require( 'mongoose')

const userSchema = new mongoose.Schema ( {
    name: {
        type: String,
        required: [true ," Please add an unsername" ],
        unique :false
    },
    email :{
        type: String,
        required : [true , " Please Provide an email"],
        unique: [true , " Unique Email please"]
    },
    password:{
        type:String,
        required : [true , "Pleas provide a Password "],
        unique : false
	},
    phone: {
        type: Number,
    }
    
})

//If Exist then add in tht otherwsie create it 
module.exports = mongoose.model.Users || mongoose.model("Users" , userSchema);