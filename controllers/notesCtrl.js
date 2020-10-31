const Note = require('../database/schema/note');

module.exports.getNote = (req,res)=>{
    const id = req.user.id;
    const room = req.headers.room;

    Note.findOne({interviewer:id,room:room})
    .then((doc)=>{
        return res.status(200).json({
            success:true,
            note:doc,
        })
    }).catch((err)=>{
        return res.status(500).json({
            success:false,
            msg:"Intenal Server Error!",
        })
    })
}

module.exports.updateNote = async (req,res)=>{
    const id = req.user.id;
    const room = req.headers.room;
    const value = req.body.note;

    try{
        const note = await Note.findOne({interviewer:id,room:room});

        if(note== null){
            const newNote = new Note({room:room,interviewer:id,note:value});
            await newNote.save();

            return res.status(200).json({
                success:true,
                msg:update,
            })
        }else{
            await Note.updateOne({interviewer:id,room:room},{note:value});
            return res.status(200).json({
                success:true,
                msg:"Updated Successfully!",
            })
        }

    }catch(err){
        console.log("Error",err);
        return res.status(500).json({
            success:false,
            msg:"Intenal Server Error!",
        })
    }
    
}
