/*"Até o azar vem em dobro quando se está com sorte." - MAFTUM, Nyck*/


/*Saudações aos usuários*/ 
console.log("Bem-vinde ao Blackjack! :) ")
/*Saudações aos usuários*/

/*Solicitação de nova rodada*/
var game = confirm("Deseja inciar uma nova rodada? [OK - sim / CANCEL - não]")
/*Solicitação de nova rodada*/

/*Validçação da solicitação de nova rodada*/
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
if (cartauserI == "A" && cartauserII == "A" || cartapcI == "A" && cartapcII == "A") /*Caso a mão de algum dos jogadores venha com Ázes duplos, há re-sorteio*/
   {
      /*RE-SORTEIO*/
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
      /*RE-SORTEIO*/
       var compreBatom = confirm("Suas cartas são " + maoDoUser + ". A carta revelada do computador é: " +  cartapcI.texto + " \n Deseja comprar mais uma carta?") /*Após o re-sorteio, a mão do usuário e a primeira carta do computador são reveladas*/
         if (compreBatom = true)
         {
               for(var i=0; i<=20; i++)
               {                
                  var novaMaoDoUser = [" "]
                  var oi = novaMaoDoUser.push(comprarCarta()) 
                  const novaPontuacaoUser = novaMaoDoUser.valor
                  var compra = confirm("Suas cartas são " + oi + ". A carta revelada do computador é: " +  cartapcI.texto + " \n Deseja comprar mais uma carta?")
                     if (compra != true)
                        {  
                              break;
                        }
               }
                  alert("As cartas de " + usuario + " são: " + maoDoUser + " e sua pontuação é: " + pontuacaoUser + "." + "\n As cartas do computador são: " + maoDoPC + " e sua pontuação é: " + pontuacaoPC + "\n All hail the all-mighty computer")
         }
   }

   if (pontuacaoPC > pontuacaoUser) /*Se o valor das cartas do PC forem maiores que a da(o) usuária(o)*/
      {
         console.log("O computador ganhou. All hail the all-mighty computer master") /*O PC vence*/
      }
         else if (pontuacaoPC === pontuacaoUser) /*IF encadeado pra verificar se os valores foram iguais*/
            {
               console.log("Empatchy!") /*Se forem iguais, há empate*/
            }
               else if (pontuacaoPC < pontuacaoUser) /*Em ultimo caso, se os valores não caírem nos testes acima, certamente cairão aqui*/
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
/*Validçação da solicitação de nova rodada*/