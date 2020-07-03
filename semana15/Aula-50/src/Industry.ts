import {Place} from  './Place'

export class Industry extends Place {
    constructor(
            protected machinesQuantity: number, 
            cep: string
          ) {
          super(cep);
    }

    public getMachines():number {
        return this.machinesQuantity
    }
  }

    /*Aqui temos uma instanciação da classe Place por meio da classe Industry. 
  A lógica dela é semelhante às das demais. */