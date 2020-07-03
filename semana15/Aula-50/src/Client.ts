export interface Client {
    name: string; //O cliente tem um nome
    registrationNumber: number; // O cliente tem uma matrícula
    consumedEnergy: number;  //O cliente consumiu X de energia
    calculateBill(): number; //O cliente vai ter uma conta pra pagar, baseada no que consumiu
  }

