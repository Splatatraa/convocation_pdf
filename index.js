const pdf = require('./pdf')

const fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('tableur.csv'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    prenom = line.split(',')[0]
    nom = line.split(',')[1]
    salle = line.split(',')[2]
    heure = line.split(',')[3]
    pdf(prenom, nom, salle, heure)
});