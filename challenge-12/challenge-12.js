/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
person = {
    name: 'João',
    lastname: 'Inácio',
    age: 80
}
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(person);

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push(
    livro1 = {name: String, pages: Number},
    livro2 = {name: String, pages: Number},
    livro3 = {name: String, pages: Number}
)
books[0].name = 'A volta dos que não foram';
books[0].pages = 6000;

books[1].name = 'História sem fim';
books[1].pages = Number.POSITIVE_INFINITY;

books[2].name = 'De volta para lugar nenhum';
books[2].pages = 50;

console.log( '\nLista de livros:'+books.sort());

/*
Remova o último livro, e mostre-o no console.
*/
delete books[2];

console.log( '\nAgora sobraram somente os livros:'+books);
/*
Mostre no console os livros restantes.
*/

/*
Converta os objetos que ficaram em `books` para strings.
*/
books = {pages: String}
console.log( '\nLivros em formato string:' + typeof books[0].pages === String);

/*
Mostre os livros nesse formato no console:
*/


/*
Converta os livros novamente para objeto.
*/

console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/

console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/


console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/


console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/

