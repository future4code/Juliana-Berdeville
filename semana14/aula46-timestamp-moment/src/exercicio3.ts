/*importando dependências necessárias*/
import * as moment from 'moment'
/*importando dependências necessárias*/

/*Definindo para português brasileiro*/
moment.locale("pt-br")
/*Definindo para português brasileiro*/

const displayAgenda = (agenda: agenda[]): void => {
    agenda.forEach((item: agenda) => {

      /*Pegando a data atual*/
      const today = moment();
      /*Pegando a data atual*/
     
      /*Calculando a duração do evento em minutos*/  
      const duracaoEmMinutos = item.endsAt.diff(item.startsAt, "minutes");
      /*Calculando a duração do evento em minutos*/ 

      /*Calculando a diferença de dias até o evento*/
      const diffInDays = item.startsAt.diff(today, "days")
      /*Calculando a diferença de dias até o evento*/
     
      /*Mostrando no console*/
      console.log(`
                    Nome: ${item.name}
                    Horário de início: ${item.startsAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
                    Horário de fim: ${item.endsAt.format("DD de MMMM de YYYY, HH:mm")}
                    Duração: ${duracaoEmMinutos}
                    Dias até o evento: ${diffInDays}
                    Descrição: ${item.description}
                `);
        /*Mostrando no console*/
    });
  };
/*Criando uma função que printa no console.*/
