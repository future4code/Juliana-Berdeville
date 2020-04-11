/*Resolução da lista de exercícios*/
/*LISTA I - Semana4-Aula-15/
/*Exercícios de leitura de código*/
/*Exercício I*/
/*1. A função recebe a quantidade de dinheiro em dólares fornecida pelo usuário e converte para reais, 
multiplicando seu valor pela cotação vigente do dólar.  No console, 
considerando a cotação atual do dólar - R$5,11 -, seria printado o seguinte: "R$511"*/
/*Exercício I*/

/*Exercício II*/
/*A função recebe uma string correspondente ao tipo de investimento e um valor 
correspondente a quanto o usuário deseja investir. Por meio do Switch, 
dependendo do valor informado como tipo de investimento, 
o programa calcula o valor esperado após investimento da quantia informada pelo usuário. 
Caso seja inserida string não tratada pelo sistema é informado via alert que o tipo de investimento é inválido. 
Duas variáveis são declaradas: "novoMontante" e "segundoMontante". Cada uma recebe a chamada da função 
com os respectivos parâmetros: ("Ações", 150) e ("Tesouro direto", 200). 
No console temos os seguintes prints:
> 161
> TIPO DE INVESTIMENTO INFORMADO INCORRETO!*/
/*Exercício II*/

/*Exercício III*/
/*Três arrays são declarados inicialmente, 
numeros -- que contém números diversos -- e array1 e array2 -- que se inicializam vazios.
Um FOR é utilizado para percorrer o vetor numero e um IF, para validar se o elemento vigente é par. 
Caso seja é inserido em array1.  Caso não seja é inserido em array2.
No console é exibido o seguinte:
> Quantidade total de números: 14
> 6
> 8*/
/*Exercício III*/

/*Exercício IV*/
/* Um array -- 'numeros' -- é declarado com 25 elementos. Duas variáveis -- 'numero1' e 'numero2' -- são declaradas logo 
após com os respectivos valores: infinity e 0.
Um FOR é utilizado para percorrer o array e um IF, para testar seus valores.
Caso o elemento vigente do array for menor que numero1, esta variável recebe seu valor.
Outro IF determina que, caso o valor do elemento vigente do array for maior que numero2, esta variável recebe seu valor.
Após estas iterações, no console é exibido o que se segue:
> -10
> 1590*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*Exercícios de Lógica de programação*/
/*Exercício I*/
/* a) False
   a) False
   a) True
   a) True
   a) True*/
/*Exercício I*/

/*Exercício II*/
/* O código não funciona. Para que seja feito o que é solicitado, deve-se implementar o seguinte:
const quantidadeDeNumerosPares
for(i=0; i<quantidadeDeNumerosPares; i++)
    {
        console.log(i*2)
    }
/*Exercício II*/

/*Exercício III*/
/*const validaTriangulo(ladoA, ladoB, ladoC)
{
    if (ladoA===ladoB && ladoB===ladoC && ladoA===ladoC)
        {
            console.log("O triangulo cujos lados são: " + ladoA + " ," + ladoB + " ," + ladoC + " é equilátero.")
        }
            else if (ladoA===ladoB || ladoB===ladoC || ladoA===ladoC)
                { 
                    console.log("O triangulo cujos lados são: " + ladoA + " ," + ladoB + " ," + ladoC + " é isósceles.")
                }
                    else 
                        {
                            console.log("O triangulo cujos lados são: " + ladoA + " ," + ladoB + " ," + ladoC + " é escaleno.")
                        }
}
/*Exercício III*/

/*Exercício IV*/
/* const num1 = prompt("Informe um numero: ")
   const num2 = prompt("Informe outro numero: ")

 function maior (primeiroArgumento, segundoArgumento)
     {
             let maior=0
                 if (primeiroArgumento > maior)
                     {
                         console.log (primeiroArgumento + " é maior que " + segundoArgumento)
                     }
                     else if (segundoArgumento > primeiroArgumento)
                         {
                             console.log(segundoArgumento + " é maior que " + primeiroArgumento)
                         }
                         else
                         {
                             console.log(primeiroArgumento + " e " + segundoArgumento + " são iguais.")
                         }
    }
 function divisiveis (primeiroArgumento, segundoArgumento)
     {
         if (primeiroArgumento%segundoArgumento===0)
             {
                 console.log(primeiroArgumento + "é divisivel pelo " + segundoArgumento)
             }
             else if (segundoArgumento%primeiroArgumento===0)
                 {
                     console.log(segundoArgumento + "é divisível pelo " + primeiroArgumento)
                 }
     }
 function diferenca (primeiroArgumento, segundoArgumento)
 {
     if (primeiroArgumento > segundoArgumento)
         {
             let resultado = primeiroArgumento - segundoArgumento
             console.log("A diferença entre " + primeiroArgumento + " e " + segundoArgumento + " é: " + resultado)
         }
         else if (segundoArgumento > primeiroArgumento)
             {
                 let resultado = segundoArgumento - primeiroArgumento
                 console.log("A diferença entre " + primeiroArgumento + " e " + segundoArgumento + " é: " + resultado)  
             }*/
