"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const displayAgenda = (agenda) => {
    agenda.forEach((item) => {
        console.log(`
                    Nome: ${item.name}
                    Horário de início: ${item.startsAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
                    Horário de fim: ${item.endsAt.format("DD de MMMM de YYYY, HH:mm")}
                    Descrição: ${item.description}
                `);
    });
};
//# sourceMappingURL=exercicio2.js.map