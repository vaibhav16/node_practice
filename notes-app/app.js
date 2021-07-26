const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');

yargs.command({
    //To Run -> Use Command - node app add --title="shopping list" --body "tomato, onion, carrot"
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title,argv.body)
        // console.log("Title: ",argv.title);
        // console.log("Body: ",argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: ()=>{
        console.log("removing a note")
    }
})


yargs.command({
    command:'list',
    describe:'listing notes',
    handler: ()=>{
        console.log("listing notes")
    }
})


yargs.command({
    command:'read',
    describe:'reading the notes',
    handler: ()=>{
        console.log("reading the notes")
    }
})


yargs.parse(); //This is important to ensure you see the results in console. You can also use yargs.argv to do the same, but you'll always see the yargs arguments in the console.

//console.log(yargs.argv)