/*Exercício IV*/
/*-----------------------------------------------------------------------------------------------------------------------*/
/*Resolução da lista de exercícios*/
/*LISTA II - Semana4-Aula-15/
/*Exercícios de funções*/
/*Exercício I*/
/*function imprimeSegundoMaiorESegundoMenor (arrayzinho)
{ 
    let maior=0, menor=0, segundoMaior=0, segundoMenor=0
    for (let elemento of arrayzinho)
        {
            if (elemento>segundoMaior)
            {
                segundoMaior = elemento
            }            
                else 
                    {
                        segundoMenor = elemento
                    }
                        for (let elementoII of arrayzinho)
                            {
                                if (elementoII > maior)
                                    {
                                        maior = elementoII
                                    }
                                        else 
                                            {
                                                menor = elementoII
                                            }
                            }
        }
}

const arrayExercicioI = [2,4,8,6,15,23,121,184,7,-3,0]
imprimeSegundoMaiorESegundoMenor(arrayExercicioI)*/
/*Exercício I*/

/*Exercício II*/
/*var funcaoAnonima = function ()
{
    alert("Hello, LaBeNu!")
}

funcaoAnonima()*/
/*Exercício II*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*Exercícios de objetos*/
/*Exercício I*/
/*Objetos são estruturas que guardam múltiplas informações de determinados agentes existentes no mundo real
-- ou escopo -- e que, ao transportarmos para o ambiente abstrato digital, são representados como uma lista contendo
diversas características. 
Podemos combinar arrays e objetos se for necessário armazenar vários objetos num elemento só, daí surgem os arrays de Objeto.*/
/*Exercício I*/

/*Exercício II*/
/*function criaRetangulo (lado1, lado2)
    {
        const resultadoArea, resultadoPerimetro
        resultadoArea = lado1*lado2
        resultadoPerimetro = 2*(lado1+lado2)
        
        let oRetangulo =
         {
             largura: lado1,
             altura: lado2,
             perimetro: resultadoPerimetro,
             area: resultadoArea
         }
    }*/
/*Exercício II*/

/*Exercício III*/
/*const oFilmeFavorito =
{
    titulo: 'O Grande Hotel Budapeste',
    ano: 2014,
    diretor: 'Wes Anderson',
    elenco: 'Diane Krueger, Ralph Fiennes, Tony Revolori, Saoirse Ronan, Adrien Brody, Willem Dafoe, Léa Seydoux, Mathieu Amalric'
}

console.log("Venha assistir ao filme" + oFilmeFavorito.titulo + " , de " + oFilmeFavorito.ano + ", dirigido por " + oFilmeFavorito.diretor + " e estrelado por: " + oFilmeFavorito.elenco)*/
/*Exercício III*/

/*Exercício IV*/
/*
const anonimizarPessoa = function ()
{
    const umaPessoaQualquer =
     {
        nome:'Juju',
        idade:'23' ,
        email:'aaa@aaa.com' ,
        endereco:'Rua dos bobos, 0' 
    }

    var arrayUmaPessoaQualquer = []
    arrayUmaPessoaQualquer.push(umaPessoaQualquer)

    const umaNovaPessoaQualquer =
    {
        nome:'ANÔNIMO',
        idade: umaPessoaQualquer.idade,
        email: umaPessoaQualquer.email,
        endereco: umaPessoaQualquer.endereco
    }

    var arrayUmaNovaPessoaQualquer = []
    arrayUmaNovaPessoaQualquer.push(umaNovaPessoaQualquer)

    return console.log(arrayUmaNovaPessoaQualquer)
} 

anonimizarPessoa()
*/
/*Exercício IV*/
/*-----------------------------------------------------------------------------------------------------------------------*/
/*Resolução da lista de exercícios*/
/*LISTA II - Semana4-Aula-16*/
/*Exercícios de funções de array*/
/*Exercício I*/
/*Primeira forma:FOR 
Segunda forma: forEach()
Terceira forma: do...while

var arrayzinho = [1,2,3,4,5,6,7,8,9,0]

for (let elemento in arrayzinho)
    {
        console.log(arrayzinho[elemento])
    }


arrayzinho.forEach(element => {console.log(arrayzinho[element])});

do
{
    console.log(arrayzinho)
}
while (arrayzinho.lenght > 0)
*/
/*Exercício I*/

