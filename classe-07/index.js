const fs = require("fs");

const segundoArquivo = "Estou aprendendo JavaScript na Cubos Academy"


fs.writeFile("./meusegundoarquivo.txt", segundoArquivo, () => {

    console.log("O arquivo foi escrito");
})


