import {Client} from  './Client' //importanto a interface client, do arquivo Client.ts
import {Place} from  './Place' //importando a classe abstrata Place, do arquivo Place.ts
import {Residence} from './Residence' //importando a classe Residence, do arquivo Residence.ts
import {Commerce} from './Commerce' //importando a classe Commerce, do arquivo Commerce.ts
import {Industry} from './Industry' //importando a classe Industry, do arquivo Industry.ts
import { createNamedExports } from 'typescript'
/*[Exercicio1]*/
const jujuVirouCliente: Client = {
       name: 'Juliana',
       registrationNumber: 71,
       consumedEnergy: 100,
       calculateBill: () => 100  
}

console.log(jujuVirouCliente)
console.log(jujuVirouCliente.calculateBill())

/* Respostas
Foram impressas as informações do cliente que instanciei: nome, ID e quanto o cliente 
consumiu de energia. Essas informações foram oriundas do seguinte comando:
console.log(jujuVirouCliente)
Adicionalmente foi impresso o método de calculo da conta de luz do cliente também.  

Fazendo um console.log mais específico, console.log(jujuVirouCliente.calculateBill()),
apareceu apenas o resultado da função - que no momento retorna apenas um valor aleatório,
no caso, 100.
*/
/*[Exercicio1]*/

/*[Exercicio2]*/

// const thisPlace = new Place ("12345-678");

/* Respostas
[A] Não é possível instanciar um objeto desta classe pois esta é uma classe abstrata.
Essa é, basicamente, a mensagem de erro que obtemos do editor de texto/IDE.
[B] Precisamos criar uma outra classe que herde informações dessa clase abstrata.
*/

/*[Exercicio2]*/


/*[Exercicio3]*/
const newResidence = new Residence (4, "12345-678") //Criando o objeto newResidence, instância da classe Residence
console.log(newResidence)
const newCommerce = new Commerce (3, "13345-678") //Criando o objeto newCommerce, instância da classe Commerce
console.log(newCommerce)
const newIndustry = new Industry (1000, "14445-678") //Criando o objeto newIndustry, instância da classe Industry
console.log(newIndustry)
/*[Exercicio3]*/