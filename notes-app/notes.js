const chalk = require('chalk');
const fs = require('fs');

const getNotes = (str) => {
    return "all your notes";
}

const addNote = (title,body) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note=>note.title==title);
    const duplicateNote = notes.find(note=> note.title==title);

    if(!duplicateNote){
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

        //Creating a new array which will filter out the note to be removed
        const notesToKeep = notes.filter(note=> note.title!=title);

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



const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.green.inverse("Your Notes"))
    notes.forEach((note)=>console.log((note.title)))
}

const readNote = (title) =>{
    const notes =  loadNotes();
    let note = notes.find(note=>note.title==title);
    if(note){
        console.log(chalk.inverse("Note Title: ",note.title));
        console.log("Note Body: ",note.body)
    }
    else{
        console.log(chalk.red.inverse("No note found!!"))
    }
}
 
module.exports = {
    getNotes:getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
};