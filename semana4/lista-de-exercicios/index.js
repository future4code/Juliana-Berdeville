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