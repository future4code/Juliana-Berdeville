const meuInput = document.getElementById('novaTarefa') /*ID do Input text*/
const meuBotao = document.getElementById("botao") /* ID do botão*/
const diaDaSemana = document.getElementById('diaDaSemana') /*ID do selection*/
meuBotao.onclick = addTarefa() /*Meu botão, quando for clicado, vai chamar a função addTarefa*/

function addTarefa () /*Função addTarefa recebe meuInput*/
{
        if (diaDaSemana.value === "Segunda-feira") /*Caso o valor do selection for "Segunda-feira", faz conforme abaixo*/
        {
                const segunda = document.getElementById('segunda') /*segunda recebe o id da DIV referente à seção 'Segunda-feira' da página*/
                segunda.innerHTML += "Oi" /*Esta seção receberá dentro de seu HTML o valor do Input*/
        }
}

