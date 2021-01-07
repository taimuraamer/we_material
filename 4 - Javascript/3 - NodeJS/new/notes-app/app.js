const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes')


yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(`Title: ${argv.title}`)
        console.log(`Body: ${argv.body}`)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('remove a note.')
    }
})
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function () {
        console.log('list a note.')
    }
})
yargs.command({
    command: 'edit',
    describe: 'edit a note',
    handler: function () {
        console.log('edit a note.')
    }
})

yargs.parse();
