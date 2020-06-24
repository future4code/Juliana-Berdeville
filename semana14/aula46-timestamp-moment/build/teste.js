"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const today = moment();
const inicio = moment("01/01/2020", "DD/MM/YYYY");
const diffInDays = moment(inicio).diff(today, "days");
const diffInMonths = moment(inicio).diff(today, "months");
//# sourceMappingURL=teste.js.map

console.log("A diferença entre as datas é, em dias: " + diffInDays)
console.log("A diferença entre as datas é, em meses: " + diffInMonths)