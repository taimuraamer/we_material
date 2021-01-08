const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
    return "Your notes...";
};

const addNote = (title, body) => {
    console.log(title)
    let notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes === 0) {
        notes.push({
        title: title,
        body: body
    })
    console.log(chalk.green('Note saved successfully.'))
    }
    else {
        console.log(chalk.bgRed('Title already exist!'))
    }

    saveNotes(notes);
};

const saveNotes = (notes) => {
    const data = notes.stringify(notes);
    fs.writeFileSync("notes.json", data);
};

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync("notes.json");
        const notes = JSON.parse(buffer.toString());
        return notes;
    } catch (e) {
        console.log(chalk.red('No notes file found.'))
        return [];
    }
};
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
};