// function imprimeArray(array){
//     if (array !== undefined){
//         console.log(array)
//         for(const elemento of array){
//             console.log(elemento)
//         }
    
//         return array.length
//     }
// }

// const comprimento = imprimeArray()

// console.log(comprimento)
/*********************************************************************************************************************** */
/*Exercícios de interpretaçaõ de código*/
/*Exercício 1*/
// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }

// console.log(minhaFuncao())
/*a. Indique qual será o resultado da função caso ela seja chamada como minhaFuncao(2). R.: array = [ ] e comprimento 0. O output seria vazio.*/
/*b. Indique qual será o resultado da função caso ela seja chamada como minhaFuncao(5). R.: array = [0 ,1] e comprimento 2. O output seria 3*/
/*c. Indique qual será o resultado da função caso ela seja chamada como minhaFuncao(8). R.: array = [0 ,1] e o comprimento 2. O output seria 4.*/
/***************************************************************************************************************************/
/*Exercícios de interpretação de código*/
/*Exercício 2*/
// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));
/*a. Explicite quais são as saídas impressas no console. R.: 0 - representado por Darvas, que é o primeiro elemento do array -, 2 - representado pelo João, que é o segundo elemento do array. - e undefined, pois não há objeto no array correspondente ao argumento da terceira chamada*/
/*b. Funcionaria pois mudariam apenas os tipos de dados, mas o comparador utilizado na condicional aninhada no loop não funcionaria, pois os numeros estariam em strings. Para solução seria necessário converte-los para numeros*/
/***************************************************************************************************************************/
/*Exercícios de interpretação de código*/
/*Exercício 3*/
// function metodo(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let x of array) {
//       resultadoA += x; // resultadoA = resultadoA + x
//       resultadoB *= x; // resultadoB = resultadoB * x
//     }
  
//     arrayFinal.push("Este é o resultado A: " +resultadoA);
//     arrayFinal.push("Este é o resultado B: " +resultadoB);
//     return arrayFinal;
//   }

//  console.log(metodo(array = ['1', '2', '3']))  --> OUTPUT: ["Este é o resultado A: 0123" , "Este é o resultado B: 6"]

 /*A função cria outro array, com base num array fornecido pelo usuário -- argumento -- por meio de um loop. O Loop tem como range o comprimento do array input e realiza uma soma e uma multiplicação, sendo o resultado de cada uma dessas atribuído a uma variável. Ao final, os resultados A e B -- relativos às operações de soma e multiplicação, respectivamente. -- são inseridos no novo Array (arrayFinal). Para o resultado A, os números foram concatenados pois não terem sido convertidos. Enquanto que para o resultado B, ao final, 2 e 3 foram multiplicados.*/
 /*Poderíamos alterar o nome da variável array para arrayInput e alterar o nome do arrayFinal como arrayOutput.*/
/***************************************************************************************************************************/
/*Exercícios de escrita de código*/
/*Exercício 4 - A*/
// const calculaIdadeDoToto = (anosHumanos) => 
// {
//     let idadeDeCachorro = anosHumanos*7 /*calcula a idade do seu cachorrinho*/
//     return console.log("Olha só! Sua(seu) amiguinha(o) tem " + idadeDeCachorro + " anos!") /*retorna a idade do seu cachorrinho com output elaborado*/
// }
// calculaIdadeDoToto(12)
/*Dados utilizados para teste e exemplificação desta questão: idade de Dona TomTom, a cachorrinha-vovó mais esfomeada, mais nenê e amável em território nacional/internacional*/
/*Exercício 4 - A*/

/*Exercício 4 - B*/
// const identificaAluno = (nome, idade, endereco, estudante) =>
// {
//     nome = prompt("Olá! Por favor, informe seu nome: ")
//     idade = prompt("Olá! Por favor, informe sua idade: ")
//     endereco = prompt("Olá! Por favor, informe seu endereço: ")
//     estudante = prompt("Olá! Por favor, informe se é estudante: [sim/não]")
//         if (estudante == "sim")
//             {   
//                 return resultA = console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou estudante")
//             }
//                 else 
//                     {
//                         return resultB = console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e não sou estudante")   
//                     }
// }
// identificaAluno()
/*Exercício 4 - B*/
/***************************************************************************************************************************/
/*Exercícios de escrita de código*/
/*Exercício 5*/
const calculoSeculo = (ano) =>
{

    ano = prompt ("Olá! Informe o ano que deseja consultar: ")

    if (1 >= ano >= 100)
        {
            var seculo = "I"
        }
        else if (101 >= ano >= 200)
            {
                var seculo = "II"
            }
            else if (201 >= ano >= 300)
                {
                    var seculo = "III"
                }
                else if (301 >= ano >= 400)
                    {
                        var seculo = "IV"
                    }
                    else if (401 >= ano >= 500)
                        {
                            var seculo = "V"
                        }
                        else if (501 >= ano >= 600)
                            {
                                var seculo = "VI"
                            }
                            else if (601 >= ano >= 700)
                                {
                                    var seculo = "VII"
                                }
                                else if (701 >= ano >= 800)
                                    {
                                        var seculo = "VIII"
                                    }
                                    else if (801 >= ano >= 900)
                                        {
                                            var seculo = "IX"
                                        }
                                        else if (901 >= ano >= 1000)
                                            {
                                                var seculo = "X"
                                            }
                                            else if (1001 >= ano >= 1100)
                                                {
                                                    var seculo = "XI"
                                                }
                                                else if (1101 >= ano >= 1200)
                                                    {
                                                        var seculo = "XII"
                                                    }
                                                    else if (1201 >= ano >= 1300)
                                                        {
                                                            var seculo = "XIII"
                                                        }
                                                        else if (1301 >= ano >= 1400)
                                                            {
                                                                var seculo = "XIV"
                                                            }
                                                            else if (1401 >= ano >= 1500)
                                                                {
                                                                    var seculo = "XV"
                                                                }
                                                                else if (1501 >= ano >= 1600)
                                                                    {
                                                                        var seculo = "XVI"
                                                                    }
                                                                    else if (1601 >= ano >= 1700)
                                                                        {
                                                                            var seculo = "XVII"
                                                                        }
                                                                            else if (1701 >= ano >= 1800)
                                                                                {
                                                                                    var seculo = "XVIII"
                                                                                }
                                                                                    else if (1801 >= ano >= 1900)
                                                                                        {
                                                                                            var seculo = "XIX"
                                                                                        }
                                                                                            else if (1901 >= ano >= 2000)
                                                                                                {
                                                                                                    var seculo = "XX"
                                                                                                }
                                                                                                    else if (2001 >= ano >= 2100)
                                                                                                        {
                                                                                                            var seculo = "XXI"
                                                                                                        }
    return response = console.log("O ano " + ano + " pertence ao seculo " + seculo + ".")
}

calculoSeculo()