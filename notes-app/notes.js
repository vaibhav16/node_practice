const chalk = require('chalk');
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


const removeNote = (title) =>{
    try{
        const notes = loadNotes();
        const notesToKeep = notes.filter((note)=>{
            //Creating a new array which will filter out the note to be removed
            return note.title!=title
        });

        if(notes.length>notesToKeep.length && notesToKeep.length>0){
            saveNotes(notesToKeep);
            console.log(chalk.green.inverse("note removed!!!!"))
        }
        else{
            console.log(chalk.red.inverse("no such note found"))
        }
    }
    catch(e){
        console.log("error: ",e);
    }
}

module.exports = {
    getNotes:getNotes,
    addNote: addNote,
    removeNote:removeNote
};