const mongoose = require('mongoose')
const UsermasterSchema = mongoose.Schema({
    fullname:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""

    },
    stateofresidence:{
        type:String,
        default:""
    },
    bio:{
        type:String,
        default:""

    },
    standard:{
        type:String,
        default:""
    },
    board:{
        type:String,
        default:""
    },
    mobilenumber:{
    type:Number,
    default:""
},
otp:{
    type:Number,
    default:""
},

})

module.exports = mongoose.model('Usermaster',UsermasterSchema,)