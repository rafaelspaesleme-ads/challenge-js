/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(arg){
    switch(arg){
        case true:
            return true;
        case false:
            return false;
        default:
            return arg;        
    }
}

// Invoque a função criada acima, passando todos os tipos de valores `false`.
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(['truthy', 'truthy', 'truthy', 'truthy', 'truthy', 'truthy', 'truthy', 'truthy', 'truthy', 'truthy']);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: String,
    modelo: String,
    placa: String,
    ano: Number,
    cor: String,
    quantasPortas: Number,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudarCor(valorCor){
    return carro.cor = valorCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function setarModelo(valorModelo){
    return carro.modelo = valorModelo;
}

function obterModelo(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function setarMarca(valorMarca){
    return carro.marca = valorMarca;
}

function obterMarca(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo(){
    return "Esse carro é um ".concat(carro.marca).concat(" "+carro.modelo);
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
function addPessoasCarro(numPessoas){
    if(numPessoas > -1){
        carro.quantidadePessoas += (numPessoas);
        var resultadoVagas = carro.assentos - (numPessoas);

        var msgCheio = "O carro já está lotado!";
        var msgRestaVagas = "Só cabem mais "+resultadoVagas+" pessoas!";
        var msgRestaVaga = "Só cabem mais "+resultadoVagas+" pessoa!";
        var msgChegouLimite = "Esse valor excede o limite do veículo!";
    
        if(carro.quantidadePessoas == carro.assentos){
            return msgCheio
        }
        if(carro.assentos > (numPessoas)){
            return msgRestaVagas;
        }
        if(resultadoVagas == 1){
            return msgRestaVaga;
        }
        if(carro.assentos < (carro.quantidadePessoas)){
            carro.quantidadePessoas = 5;
            return msgChegouLimite;
        }
    } else{
        carro.quantidadePessoas+=numPessoas;
        if(carro.quantidadePessoas<0){
            carro.quantidadePessoas = 0;
        }
        var mensagem = "Temos "+carro.quantidadePessoas+" pessoas no carro!";
        return mensagem;
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro
*/
obterCor();

// Mude a cor do carro para vermelho.
setarModelo('amarelo');

// E agora, qual a cor do carro
obterCor();

// Mude a cor do carro para verde musgo.
setarModelo('verde musgo');

// E agora, qual a cor do carro
obterCor();

// Qual a marca e modelo do carro
obterMarca();

// Adicione 2 pessoas no carro.
addPessoasCarro(2);

// Adicione mais 4 pessoas no carro.
addPessoasCarro(4)

// Faça o carro encher.
addPessoasCarro(-1)

// Tire 4 pessoas do carro.
addPessoasCarro(-4)

// Adicione 10 pessoas no carro.
addPessoasCarro(10)

// Quantas pessoas temos no carro
carro.quantidadePessoas;