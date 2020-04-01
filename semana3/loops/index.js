/*Exercícios de interpretação de código*/
/*Exercício 1 - O que o código abaixo está fazendo? Qual o resultado impresso no console? */
// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)
/*R.: Incrementa o valor da variável sum -- inicializada com 0 -- dentro do range do loop, que é ate 15 (14).*/

/*Exercício 2 - Leia o código abaixo: */
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 5
// for(const item of lista){
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)
/*a. O que o comando .push faz? R.: Insere números múltiplos de 5 no array novaLista.*/
/*b. Qual o valor impresso no console? R.: 10, 15, 25, 30.*/
/*c. Qual seria imprimido no console se a variável numero tivesse o valor de 3? [R.: 12, 15, 21, 27, 30] E se tivesse o valor de 4? [R.: 12]
/*Exercícios de interpretação de código*/

/*Exercícios de interpretação de código - Desafio 1*/
/*Qual seria o resultado imppresso no console, se o usuário digitasse o numero 4? R.: Seria impressa uma pirâmide com 4 linhas, tendo elementos compatíveis com o número da linha, por exemplo: 1 elemento na primeira linha, dois na segunda e assim por diante.*/
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
/*Exercícios de interpretação de código - Desafio 1*/

/*Exercícios de ecsrita de código*/
/*Exercício 3*/
/*a.R.:
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
var maior = 0, menor = 55
for (let num of array)
{
    let container = num
    if (container >= maior)
        {
            maior = container
        }
        else if (container < menor)
        {
            menor = container
        }
}
console.log("O maior é: " + maior + " e i menor é: " + menor)*/

/*b.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []
for (let num of array)
{
    if (num%10===0)
        {
            novoArray.push(num)
        }
}
console.log("Eis o novo array: " + novoArray)*/

/*c.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoArray = []
for (let num of array)
{
    if (num%2===0)
        {
            novoArray.push(num)
        }
}
console.log("Eis o novo array: " + novoArray)*/

/*d.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let i=0; i<array.length; i++)
{
    console.log("O elemento do index " + i + " é: " + array[i])
}*/
/*Exercícios de ecsrita de código*/
