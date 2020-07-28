# Aula 63 - Semana 19

#### Exercício 1
a) Em userInterface.ts: 

    export interface User {
	name: string
	balance: number
    }

b) Em index.ts:

    import {User} from './src/userInterface'
    function obeyCapitalism (user: User, value: number): User{
        if (user.balance >= value) {
            return {
                        ...user, balance: user.balance - value 
            }   
            return undefined;     
        }
    }
   

### Exercício 2
a)

    describe('Saldo maior que total da compra', () => {
        test('A operação DEVE ser efetuada', () => {
        const user : User ={
                name: 'Juju',
                balance: 1000
        }
        const purchase = obeyCapitalism(user, 600)
        expect(purchase).toEqual({...user, balance: 400})
    })
    })
   
    
b) 

    describe('Saldo igual ao valor total da compra', () => {
        test('A operação DEVE ser efetuada', () => {
            const user: User = {
                name: 'Ju', 
                balance: 400
            }
            const purchase = obeyCapitalism(user, 400)
            expect(purchase).toEqual({...user, balance: 0})
        })
    })
    
    
c) 

    describe('Saldo menor que valor total da compra', () => {
        test('A operação NÃO DEVE ser efetuada', () => {
            const user: User = {
                name: 'Juliana', 
                balance: 100
            }
            const purchase = obeyCapitalism(user, 400)
            expect(purchase).toEqual(undefined)
        })
    })
    
    
### Exercício 3

a) 

    /*Variáveis para interação com a função checkCasinoClient - ENTRADAS*/
    enum BASELOCATION {
        EUA = "EUA",
        BRAZIL = "BRAZIL",
    }
    enum NATIONALITY {
        BRAZILIAN = "BRAZILIAN",
        AMERICAN = "AMERICAN",
    }
    interface Client {
        name: string;
        age: number;
        nationality: NATIONALITY;
    }
    interface Casino {
    name: string;
    location: BASELOCATION;
    }
    /*Variáveis para interação com a função checkCasinoClient - ENTRADAS*/
  
      /*Interfaces usadas para formatação e tipagem da saída da função - SAÍDAS*/
    interface Output {
        brazilians: OutputItem;
        americans: OutputItem;
    }
  
    interface OutputItem {
        allowed: string[];
        unallowed: string[];
     }
    /*Interfaces usadas para formatação e tipagem da saída da função - SAÍDAS*/

    export function checkCasinoClient(casino: Casino, clients: Client[]): Output {
    const customersAllowed: Client[] = []
    const customersUnallowed: Client[] = []

        for (const client of clients){
            if (casino.location === BASELOCATION.EUA) {
                    if (client.age >= 21){
                        customersAllowed.push(client)
                    } else {
                        customersUnallowed.push(client)
                    }
            }
            else if (casino.location === BASELOCATION.BRAZIL) {
                    if (client.age >= 18) {
                        customersAllowed.push(client) /*cliente entra na lista de permitidos*/
                    } else {
                        customersUnallowed.push(client) /*cliente entra na lista de não-permitidos*/
                    }
            }
        }

        return  {
            brazilians: {
                allowed: customersAllowed /*Filtro e mapeamento de quem pode entrar*/
                  .filter((client) => client.nationality === NATIONALITY.BRAZILIAN)
                  .map((client) => client.name),
                unallowed: customersUnallowed /*Filtro e mapeamento de quem NÃO pode entrar*/
                  .filter((client) => client.nationality === NATIONALITY.BRAZILIAN)
                  .map((client) => client.name),
            },
            americans: {
                allowed: customersAllowed /*Filtro e mapeamento de quem pode entrar*/
                  .filter((client) => client.nationality === NATIONALITY.AMERICAN)
                  .map((client) => client.name),
                unallowed: customersUnallowed /*Filtro e mapeamento de quem NÃO pode entrar*/
                  .filter((client) => client.nationality === NATIONALITY.AMERICAN)
                  .map((client)=> client.name)
            }
        }
    }
    

c)  Implementar a função não foi intuitivo pra mim. Tive que fazer uma engenaria reversa do código que estava na Dica do exercício para conseguir entender e gostei bastante da função como um todo. 


### Exercício 4
a)
    
    describe('brasileiro com entrada permitida', () => {
     test('ENTRADA AUTORIZADA', () => {
         const aBrazilianClient: Client={
             name: 'Juliana', 
             age: 23,
             nationality: NATIONALITY.BRAZILIAN
         }

         const aBrazilianCasino: Casino={
             name: 'Casino Boladão', 
             location: BASELOCATION.BRAZIL
         }
             const entrance = checkCasinoClient(aBrazilianCasino, [aBrazilianClient])

             expect (entrance.brazilians.allowed).toEqual(["Juliana"])
     })
    })
    

b) 

    describe('americano com entrada permitida', () => {
     test('ENTRADA PERMITIDA', () => {

         const aAmericanClient: Client = {
             name: 'Jujubee',
             age: 23,
             nationality: NATIONALITY.AMERICAN
         }

         const yetAnotherAmericanCasino: Casino = {
             name: 'The Missouri Belle',
             location: BASELOCATION.EUA
         }

        const entrance = checkCasinoClient(yetAnotherAmericanCasino, [aAmericanClient])

         expect(entrance.americans.allowed).toEqual(['Jujubee'])
     })   
    })
    
    
