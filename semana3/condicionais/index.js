/***** Exercícios de interpretação de código *******/
/*Exercício 1*/
// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
/*R.: O programa recebe um número informado pelo usuário e o associa à variável 'repostaDoUsuário'. Este valor é convertido de string para número por meio da função Number() e então é armazenado na variável 'numero'. Com a estrutura condicional, o numero é testado para verificar se é par ou ímpar. Se for par, passou no teste. Senão, não passou no teste.*/
/*Exercício 1*/


/*Exercício 2*/
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     //break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//a. O código recebe o nome de uma fruta e, via estrutura condicional, consulta o valor desta fruta. Ao final é exibida uma mensagem ao usuário informando seu nome e valor.
//b. O preço da fruta maçã é R$2.25"
//c. O preço seria R$24,55.
//d. Retirando o break, a operação vai direto pra próxima da fila -- default --, ou seja, o valor da Pêra seria R$5,00.
/*Exercício 2*/

/*Exercício 3*/
// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }
// console.log(mensagem)
/*R.: Independente do input, há erro. A variável mensagem foi definida em contexto local, logo só há visibilidade dentro de seu escopo, que é a estrutura condicional. Para sucesso do código, deveria ter sido declarada em escopo global.
/*Exercício 3*/

/***** Exercícios de ecsrita de código *******/
/*Exercício 4*/
var num1 = prompt("Oi! Informe um numero:")
var num2 = prompt("Agora informe outro numero:")
var num3 = prompt("Mais um:")
var maior = 0, meio = 0, menor = 0

    if (num1 > num2)
        {
                maior = num1
                menor = num2
        }
                 else 
                    {
                        maior = num2
                        menor = num1
                    }
    if (num3 > maior)
        {
                meio = maior
                maior = num3
        }
        // else if (num1===num2 && num2===num3)
        //     {
        //         console.log("Os numeros são todos iguais. Não pode. Informe pelo menos um numero diferente")
        //     }
console.log("Os numeros informados, quando expressos em ordem decrescente são: " + maior + " ," + meio +" ," + menor)

            
/*a. o output é: 'Os numeros informados, quando expressos em ordem decrescente são: 1 , 1'.*/
/*b. o output é: 'Os numeros informados, quando expressos em ordem decrescente são: 1, 0, 1'.*/
/*c. Resposta para este item nas linhas 84 à 87.*/