const note = require("../model/notes");

const createNote = async (req, res)=>{
    const { title, body } = req.body;
    if(title && body){
        const result = note.create({title, body})
        if (result){
            res.status(200).json({message: "note created"})
            console.log(result)
        }else{
            res.status(404).json({message: error})
        }
    }else{
        res.json({message: "Cannot save empty note"})
    }
}

const readNote = (req,res)=>{
    const notes = req.params.id;

    note.findById(notes)
    .then((result)=>{
        res.status(200).json({"title": result.title, "note": result.body})
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })
}

const updateNote = (req,res)=>{
    const notes = req.params.id;
    const newNote = req.body

    note.findByIdAndUpdate(notes, newNote, {new:true})
    .then((result)=>{
        res.status(200).send(result)
    })
    .catch((error)=>{
        console.log(error)
    })
}

const deleteNote = (req, res)=>{
    const notes = req.params.id;

    note.findByIdAndDelete(notes)
    .then((result) =>{
        res.status(200).json({message: "note deleted"})
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports= {createNote, readNote, deleteNote, updateNote}