/*importando dependências necessárias*/
import * as moment from 'moment'
/*importando dependências necessárias*/

/*Definindo para português brasileiro*/
moment.locale("pt-br")
/*Definindo para português brasileiro*/

 /*b)Validando se há inserção de data anterior ao dia de hoje*/
        /*Capturando data atual*/    
        const today = moment();
        /*Capturando data atual*/  

        const inicio = moment("01/06/2020", "DD/MM/YYYY");
        /*Calculando a diferença entre as datas atual e inicial em dias e meses*/
            const diffInDays = moment(inicio).diff(today, "days");
            const diffInMonths = moment(inicio).diff(today, "months");
        /*Calculando a diferença entre as datas atual e inicial em dias e meses*/
        
        
    /*b)Validando se há inserção de data anterior ao dia de hoje*/