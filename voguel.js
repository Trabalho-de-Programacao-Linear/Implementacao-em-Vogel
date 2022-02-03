let tabela =
    [
        [8, 32, 29, 25, 10, 12, 19, 10, 0],
        [28, 35, 20, 30, 9, 30, 26, 18, 0],
        [14, 22, 25, 24, 24, 9, 9, 25, 0],
        [30, 15, 12, 18, 29, 9, 27, 21, 0],
        [13, 13, 11, 31, 25, 13, 24, 23, 0],
        [29, 10, 32, 9, 33, 22, 33, 19, 0],
        [31, 13, 16, 8, 21, 34, 35, 26, 0],
        [16, 22, 21, 23, 11, 19, 23, 19, 0],
        [18, 10, 28, 31, 14, 11, 9, 27, 0],
        [19, 26, 12, 27, 26, 27, 26, 33, 0],
        [22, 23, 12, 12, 34, 16, 33, 27, 0],
        [29, 20, 22, 10, 10, 19, 21, 34, 0],
    ];




const quantidadeLinha = tabela.length;
const quantidadeColuna = tabela[0].length;




createTable();
console.log(tabela);






//Funções principais


function createTable() {

    let linhaAtual;
    let linhaAux;
    let arrayOrdenado;
    let soma;

    for (let i = 0; i < quantidadeLinha; i++) {
        linhaAtual = [];
        linhaAux = [];

        for (let j = 0; j < quantidadeColuna; j++) {
            linhaAtual.push(tabela[i][j]);
        }
        arrayOrdenado = ordenaValor(linhaAtual, linhaAux);


        tabela[i].push(arrayOrdenado[1]);
        soma = diferencaMin(arrayOrdenado)
        tabela[i].push(soma);


    }


}



//Funções  auxliares

function ordenaValor(linha, linhaAux) {

    //console.log(linha);
    //throw "para"
    let valueMin = returnMin(linha);
    linhaAux.push(valueMin);
    let position = linha.indexOf(valueMin);
    linha.splice(position, 1)

    if (linha.length - 1 > 0) {

        ordenaValor(linha, linhaAux)
    }
    return linhaAux;
}


//retorna o valor min de um array
function returnMin(array) {

    let arrayTratado = [];

    for (let i = 0; i < array.length; i++) {
        arrayTratado.push(array[i]);
    }


    let valueMin = Math.min(...arrayTratado);
    return valueMin;
}

function diferencaMin(array) {
    let soma = 0;
    for (let i = 0; i < 2; i++) {
        soma += array[i];
    }
    return soma;
}


//Lixo


// let primeriaLinha = [];


// console.log(tabela.length)

// for (let i = 0; i < tabela[0].length; i++) {
//     primeriaLinha.push(tabela[0][i]);
// }

// for (let i = 0; i < tabela[0].length; i++) {

//     for (let j = 0; j < tabela.length; j++) {
//         primeriaLinha.push(tabela[i][j]);
//     }

// }

// //console.log(primeriaLinha);
// let tabelaAux = [];
// //let arrayOrdenado = ordenaValor(primeriaLinha);