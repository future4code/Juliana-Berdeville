import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe('Testing getAllUsers function', () => {
    let userDatabase = {}
    let hashGenerator = {}
    let tokenGenerator = {}
    let idGenerator = {}

    test('Scenario: unauthorized error', async() => {
        expect.assertions(2)
             try {
                 const userBusiness = new UserBusiness(
                     userDatabase as any,
                     hashGenerator as any, 
                     tokenGenerator as any,
                     idGenerator as any
                 )

                 await userBusiness.getAllUsers(UserRole.NORMAL);

             }catch(error){
                 expect(error.message).toBe('You are not suposed to be here. >:(')
                 expect(error.errorCode).toBe(403)
             }
    })

    test('Scenario: its all working now', async() => {
        const getAllUsers = jest.fn(() => [
            new User(
                'idie',
                'Susie',
                'susie@labenu.com',
                'hashie',
                stringToUserRole('ADMIN')
            )
        ])

        userDatabase = { getAllUsers }

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        )

        const users = await userBusiness.getAllUsers(UserRole.ADMIN)

        expect(users).toContainEqual({id:'idie', 
                                      name:'Susie', 
                                      email: 'susie@labenu.com', 
                                      role:UserRole.ADMIN})
    })
})