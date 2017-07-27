// Pega o pacote para lidar com arquivos do node (fs = file system, sistema de arquivos)
var fs = require('fs')
// Pega o pacote instalado pug
var pug = require('pug')
//Retorna uma função que sabe transformar nosso template em HTML

var allEvents = [
  {
    name: 'Programação defensiva - Como fazer seus robôs não te matarem',
    date: '01/02/2900'
    },
  {
    name: 'Arrumando seus braços robóticos com PHP',
    date: '04/02/2900'
    },
  {
    name: 'Desenvolvimento de jogos ... Mortais',
    date: '07/05/2900'
    },
  {
    name: 'Hackeando a matrix para negociar aumentos',
    date: '01/06/2900'
    },
  {
    name: 'Programando robôs gigantes utilizando NodeJS',
    date: '09/06/2900'
    }
]
var compileFunction = pug.compileFile('template.pug', {pretty: true})
// Escreve em um arquivo chamado  resultado.html
fs.writeFileSync('resultado.html', compileFunction({allEvents: allEvents}))
