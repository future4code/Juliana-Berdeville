/*Esta será uma classe*/

import {user} from './user'

export abstract class Teacher implements user{
    constructor (
                    public id: number, 
                    public nome: string, 
                    public email: string, 
                    public bday: string, 
                    public expertise: string
                )
                {
                        this.nome = nome;
                        this.id = 123456;
                }

 
    public getInfo (): string {
        return this.expertise
    }


}