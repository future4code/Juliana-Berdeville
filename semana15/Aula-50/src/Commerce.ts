import {Place} from  './Place'

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      cep: string
    ) {
      super(cep);
    }

    public getFloors (): number {
        return this.floorsQuantity
    }
  }

  /*Aqui temos uma instanciação da classe Place por meio da classe Commerce. 
  A lógica dela é semelhante às das demais. */