/*"O jogo de azar é tão universal e sua prática tão agradável que eu presumo que seja uma coisa ruim." - BROUN CAMPBELL, Heywood*/


/*Saudações aos usuários*/ 
console.log("Bem-vinde ao Blackjack! :) ")
/*Saudações aos usuários*/

/*Solicitação de nova rodada*/
var game = confirm("Deseja inciar uma nova rodada? [OK - sim / CANCEL - não]")
/*Solicitação de nova rodada*/

if (game == true)
{
/*Solicitação de nome de usuário*/ 
var usuario = prompt("Quem desafiará o all-mighty computador?")
/*Solicitação de nome de usuário*/

/*Início de rodada*/

/*usuário compra duas cartas random*/
const cartauserI = comprarCarta();  
const cartauserII = comprarCarta();  
/*usuário compra duas cartas random*/

/*PC compra duas cartas random*/
const cartapcI = comprarCarta(); 
const cartapcII = comprarCarta(); 
/*PC compra duas cartas random*/

/*Concatenação das cartas do usuário*/
const maoDoUser = cartauserI.texto + " " +  cartauserII.texto
/*Concatenação das cartas do usuário*/

/*Concatenação das cartas do PC*/
const maoDoPC = cartapcI.texto + " " +  cartapcII.texto
/*Concatenação das cartas do PC*/

/*Soma dos valores das cartas do usuário*/
const pontuacaoUser = cartauserI.valor + cartauserII.valor
/*Soma dos valores das cartas do usuário*/

/*Soma dos valores das cartas do PC*/
const pontuacaoPC = cartapcI.valor + cartapcII.valor
/*Soma dos valores das cartas do PC*/

/*Exibição dos valores*/
console.log(usuario + " - cartas: " + maoDoUser + " - pontuação : " + pontuacaoUser)
console.log("Computador - cartas: " + maoDoPC + " - pontuação : " + pontuacaoPC)
/*Exibição dos valores*/

/*Validação*/
   if (pontuacaoPC > pontuacaoUser) /*Se o valor das cartas do PC forem maiores que a da(o) usuária(o)*/
      {
         console.log("O computador ganhou. All hail the all-mighty computer master") /*O PC vence*/
      }
         else if (pontuacaoPC === pontuacaoUser) /*IF encadeado pra verificar se os valores foram iguais*/
            {
               console.log("Empatchy!") /*Se forem iguais, há empate*/
            }
               else /*Em ultimo caso, se os valores não caírem nos testes acima, certamente cairão aqui*/
                {
                   console.log("N-NANI?! (...) " + usuario + " ganhou.") /*Neste caso, se o valor das cartas do PC não for maior ou igual ao valor das cartas da(o) usuária(o), deve ser menor. Ou seja: vitória da(o) usuária(o)*/
                   console.log("*crowd consistently shocked waving in the background*")
                }
/*Validação*/
}
   else
   {
      console.log("Goodbye!")
   }