const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');  //  yargs is basically for parsing the argumemnts for better UI
const { removeNote } = require('./notes.js');
const notes = require('./notes.js');

//const command = process.argv[2]
// 1. Get input from the user

//console.log(process.argv)


// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }


// 2. Arguments parsing with yargs

// customize yargs version
yargs.version('1.1.0'); 

// add ,remove, read
// create add command

// challange for yargs command
//setup a body options for add command
// consider a description,make it required & make  it for strings
// Log the body value in the handler function
// Test your work!

yargs.command({
    command:"add",
    description:"Add a new note ",
    body:{
        title:{
            description:"Body Funcrion",
            type:"string"
        }
    },
    builder:{
        title:{
            description:"Note title",
            demandOption:true  ,   //for  default title boolean
             type:"string"        // setting default type as string whether it is passed or not
        }

    },
    handler(argv){
        //console.log("Adding a new note",argv)
        // console.log("Title:" + argv.title);
        // console.log("Body:" + argv.body);

        notes.addNotes(argv.title,argv.body);
    }
    
});
// create remove command
yargs.command({
    command:"remove",
    description:"Remove notes",
    builder:{
        title:{
            description:"Note title!",
            demandOption:true,
            type:"string"

        }
    },
    handler(argv){
        // console.log("Removing a note")
        notes.removeNote(argv.title);

    }
})

// wire up list command
// 1.create and exports listNote from notes.js
// -- "your notes using chalk"
// -- print note title for each note
// call listNote from command handler
// Test your note

// create list command
yargs.command({
    command:"list",
    description:"List notes",
    handler(){
        // console.log("Listing a note")
        notes.listNote();

    }
});
//  create read command
yargs.command({
    command:"read",
    description:"Read notes",
    builder:{
        title:{
            description:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        // console.log("Reading a note")
        notes.readNotes(argv.title);

    }
})
yargs.parse();
//console.log(yargs.argv);   // parsing the arguments

