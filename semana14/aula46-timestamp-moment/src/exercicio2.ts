/*importando dependências necessárias*/
import * as moment from 'moment'
/*importando dependências necessárias*/

/*Definindo para português brasileiro*/
moment.locale("pt-br")
/*Definindo para português brasileiro*/

/*a)Criando uma função que printa no console.*/
const displayAgenda = (agenda: agenda[]): void => {
    agenda.forEach((item: agenda) => {
     
      /*Mostrando no console*/
      console.log(`
                    Nome: ${item.name}
                    Horário de início: ${item.startsAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
                    Horário de fim: ${item.endsAt.format("DD de MMMM de YYYY, HH:mm")}
                    Descrição: ${item.description}
                `);
        /*Mostrando no console*/
    });
  };
/*Criando uma função que printa no console.*/

/*b)Usando o moment não precisaríamos fazer nada, pois, por padrão
ele retira a localização do browser ou do servidor node.js e escolhe
o fuso com base nisso.
Mas, considerando uma alteração de local do evento, teríamos que usar 
a função utcOffset(). 
E tendo em vista que o evento vai mudar pra Londres, que está a 4 horas
à frente, usariamos utcOffset("-0400")*/