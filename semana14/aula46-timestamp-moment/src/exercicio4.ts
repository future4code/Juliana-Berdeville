/*importando dependências necessárias*/
import * as moment from 'moment'
/*importando dependências necessárias*/

/*Definindo para português brasileiro*/
moment.locale("pt-br")
/*Definindo para português brasileiro*/

/*Criando uma função que adiciona eventos na agenda.*/
const addEventosNaAgenda = (agenda: agenda[], nome: string, descricao: string, inicio: string, fim: string): void => {
    /*Adicionando eventos na agenda*/
        agenda.push(nome);
        agenda.push(descricao);
        agenda.push(moment(inicio));
        agenda.push(moment(fim));
    /*Adicionando eventos na agenda*/

    /*a)Validando que todos os parâmetros foram recebidos*/
        if(nome && descricao && inicio && fim === null || undefined){
            console.log("Opa! Está faltando alguma coisa. Pode preencher novamente? :/")
        }
    /*a)Validando que todos os parâmetros foram recebidos*/

    
    /*b)Validando se há inserção de data anterior ao dia de hoje*/
        /*Capturando data atual*/    
            const today = moment();
        /*Capturando data atual*/  

        /*Calculando a diferença entre as datas atual e inicial em dias e meses*/
            const diffInDays = moment(inicio).diff(today, "days");
            const diffInMonths = moment(inicio).diff(today, "months");
        /*Calculando a diferença entre as datas atual e inicial em dias e meses*/

        /*Usando o IF pra fazer a verificação*/
            if (diffInDays && diffInMonths < 0){
                console.log("Opa! Tem alguma coisa errada. Você não pode inserir um evento antigo na agenda. Desculpe. :(")
            }
        /*Usando o IF pra fazer a verificação*/
    /*b)Validando se há inserção de data anterior ao dia de hoje*/
  };
/*Criando uma função que adiciona eventos na agenda.*/