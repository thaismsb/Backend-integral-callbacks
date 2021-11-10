const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];



let resultado = [];
let frutasFormatadas;
let frutasSemifinal;
let final = [];
let indice = 0;


for (let i = 0; i < frutas.length; i++) {
    let input = frutas[i];
    let minuscula = input.toLowerCase();
    let primeiraLetra = minuscula.slice(0, 1);
    let maiuscula = minuscula.replace(primeiraLetra, primeiraLetra.toUpperCase());
    resultado = resultado + " " + maiuscula;
    frutasFormatadas = resultado.trim();
    final = frutasFormatadas.split(" ");


}


let finalmente = final.map((x) => ` ${indice++}  - ${x}`);

console.log(finalmente);






















