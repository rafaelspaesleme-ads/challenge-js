// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(v1, v2){
    return v1+v2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somando = soma(8,2) + 5;

// Qual o valor atualizado dessa variável?
somando;


// Declare uma nova variável, sem valor.
var valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function valueOf(strValor){
    valor = strValor;
    return "O valor da variavel agora é: "+valor;
}

// Invoque a função criada acima.
valueOf("Teste");

// Qual o retorno da função (Use comentários de bloco).
valueOf(valor);

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function argumentos(arg1, arg2, arg3){
    if(arg1 == null || arg2 == null || arg3 ==null){
        return "Preencha todos os valores corretamente!";
    }
    return ((arg1*arg2)*arg3)+2
}

// Invoque a função criada acima, passando só dois números como argumento.
function doisArgumentos(arg1,arg2){
    return [arg1,arg2];
}

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
doisArgumentos(2,3);

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
argumentos(9,3,4);

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
/*110*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function custom(arg1,arg2,arg3){

    if(arg1 != null && arg2 == null && arg3 == null){
        return arg1;
    } else
    if(arg1 != null && arg2 != null && arg3 == null){
        return arg1+arg2;
    } else
    if (arg1 != null && arg2 != null && arg3 != null){
        return (arg1+arg2)/arg3;
    } else
    if (arg1 == null && arg2 == null && arg3 == null){
        return false;
    } else
    {return null}

}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
custom();
custom(1);
custom(1,2);
custom(10,89,2);
custom(null);