/*Exercício II*/
/*function soAdultos (arrayArgumento)
      {
         arrayargumento.forEach((pessoa, index, array)=> 
            {
                let idade, nome
                idade = pessoa.idade
                nome = pessoa.nome
                    if (pessoa.idade >=20)
                        {
                            var arraySoParaAltinhos = []
                            arraySoParaAltinhos.push(element.nome, element.idade)
                        }
            }) 
            console.log("Os adultos são: " + arraySoParaAltinhos)
       }

function soCriancas (arrayArgumento)
{
   arrayargumento.forEach((pessoa, index, array)=> 
      {
          let idade, nome
          idade = pessoa.idade
          nome = pessoa.nome
              if (pessoa.idade < 20)
                  {
                      var arraySoParaBaixinhos = []
                      arraySoParaBaixinhos.push(element.nome, element.idade)
                  }
      }) 
      console.log("As crianças e adolescentes são: " + arraySoParaBaixinhos)
 }
var arrayzinho = 
[ 
    {nome: "Pedro", idade: 20}, 
    {nome: "João", idade: 10}, 
    {nome: "Paula", idade: 12}, 
    {nome: "Arthur", idade: 89}
]

soAdultos(arrayzinho)
soCriancas(arrayzinho)*/
/*Exercício II*/

/*Exercício III*/
/*const array = [1,2,3,4,5,6]*/

/*const itemA = function ()
{
    array.forEach((element, index, array) => {
    let arrayNovo = []
    arrayNovo.push(element*2)
    console.log(arrayNovo)
    })
}   
itemA(array)*/

/*const itemB = function ()
{
    array.forEach((element, index, array) => {
        let arrayNovo = []
        arrayNovo.push(element*3)
        console.log(arrayNovo)
        })
}
itemB(array)*/

/*const itemC = function ()
{
    array.forEach((element, index, array) => {
        let arrayNovo = []
        if (element%2===0)
            {
                arrayNovo.push(element + " é par")
            }
            else 
                {
                    arrayNovo.push(element + " é ímpar")
                }
        console.log(arrayNovo)
        })
}

itemC(array)*/
/*Exercício III*/

/*Exercício IV*/
/*const pessoas = 
[
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]*/
/*const itemA = function ()
    {
        pessoas.filter((element, idade, altura, nome) => {
            const novoArray =[]
                if (element.altura >= 1.5 && 14 <= element.idade <=60) 
                    { 
                            novoArray.push(element.nome + ", " + element.idade + ", " + element.altura)
                    }
            console.log(novoArray)
        })
    }
itemA(pessoas)*/

/*const itemB = function ()
{
     pessoas.forEach ((element, idade, altura, nome) => 
        {
            if ((element.idade > 60 && element.idade < 14) || (element.altura < 1.5))
                {
                    return console.log(element.nome)
                } 
        
        })
}

itemB(pessoas)*/
/*Exercício IV*/

/*Exercício V*/
/*const consultas = 
[
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const consultasMantidas = function ()
{
consultas.filter((element, nome, dataDaConsulta, cancelada)=>{
    var novoArray = []
    if (element.cancelada === false)
    {
        novoArray.push("Olá, Sr/Sra." + element.nome + "." +  " Estamos enviando esta mensagem para lembrá-lo/lembrá-la da sua consulta no dia " + element.dataDaConsulta + "." + " Por favor, acuse o recebimento deste e-mail.")
    }
     return console.log(novoArray)
})
}
consultasMantidas(consultas)*/

/*const consultaCancelada = function ()
{
consultas.filter((element, nome, dataDaConsulta, cancelada)=>{
    var novoArray = []
    if (element.cancelada === true)
    {
        novoArray.push("Olá, Sr./Sra. " + element.nome + ". Estamos enviando esta mensagem para lembrá-lo/lembrá-la da sua consulta no dia " + element.dataDaConsulta + " .Por favor, acuse o recebimento deste e-mail.")
    }
     return console.log(novoArray)
})
}

consultaCancelada(consultas)*/
/*Exercício V*/

/*Exercício VI*/
/*const contas = 
[
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

const atualizaSaldo = function ()
{
    contas.forEach((element, saldoTotal, compras) => 
        {
            var total = parseInt(element.compras[0] + element.compras[1] + element.compras[2] + element.compras[3]) 
            parseInt(element.saldoTotal = element.saldoTotal -  total)
        });
        console.log(contas)
}

atualizaSaldo(contas)*/
/*Exercício VI*/