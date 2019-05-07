/*
Crie um array com 5 items (tipos variados).
*/
var lista = ['Teste', 9, true, 7.8, "2"];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
    return lista.push(item);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(novaLista = ["nome", false, 8]);
console.log(lista[5]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é "+lista[5][1]+".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem "+lista.length+" itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem "+lista[5].length+" itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var numerosPares = 10;
var listaPar = [];
while(numerosPares >= 10 && numerosPares <= 20){
    if(numerosPares%2==0){
           listaPar.push(numerosPares);
           console.log( 'Instanciando numero par: '+numerosPares+'.' );
    }
    numerosPares++;
}
console.log( 'Números pares entre 10 e 20: '+listaPar+'.' );

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var numerosImpares = 10;
var listaImpar = [];
while(numerosImpares >= 10 && numerosImpares <= 20){
    if(numerosImpares%2!=0){
           listaImpar.push(numerosImpares);
           console.log( 'Instanciando numero impar: '+numerosImpares+'.' );
    }
    numerosImpares++;
}
console.log( 'Números ímpares entre 10 e 20: '+listaImpar+'.' );


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var listaForPar = [];
for(var iPar = 100; iPar <= 120; iPar++){
    if(iPar%2==0){
           listaForPar.push(iPar);
           console.log( 'Instanciando numero par: '+iPar+'.' );
    }
}
console.log( 'Números pares entre 100 e 120: '+listaForPar+'.' );

var listaForImpar = [];
for(var imPar = 111; imPar <= 125; imPar++){
    if(imPar%2!=0){
           listaForImpar.push(imPar);
           console.log( 'Instanciando numero par: '+imPar+'.' );
    }
}
console.log( 'Números ímpares entre 111 e 125: '+listaForImpar+'.' );