c)

    describe('duas brasileiras e duas americanas, todos com idades iguais', () => {
     test('ENTRADA PROIBIDA', () => {
         const Cher: Client={
             name: 'Cher', 
             age: 19,
             nationality: NATIONALITY.AMERICAN   
         }
         const Audrey: Client={
             name: 'Audrey',
             age: 19,
             nationality: NATIONALITY.AMERICAN  
         }
         const Gal: Client={ 
             name: 'Gal',
             age: 19,
             nationality: NATIONALITY.BRAZILIAN  
         }
         const Bethania: Client={
             name: 'Bethania',
             age: 19,
             nationality: NATIONALITY.BRAZILIAN 
         }
         const suchAVeryAgreeableCasino: Casino={
             name: 'Triboz', 
             location: BASELOCATION.EUA
         }
         const entrance = checkCasinoClient(suchAVeryAgreeableCasino, [Cher, Audrey, Gal, Bethania])
         expect(entrance.americans.unallowed).toEqual(["Cher","Audrey"])
         expect(entrance.brazilians.unallowed).toEqual(["Gal","Bethania"])
     })
    })


d)

    describe('duas brasileiras e duas americanas cada nacionalidade com idades diferentes', () => {
    test('ENTRADA PERMITIDA APENAS PARA AMERICANAS', () => {
        const Dandara: Client={
            name: 'Dandara',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }
        const Marielle: Client={
            name: 'Marielle',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }

        const Harriet: Client={
            name: 'Harriet',
            age: 21,
            nationality: NATIONALITY.AMERICAN
        }
        const Breanna: Client={
            name: 'Breanna',
            age: 21,
            nationality:NATIONALITY.AMERICAN
        }

        const anIdealCasino: Casino={
            name: 'GirlBoss casino',
            location: BASELOCATION.EUA
        }

        const entrance = checkCasinoClient(anIdealCasino, [Dandara, Marielle, Breanna, Harriet])

        expect(entrance.americans.allowed).toEqual(["Breanna", "Harriet"])
        expect(entrance.brazilians.unallowed).toEqual(["Dandara", "Marielle"])
    })
    })
    
    

### Exercício 5
a)

    describe('um brasileiro em um cassino brasileiro', () => {
    test('MENOR QUE 2, MAIOR QUE 0', () => {
        const oTalBrasileiro: Client={
            name: 'Brasileiro',
            age: 30, 
            nationality:NATIONALITY.BRAZILIAN
        }

        const oTalCassino: Casino={
            name: 'Coqueiro manso',
            location: BASELOCATION.BRAZIL
        }

        const entrance = checkCasinoClient(oTalCassino, [oTalBrasileiro])

    expect(entrance.brazilians.allowed.length).toBeGreaterThan(0);
    expect(entrance.brazilians.allowed.length).toBeLessThan(2);
    })
    })
    

b)

    describe('um americano num estabelecimento no Brasil', () => {
    test('UNALLOWED.LENGTH = 0', () => {
        const anAmericanFellow:Client={
            name: 'yoyo',
            age: 30, 
            nationality: NATIONALITY.AMERICAN
        }

        const oCassinoBoladao:Casino={
            name: 'Cassinaço',
            location: BASELOCATION.BRAZIL
        }

        const entrance = checkCasinoClient(oCassinoBoladao, [anAmericanFellow])

        expect(entrance.americans.unallowed.length).toEqual(0)
    })
    })
    
c) 

    describe('Dois brasileiros, dois americanos -- ambos com 19y --, num cassino americano', () => {
    test("UNALLOWED contem nome de algum dos usuários", () => {
        const yahoo:Client={
            name: 'Erick', 
            age: 19,
            nationality: NATIONALITY.AMERICAN
        }
        const yeehaw:Client={
            name:'Roy',
            age: 19,
            nationality: NATIONALITY.AMERICAN
        }

        const coe:Client={
            name: 'João Pedro', 
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }
        const eai:Client={
            name:'João Vicente',
            age: 19, 
            nationality: NATIONALITY.BRAZILIAN
        }

        const elCasino:Casino={
            name: 'El Casino del mundo loco',
            location: BASELOCATION.EUA
        }

        const entrance = checkCasinoClient(elCasino, [yahoo, yeehaw, coe, eai])

        expect(entrance.americans.unallowed).toContain('Erick')
        expect(entrance.brazilians.unallowed).toContain('João Vicente')
    })
    })

d) 


    describe('Dois brasileiros(19y), dois americanos(21y), num cassino americano', () => {
    test('BRAZILIANS.UNALLOWED > 1 E AMERCIANS.UNALLOWED < 1', () => {
        const eagleFellowNumber1:Client={
            name: 'Joe', 
            age: 21,
            nationality: NATIONALITY.AMERICAN
        }
        const eagleFellowNumber2:Client={
            name:'Jack', 
            age: 21, 
            nationality: NATIONALITY.AMERICAN
        }

        const manoOncaNumero1:Client={
            name: 'Vinicius',
            age: 19,
            nationality: NATIONALITY.BRAZILIAN
        }
        const manoOncaNumero2: Client={
            name:'Eduardo',
            age: 19, 
            nationality: NATIONALITY.BRAZILIAN
        }

        const anVegasCasino:Casino={
            name: 'Elvis Palace',
            location: BASELOCATION.EUA
        }

        const entrance = checkCasinoClient(anVegasCasino, [eagleFellowNumber1, eagleFellowNumber2, manoOncaNumero1, manoOncaNumero2])
        
        expect(entrance.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(entrance.americans.unallowed.length).toBeLessThan(1)
    })
    })














