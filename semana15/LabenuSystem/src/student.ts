/*Esta será uma classe abstrata*/
import {user} from './user'

export class Student implements user{
    constructor (
                    public id: number, 
                    public nome: string, 
                    public email: string, 
                    public bday: string, 
                    public hobbies: string
                )
                {
                        this.nome = nome;
                        this.id = 098765;
                }

 
    public getInfo (): number {
        return this.id
    }


}