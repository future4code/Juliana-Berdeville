// /*Exercício I - Leia o código abaixo. Indique todas as mensagens impressas no console.*/
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2 && bool3
// console.log("a. ", resultado)
// // /*R.: false*/

// resultado = (bool2 || bool1) && !bool3
// console.log("b. ", resultado)
// /*R.: false*/

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)
// /*R.: true*/

// resultado = (resultado && (!bool1 || bool2)) && !bool3
// console.log("d. ", resultado)
// // /*R.: false*/

// console.log("e. ", typeof resultado)
// // /*R.: boolean*/
/************************************************************************************************************************/
// /*2. Leia o código abaixo:*/

//  let array
//  console.log('I. ', array)

//  array = null
//  console.log('II. ', array)


//  array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//  console.log('III. ', array.length)

//  let i = 0
//  console.log('IV. ', array[i], " e ", array[i+1])

//  array[i+1] = 19
//  const valor = array[i+6]
//  console.log('V. ', array[i+1], " e ", valor)

//  i+=1
//  array[i] = array[i-1]
//  console.log('VI. ', array[i])

//  i = array.length - 1
//  array[i] = array[i-3]
//  const resultadoC = array[i]%array[1]
//  console.log('VII. ', resultadoC)

// /*a. O que é array e cono se declara em Js? R.: Array é um objeto capaz de armazenar outros objetos dentro de si, sejam strings, caracteres ou outros valores. Para declarar um array em Js precisamos definir seu nome como uma variável e definir seus elementos dentro de colchetes.
//   b. Qual é o index inicial de um array? R.: Todos os arrays se iniciam com seu idex na posição 0, ou seja, seu primeiro elemento sempre estará na posição zero e será representado por um index com este valor.
//   c. Como se determinar o tamanho de um array? R.: Por meio da função lenght.  
//   d. Indique todas as mensagens impressas no console. R.:
// > I. undefined
// > II. null 
// > III. 11 
// > IV. 3 e 4 
// > V. 19 e 9 
// > VI. 3 
// > VII. 1 */
/************************************************************************************************************************/
// // /*Exercício de escrita de código - 1*/
//  var calculaKelvin, calculaFarenheit
//  var celsius, farenheit
// /*a. Calcule e mostre o valor de 77°F em K, mostrando a unidade no console também. R.: 298.15*/
// farenheit = 77
// calculaKelvin = (farenheit-32)*5 /9  + 273.15
// console.log("a." + calculaKelvin)
// /*b. Calcule e mostre o valor de 80°C em F, mostrando a unidade no console também.*/
// celsius = 80
// calculaFarenheit = (80*9)/5 + 32
// console.log("b." + calculaFarenheit)
// /*c. Calcule e mostre o valor de 80°C em F, mostrando a unidade no console também.*/
// celsius = 30
// calculaFarenheit = (30*9)/5 + 32
// farenheit = calculaFarenheit
// calculaKelvin = (farenheit - 32)*5 /9 + 273.15
// console.log("c. Em celsius: 80°. Em Farenheit: " + calculaFarenheit + "." + "E em Kelvin: " + calculaKelvin)
// /*d. Altere o ultimo item para que o usuário insira o valor em graus Celsius que ele deseja converter.*/
// var valorCelsius = prompt("Oi! Informe o valor da temperatura em Celsius: ")
/************************************************************************************************************************/
/*Exercício de escrita de código - 2*/
// let foodie, bookie, wookie, cookie

// foodie = prompt("Qual é a sua comida favorita?")
// console.log("Qual é a sua comida favorita?")
// console.log("Resposta: " + foodie)

// bookie = prompt("Qual é o seu livro favorito?")
// console.log("Qual é o seu livro favorito?")
// console.log("Resposta: " + bookie)

// wookie = prompt("Qual é o seu wookie favorito?")
// console.log("Qual é o seu wookie favorito?")
// console.log("Resposta: " + wookie)

// cookie = prompt("Qual é o seu cookie favorito?")
// console.log("Qual é o seu cookie favorito?")
// console.log("Resposta: " + cookie)
/************************************************************************************************************************/
/*Exercício de escrita de código - 3*/
// var desconto = prompt("Há algum desconto a ser aplicado em sua conta de energia? Informe o valor inteiro. (exemplo: 15% de desconto = 15)")
// var desconto = desconto/100
// var quilowatt = prompt("Olá! Para iniciar os cálculos, pedimos que informe o número de quilowatts em sua conta de energia:")
// var resultado = 0.05 * quilowatt
// var calculoDesconto = (0.05 * quilowatt) * desconto
// var resultadoComDesconto = resultado - calculoDesconto
// console.log("Prontinho! Com base nos " + quilowatt + " quilowatts informados, o valor a ser pago é: " + resultado)
// console.log("Caso tenha informado algum desconto a ser aplicado em sua conta de energia, o valor com este desconto é: " + resultadoComDesconto)
/************************************************************************************************************************/
/*Exercício de escrita de código - Desafio*/

// var libras = prompt("Informe o valor em libras: ")
// var quilos = libras * 0.4
// console.log("a. Prontinho! " + libras + " libras equivalem a: " + quilos + " quilos.")

// var oncas = prompt("Informe o valor em onças: ")
// var quilos = oncas * 0.03
// console.log("b. Prontinho! " + oncas + " onças equivalem a: " + quilos + " quilos.")

// var milhas = prompt("Informe o valor em milhas: ")
// var metros = milhas * 1609.2
// console.log("c. Prontinho! " + milhas + " milhas equivalem a: " + metros + " metros.")

// var pés = prompt("Informe o valor em pés: ")
// var metros = pés * 1609.2
// console.log("d. Prontinho! " + pés + " pés equivalem a: " + metros + " metros.")

// var galões = prompt("Informe o valor em galões: ")
// var litros = galões * 1609.2
// console.log("e. Prontinho! " + galões + " galões equivalem a: " + litros + " litros.")

// var xicaras = prompt("Informe o valor em xícaras: ")
// var litros = xicaras * 1609.2
// console.log("f. Prontinho! " + xicaras + " xícaras equivalem a: " + litros + " litros.")





