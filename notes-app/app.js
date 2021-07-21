const yargs = require('yargs');
const chalk = require('chalk');


yargs.command({
    command:'add',
    describe:'Add a new note',
    handler: ()=>{
        console.log("adding a new note")
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




console.log(yargs.argv)
