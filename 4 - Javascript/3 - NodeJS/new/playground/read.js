const fs = require('fs')

const file = fs.readFileSync('./data.json')

let data = JSON.parse(file.toString());

data.planet = "Mars"

data = JSON.stringify(data)

fs.writeFileSync('./data.json', data)