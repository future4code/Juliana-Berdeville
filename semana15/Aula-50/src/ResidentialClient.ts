import {Residence} from './Residence'
import {Place} from './Place'
import {Client} from './Client'

export class ResidentialClients extends Residence{

  constructor (private cpf: string){
      super(dwellersQuantity, cep)
  }

    public getCPF (): string {
        return this.cpf
    }
  }