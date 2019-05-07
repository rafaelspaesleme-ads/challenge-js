/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var items = {
    cores: ['Azul','Verde','Amarelo','Laranja','Preto'],
    palavras: ['relógio','mouse','caneta','fio','tapete'],
    temas: ['dark','slim','rustico','retro','futuristico'],
    frutas: ['maça','pera','uva','laranja','caju'],
    numeros: [1,2,3,4,5],
    numerosReal: [1.5,2.9,3.0,4.4,5.9],
    animais: ['cachorro','gato','leão','coelho','arara']
}

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(lista){
    return lista;
}
recebeArray(items.cores);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
recebeArray(items.palavras[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function parametrizandoJs(indiceLista, numero){
    if(indiceLista == numero){
        return indiceLista;
    }
    return false;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayList = ["2", 9, "Teste", true, items.numerosReal[2]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
parametrizandoJs(arrayList[3], 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivros){
    var livros = ['Livro de programação','Livro de história','Livro de politica'];

    if(nomeLivros == livros[0]){
        return livros[0] = {
            quantidadePaginas: 300,
            autor: "Steve Jobs",
            editora: "Abril"   
        }
    } else
    if(nomeLivros == livros[1]){
        return livros[1] = {
            quantidadePaginas: 9898,
            autor: "Jô Soares",
            editora: "Cultura"   
        }
    } else
    if(nomeLivros == livros[2]){
        return livros[2] = {
            quantidadePaginas: 852,
            autor: "Abrham Lincoln",
            editora: "US Edition"   
        }
    } else {
        return livros;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('livroProgramacao'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro "
    .concat(book('Livro de programação').editora)
    .concat(" tem ")
    .concat(book('Livro de programação').quantidadePaginas)
    .concat(" páginas!"));

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro "
    .concat(book('Livro de história').editora)
    .concat(" é ")
    .concat(book('Livro de história').autor)
    .concat("."));

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O autor do livro "
    .concat(book('Livro de história').editora)
    .concat(" é ")
    .concat(book('Livro de história').autor)
    .concat("."));
