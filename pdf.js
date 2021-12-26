const pdfmake = require('pdfmake')
const fs = require('fs')

const fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Bold.ttf',
    }
}

const printer = new pdfmake(fonts)

function convocation(prenom, nom, salle, heure) {

    var dd = {
        content: [
            {
                stack: [
                    "Convocation pour l'oral blan de francais du baccalauréat:",
                    { text: 'Lycée Descartes', style: 'subheader' },
                ],
                style: 'header'
            },
            {
                text: [
                    "Veuillez vous rendre à l'heure indiqué sur votre convocation muni de votre carte d'identité ainsi des 20 textes que vous avez étudié."
                ]

            },

            {
                table: {
                    body: [
                        ['Prénom', 'Nom', 'Salle', 'Horaire'],
                        [prenom, nom, salle, heure]
                    ]
                },
                margin: [0, 30, 0, 0],
            },
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'left',
                margin: [0, 130, 0, 80]
            }
        }
    }

    var pdf = printer.createPdfKitDocument(dd)
    pdf.pipe(fs.createWriteStream(`convocations/${prenom}_${nom}.pdf`))
    pdf.end()
}

module.exports = convocation