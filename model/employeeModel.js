const mongoose = require ("mongoose");

const employeeSchema = new mongoose.Schema({
    name : {
        type : String,

    } ,
    position : {
        type : String,

    },
    location : {
        type : String,

    },
    salary : {
        type : Number,

    }
})


module.exports = mongoose.model("Employee", employeeSchema);