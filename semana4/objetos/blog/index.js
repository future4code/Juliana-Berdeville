/*Inicialização do array de objetos*/
var arrayDeObjetos = [ ]
/*Inicialização do array de objetos*/

/*Elementos do Form que compoem um post e vão para o objeto oPost*/
const inputTitulo = document.getElementById('post-titulo')
const inputAutor = document.getElementById('post-autor')
const inputContent = document.getElementById('post-conteudo')
const inputTexto = document.getElementById('post-corpo-de-texto')
const  botao = document.getElementById('botao')
/*Elementos do Form que compoem um post e vão para o objeto oPost*/

/*Função aplicada à textarea com trigger no pressionar da tecla Enter*/
function apertouEnter(evento) 
{
    if (evento.key == "Enter") 
        {            
            /*objeto oPost declarado em escopo local para funcionamento desta função*/
            const oPost =
            {
                titulo: inputTitulo.value,
                autor: inputAutor.value,
                content: inputContent.value,
                texto: inputTexto.value,
            }
            /*objeto oPost declarado em escopo local para funcionamento desta função*/
            arrayDeObjetos.push(oPost)
            console.log(arrayDeObjetos)
        }

}
/*Função aplicada à textarea com trigger no pressionar da tecla Enter*/

/*Função aplicada ao botão com trigger ao pressionar ok mesmo*/
function enviaPostClick(evento) 
{
         /*objeto oPost declarado em escopo local para funcionamento desta função*/
         const oPost =
         {
             titulo: inputTitulo.value,
             autor: inputAutor.value,
             content: inputContent.value,
             texto: inputTexto.value,
         }
         /*objeto oPost declarado em escopo local para funcionamento desta função*/
           
            arrayDeObjetos.push(oPost)
            console.log(arrayDeObjetos)
}
/*Função aplicada ao botão com trigger ao pressionar o mesmo*/

function inserePosts()
{
    const section = document.getElementById('Exibe-posts')
    section += "<div>" + arrayDeObjetos + "</div>"
}