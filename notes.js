
const chalk = require('chalk');
const fs = require('fs');
const { title } = require('process');
const getNotes = ()=> {
    return 'My notes...'
}

// Adding a note
const addNotes = (title,body)=>{
    const notes= loadNotes();
    // const duplicateNotes = notes.filter(function(note){      // notes.filter check in the array whether the title is present or not
    //     return note.title=== title
    // });
    // const duplicateNotes = notes.filter((note)=>note.title=== title);     // notes.filter check in the array whether the title is present or not
        const duplicateNote  = notes.find((note)=> note.title===title);

        // console.log(duplicateNote); //////// for debugging note application
        // console.log(title);

        debugger
    
    // if(duplicateNotes.length===0){
        if(!duplicateNote){

        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        console.log("New note Added!");
    }else{
        console.log("Note title taken!");
    }
   

    

   // console.log(notes);

}
const saveNotes  = (notes)=>{
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);

}
const loadNotes = ()=>{
       try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();          // change data to string
        return JSON.parse(dataJson);
    

       }
       catch(err){
           return []
       }
    
}

const listNote = ()=>{
    const notes = loadNotes();
    console.log(chalk.inverse("My Notes"))

    notes.forEach((note) => {
        console.log(note.title);
        
    });
}

// challage:remove a note
           // setup the remove commmand & the function
//1. setup a remove command to required "--title " option
//2.create and export a removeNote function from note.js
//3. call removeNote in remove command handler
//4. Test your work using:  node app.js remove --title="some title"

// challenge 2: wire up notes
//1. Load existing notes
//2. use array filter method to remove the matching note(if any)
//3. save the newly created array
//4. Test a work with a title that exists & a title that does not exists


// challange 3: Use chalk to provide useful logs for remove
// 1. If a note is removed, print "Note removed!" with a green background
// 2. If no note is removed, print "No note found! ",with a red background

// removing a note

const removeNote = (title)=>{
    //console.log(title);
    const notes = loadNotes();   // to read loadNotes function
    // const noteToKeep = notes.filter(function(note){
    //     return note.title !== title       // return true if it is not a match



   // });
    const noteToKeep = notes.filter((note)=>note.title !== title );
            // return true if it is not a match



   

    if(notes.length>noteToKeep.length){
        console.log(chalk.green.inverse("Note removed"));
        saveNotes(noteToKeep);
    }
    else{
        console.log(chalk.red.inverse("No note found!"));
    }
   

    



}

const readNotes = (title)=>{
    const notes = loadNotes();
    const note = notes.find((note)=>note.title===title);
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
       
    }else{

        console.log(chalk.red.inverse("Note not found"));



    }


}
module.exports = {
    addNotes:addNotes,
    getNotes:getNotes,
    removeNote:removeNote,
    listNote:listNote,
    readNotes:readNotes

}