const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const note = new Schema(
    {
        room:{
            type:String,
        },
        interviewer:{
            type:String,
        },
        note:{
            type:String,
        }

    },{
        timestamps:true
    },
    {
        collection:"notes"
    }
)

module.exports = mongoose.model("note",note);