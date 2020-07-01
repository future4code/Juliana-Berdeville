import {Place} from  './Place'

export class Residence extends Place {
    constructor(
            protected dwellersQuantity: number,
            cep: string
    ) {
      super(cep);
    }

    public getDwellersQuantity(): number {
        return this.dwellersQuantity
      }
  }

  /*Aqui temos instanciada a classe Residence, que é herdeira da classe Place. 
  Esta primeira classe (Residence) tem seu atributo 'residentsQuantity' (protected), 
  que determina quantas pessoas moram na casa e consomem energia. 
  Além disso, há o CEP, que é uma string. Ambas as informações estão dentro do construtor
  desta classe. 
  Como esta classe é filha de outra, ela também herda o cep - elemento construtor - da
  classe mãe*/