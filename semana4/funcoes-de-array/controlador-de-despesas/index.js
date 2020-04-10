var arrayDeObjetos = [ ]

const secaoCadastro = document.getElementById('cadastro')
const secaoListaCadastro = document.getElementById('lista-cadastro')
const secaoextrato = document.getElementById('extrato')

/*Solicitações da seção de cadastro*/
var valor = document.getElementById('input-valor')
var tipoDeDespesa = document.getElementById('tipo-despesa')
var description = document.getElementById('description')
/*Solicitações da seção de cadastro*/

/*Exibição na segunda seção*/
var listagem = document.getElementById('listagem')



function apertouBotao ( ) 
{
    const despesas = 
        {
            valorDespesa: valor.value,
            tipoDespesa: tipoDeDespesa.value,
            descricao: description.value,
        }

                listagem.innerHTML += "Valor " + despesas.valorDespesa + "<br>"
                listagem.innerHTML += "Tipo de despesa: " + despesas.tipoDespesa + "<br>"
                listagem.innerHTML += "Descrição: " + despesas.descricao + "<br><br>"
            
        // arrayDeObjetos.push(despesas)
        // listagem.innerHTML += "Valor: " + arrayDeObjetos[despesas].valor +"."
        // listagem.innerHTML += "Tipo: " + arrayDeObjetos[despesas].tipoDespesa +"."
        // listagem.innerHTML += "Descrição: " + arrayDeObjetos[despesas].descricao +"."
}



/*Exibição na segunda seção*/