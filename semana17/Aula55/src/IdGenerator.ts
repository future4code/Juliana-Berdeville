import {v4} from 'uuid'

/*Criação da classe IdGenerator, cuja função é gerar IDs para usuários*/
export class IdGenerator {

    /*A classe IdGenerator tem um método -- generateId -- que consiste na geração de ID*/
    public generateId( ): string {
        /*Criamos uma variável -- id -- que recebe a chamada do método gerador de IDs 
           da versão 4 do uuid*/
            const id = v4();
         /*Criamos uma variável -- id -- que recebe a chamada do método gerador de IDs 
           da versão 4 do uuid*/

        /*Retornamos esta mesma variável (id)*/
            return id;   
        /*Retornamos esta mesma variável (id)*/  
    }
    /*A classe IdGenerator tem um método -- generateId -- que consiste na geração de ID*/
}
/*Criação da classe IdGenerator, cuja função é gerar IDs para usuários*/