"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const addEventosNaAgenda = (agenda, nome, descricao, inicio, fim) => {
    agenda.push(nome);
    agenda.push(descricao);
    agenda.push(moment(inicio));
    agenda.push(moment(fim));
    if (nome && descricao && inicio && fim === null || undefined) {
        console.log("Opa! Está faltando alguma coisa. Pode preencher novamente?");
    }
    const today = moment();
    const diffInDays = moment(inicio).diff(today, "days");
    const diffInMonths = moment(inicio).diff(today, "months");
};
//# sourceMappingURL=exercicio4.js.map