/*importando dependências necessárias*/
import * as moment from 'moment'
/*importando dependências necessárias*/

/*Exercício 1*/
/*Criando um tipo*/
type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    endsAt: moment.Moment
}
/*Criando um tipo*/


/*Criando um array, de escopo global, representando os eventos da agenda*/
const agenda : event[] = [
    {
        name: "Aula de violino",
        description: "Toca o Vivaldi aí!",
        startAt: moment("23/06/2020 16:00", "DD/MM/YYYY HH:mm"),
        endsAt: moment("23/06/2020 17:30", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Aula de canto",
        description: "Quando eu soltar a minha voz, por favor me entendaaaa",
        startAt: moment("24/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        endsAt: moment("24/06/2020 18:30", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Aula de clarinete",
        description: "Sabia que é fácil tirar 'Amigo estou aqui'?",
        startAt: moment("25/06/2020 18:00", "DD/MM/YYYY HH:mm"),
        endsAt: moment("25/06/2020 19:30", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Aula de piano",
        description: "Ah, não. Hanon não.",
        startAt: moment("26/06/2020 19:00", "DD/MM/YYYY HH:mm"),
        endsAt: moment("26/06/2020 20:30", "DD/MM/YYYY HH:mm")
    }
]
/*Criando um array, de escopo global, representando os eventos da agenda*/
/*Exercício 1*/