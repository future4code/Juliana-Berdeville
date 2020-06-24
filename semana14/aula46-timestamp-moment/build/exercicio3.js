"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const displayAgenda = (agenda) => {
    agenda.forEach((item) => {
        const today = moment();
        const duracaoEmMinutos = item.endsAt.diff(item.startsAt, "minutes");
        const diffInDays = item.startsAt.diff(today, "days");
        console.log(`
                    Nome: ${item.name}
                    Horário de início: ${item.startsAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
                    Horário de fim: ${item.endsAt.format("DD de MMMM de YYYY, HH:mm")}
                    Duração: ${duracaoEmMinutos}
                    Dias até o evento: ${diffInDays}
                    Descrição: ${item.description}
                `);
    });
};
//# sourceMappingURL=exercicio3.js.map