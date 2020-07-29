import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe('Testando a função getUserById', () => {
    let userDatabase = {}
    let hashGenerator = {}
    let tokenGenerator = {}
    let idGenerator = {}
    test('Scenario: user not found', async() => {
            expect.assertions(2)
                try {
                        const getUserById = jest.fn()

                        userDatabase = {getUserById}

                        const userBusiness = new UserBusiness(
                            userDatabase as any,
                            hashGenerator as any, 
                            tokenGenerator as any,
                            idGenerator as any)

                        await userBusiness.getUserById('oops-id')
                } catch(error){
                        /*Assertions, there u go*/
                        expect(error.errorCode).toBe(404)
                        expect(error.message).toBe('Oops. User not found!')
                }
    })

    test('Se o usuário não existir, deve retornar sua mensagem de erro', async () => {
        const getUserById = jest.fn(
          (id: string) =>
            new User(
              'mi-id',
              'Jujubee',
              'Jujubee@labenu.com',
              'hashiii',
              stringToUserRole('ADMIN')
            )
        )
    
        userDatabase = { getUserById }
    
        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        )
    
        const user = await userBusiness.getUserById('mi-id')
    
        expect(getUserById).toHaveBeenCalledWith('mi-id')
        expect(user).toEqual({
          id: 'mi-id',
          name: 'Jujubee',
          email: 'Jujubee@labenu.com',
          role: UserRole.ADMIN,
        })
      })






      
})