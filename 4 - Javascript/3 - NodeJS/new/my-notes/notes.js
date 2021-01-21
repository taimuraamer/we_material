const fs = require('fs');
const chalk = require('chalk')

    function add(title, body) {
        const newNote = {
            title: title,
            body: body
        }
        const notes = loadNotes();
        notes.push(newNote);
        const txt = JSON.stringify(notes);
        fs.writeFileSync('notes.json', txt)
    }
    function remove(title) {
        const notes = loadNotes();
        const remaining = notes.filter((note) => note.title != title)
        if(remaining.length == 0) {
            console.log(chalk.red(`Title: ${title} not found.`))
        }
        else {
            const txt = JSON.stringify(remaining);
            fs.writeFileSync('notes.json', txt);
            console.log('Remove one note with title : ' + title)
        }
        
    }
    function viewAll() {
        const notes = loadNotes();

        notes.forEach((note) => {
            console.log("--" + chalk.blue.inverse(note.title))
            console.log("       " + chalk.blue(note.body))
        })
    
    }
    function read(title) {
        const notes = loadNotes();
        const oneNote = notes.filter((note) => note.title === title)
        if(oneNote.length == 0) {
            console.log(chalk.red(`Title: ${title} not found.`))
        }
        else {
            console.log(chalk.blue.inverse(oneNote.title))
            console.log(chalk.blue(oneNote.body))
        }
    }
    function loadNotes() {
        const notesString = fs.readFileSync('./notes.json')
        const notes = JSON.parse(notesString)
        return notes;
    }

module.exports = {
    add: add,
    remove: remove,
    viewAll: viewAll,
    read: read
}