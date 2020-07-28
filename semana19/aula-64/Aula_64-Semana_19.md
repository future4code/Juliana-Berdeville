# Aula 64 - Semana 19

#### Exercício 1
a) 

    export interface chooseYourFighter{
    name: string,
    HP: number,
    DEF: number,
    STR: number
    }

b) 

    export const validateFighter = (fighter: chooseYourFighter): boolean => {
    if (!fighter.name || 
        fighter.HP===undefined || 
        fighter.DEF===undefined ||  
        fighter.STR===undefined)
            {
                return false
            }
    
    if (fighter.HP < 0 || fighter.STR < 0 || fighter.DEF < 0){
        return false
    }

    return true
    }
   
____________________________________________________________________________

### Exercício 2
a)

    describe('Verifica o comportamento da função se o personagem tem nome vazio', () => {
    test('RETURN FALSE, PRIMEIRO IF', () => {
        const fighter1={
            name: '',
            HP:1500,
            DEF: 800,
            STR: 900
        }

        const output = validateFighter(fighter1)

        expect(output).toBe(false)
    })
    })
   
    
b) 

    describe('Verifica o comportamento da função se o personagem tem vida vazia', () => {
    test('RETURN FALSE, PRIMEIRO IF', () => {
        const fighter2={
            name:'Gannondorf',
            HP: undefined,
            DEF: 1000,
            STR: 1000
        }

        const output = validateFighter(fighter2)

        expect(output).toBe(false)
    })
    })
    
    
c) 

    describe('Verifica o comportamento da função se personagem tiver força vazia', () => {
    test('RETURN FALSE, PRIMEIRO IF', () => {
        const fighter3={
            name:'Link',
            HP: 1500,
            DEF: 300,
            STR: undefined
        }

        const output = validateFighter(fighter3)

        expect(output).toBe(false)
    })
    })
    
d) 

    describe('Verifica comportamento da função se o personagem tem defesa vazia', () => {
    test('RETURN FALSE, PRIMEIRO IF', () => {
        const fighter4={
            name:'Zelda',
            HP: 1500,
            STR: 1000,
            DEF: undefined
        }

        const output = validateFighter(fighter4)

        expect(output).toBe(false)
    })
    })
    
e)

    describe('Verifica o comportamento da função se personagem tem vida, defesa ou força negativas', () => {
    test('RETURN FALSE, SEGUNDO IF', () => {
        const fighter5={
            name: 'Ness',
            HP: -1500,
            DEF: 600,
            STR: 300
        }

        const output = validateFighter(fighter5)

        expect (output).toBe(false)
    })
    })
    
f)

    describe('Verifica o comportamento da função se personagem tem vida, defesa ou força igual a 0', () => {
    test('RETURN TRUE', () => {
        const fighter6={
            name: 'Isabelle', 
            STR: 1000,
            HP: 1500, 
            DEF: 0
        }

        const output = validateFighter(fighter6)

        expect(output).toBe(true)
    })
    })
    
g) 

    describe('Vefifica o comportamento da função se personagem tem todos os parâmetros válidos', () => {
    test('RETURN TRUE :)', () => {
        const fighter7={
            name: 'Duck hunt',
            STR: 800,
            HP: 1500, 
            DEF: 700
        }

        const output = validateFighter(fighter7)

        expect(output).toBe(true)
    })
    })
____________________________________________________________________________

### Exercício 3

a) 

    const performAttack = (player2: chooseYourFighter, player1: chooseYourFighter) =>{
    /*Exercício 3, letra a*/
    const checkingPlayer1 = validateFighter(player1)
    const checkingPlayer2 = validateFighter(player2)

    if (checkingPlayer1 === false || checkingPlayer2 === false){
        throw new Error('Oops! Invalid character. Try again.')
    }

    if(player2.DEF < player1.STR){
        player2.HP = player1.STR - player2.DEF
    }
    }
    
b)

    const performAttackWithValidator = (player1: chooseYourFighter, 
    player2: chooseYourFighter, validator:(input: chooseYourFighter) => Boolean) => {
        /*Exercício 3, letra b*/
        const checkingPlayer1 = validateFighter(player1)
        const checkingPlayer2 = validateFighter(player2)
    
        if (checkingPlayer1 === false || checkingPlayer2 === false){
            throw new Error('Oops! Invalid character. Try again.')
        }
    
        if(player2.DEF < player1.STR){
            player2.HP = player1.STR - player2.DEF
        }
    }


c)  Ambas implementações são válidas porém a segunda é mais adequada a testes pois não envolve a presença de outra estrutura de código para ser testada e que, consequentemente, atrapalhará os testes a serem executados na função em questão -- performAttack.

____________________________________________________________________________


### Exercício 4
a) Para testarmos a função performAttack com sucesso, devemos criar um mock para a função validator, de forma que este valor sempre esteja garantido sem que realizemos testes adicionais nessa função.
  
b) 

     test('Mock para a validateFighter', () => {
    const validateFighterMock = jest.fn(() => {
            return true
    })
    })
   
c)

    test('Mock para a validateFighter', () => {
    const validateFighterMock = jest.fn(() => {
        return false
    })
    })
    
____________________________________________________________________________


### Exercício 5
        
  












