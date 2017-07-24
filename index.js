// Pega o pacote para lidar com arquivos do node (fs = file system, sistema de arquivos)
var fs = require('fs')
// Pega o pacote instalado pug
var pug = require('pug')
//Retorna uma função que sabe transformar nosso template em HTML
var compileFunction = pug.compileFile('template.pug')
// Escreve em um arquivo chamado  resultado.html
fs.writeFileSync('resultado.html', compileFunction())
