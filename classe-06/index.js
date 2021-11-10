const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];


let indice = 0;


function jogo() {
    if (indice < jogadores.length) {
        console.log(jogadores[indice])
        indice++;
    } else {
        console.log("A rodada terminou!")
        clearInterval(intervalo)
    }
}

let intervalo = setInterval(jogo, (10 / jogadores.length) * 1000);




