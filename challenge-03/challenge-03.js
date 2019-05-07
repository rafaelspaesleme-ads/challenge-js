// Declarar uma variável qualquer, que receba um objeto vazio.
var objeto = "";

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {
    nome: "Luis",
    sobrenome: "Inacio",
    sexo: "m",
    idade: 60,
    altura: "1,84",
    peso: "100",
    andando: false,
    caminhouQuantosMetros: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
function fazerAniversario(){
    return pessoa.idade++;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
function andar(valorAndado){
    return pessoa.caminhouQuantosMetros+=valorAndado, pessoa.andando=true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
function parar(){
    return pessoa.andando = false
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
function nomeCompleto(){
    return "Olá1 Meu nome é "+pessoa.nome.concat(" "+pessoa.sobrenome);
}


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
function mostrarIdade(){
    return "Olá! Eu tenho ".concat(pessoa.idade).concat(" anos!");
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
function mostrarPeso(){
    return "Eu peso ".concat(pessoa.peso).concat("Kg.");
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
function mostrarAltura(){
    return "Minha altura é ".concat(pessoa.altura).concat("m.");
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
nomeCompleto(); //Luis Inacio 

/*
Qual a idade da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
mostrarIdade(); //Olá! Eu tenho 74 anos.

/*
Qual o peso da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
mostrarPeso(); // Eu peso 100Kg.

/*
Qual a altura da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
mostrarAltura(); //Minha altura é 1,84m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/
for(var i = 0; i <= 3; i++){fazerAniversario();}
    
/*
Quantos anos a `pessoa` tem agora (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
pessoa.idade; //77

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
andar(3);
/*
A pessoa ainda está andando (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
while(pessoa.andando != false){
    andar(3);
    console.log(pessoa.caminhouQuantosMetros);
}

/*
Se a pessoa ainda está andando, faça-a parar.
*/
while(pessoa.andando != false){
    andar(3);
    console.log(pessoa.caminhouQuantosMetros);
    if(pessoa.andando == true){
        parar();
    }
}

/*
E agora: a pessoa ainda está andando (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQuantosMetros; // <metros percorridos>

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
function apresentacao(){
    return "Olá, eu sou o "
    +nomeCompleto()+
    ", tenho "
    +mostrarIdade()+
    " anos, "
    +mostrarAltura()+
    ", meu peso é "
    +mostrarPeso()+
    " e, só hoje, eu já caminhei "
    +pessoa.caminhouQuantosMetros+
    " metros!"
}

// Agora, apresente-se ;)
apresentacao();