const fs = require('fs');

const getNotes = (str) => {
    return "all your notes";
}

const addNote = (title,body) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>{
        return note.title==title;
    })

    if(duplicateNotes.length==0){
        notes.push({
            title:title,
            body:body
        })
        console.log(notes);
        saveNotes(notes);
        console.log("new note added");
    }
    else{
        console.log("note is already added");
    }

  
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []
    }

}

module.exports = {
    getNotes:getNotes,
    addNote: addNote
};