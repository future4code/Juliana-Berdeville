import { UserBusiness } from "../../src/business/UserBusiness";
import {UserDatabase} from '../../src/data/UserDatabase'
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe('Testing the getProfile endpoint', () => {
    let userDatabase = {}
    let hashGenerator = {}
    let idGenerator = {}
    let tokenGenerator = {}

    test('Scenario: function is not working. Check error codes', async() => {
        expect.assertions(2)
            try{
                        const getUserById = jest.fn()
                        userDatabase = {getUserById}

                        const userBusiness = new UserBusiness(
                            userDatabase as any,
                            hashGenerator as any, 
                            tokenGenerator as any,
                            idGenerator as any)

                        await userBusiness.getUserById('oops-id')

            } catch(error){
                expect(error.errorCode).toBe(404)
                expect(error.message).toBe('User not found.')
            }
    })

    test('Scenario: function is working properly, check return', async () =>{
        const getUserById = jest.fn(
            (id: string) =>
              new User(
                'id',
                'Juju',
                'Juju@labenu.com',
                'jujuhash',
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
      
          const user = await userBusiness.getProfile('id')
      
          expect(getUserById).toHaveBeenCalledWith('id')
          expect(user).toEqual({
            id: 'id',
            name: 'Juju',
            email: 'juju@labenu.com',
            role: UserRole.ADMIN,
          })
        })








        
})