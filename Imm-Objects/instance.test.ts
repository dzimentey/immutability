// @ts-ignore
import {barber, moveUser, upgradeLaptop, UserType, UserWithLapTopType} from "./instance";

test('reference type test', () => {
        let user: UserType = {
            name: 'Diamond',
            hair: 34,
            address: {title: 'Minsk'},

        }

        const cuteUser = barber(user, 2);

        expect(cuteUser.hair).toBe(17)
        expect(user.hair).toBe(34)
        expect(cuteUser.address).toBe(user.address)
    }
)


test('change address', () => {
        let user: UserWithLapTopType = {
            name: 'Diamond',
            hair: 34,
            address: {title: 'Minsk'},
            laptop: {model: 'Mega laptop'}
        }

        const movedUser = moveUser(user, 'Warsawa');

        expect(movedUser.address.title).toBe('Warsawa')
        expect(movedUser.laptop.model).toBe('Mega laptop')
    }
)

test('upgrade laptop up to quantum laptop', () => {
        let user: UserWithLapTopType = {
            name: 'Diamond',
            hair: 34,
            address: {title: 'Minsk'},
            laptop: {model: 'Mega laptop'}
        }

        const userWithNewLaptop = upgradeLaptop(user, 'Quantum laptop');

        expect(user.address.title).not.toBe('Warsawa')
        expect(user.laptop.model).toBe('Mega laptop')
        expect(userWithNewLaptop.laptop.model).toBe('Quantum laptop')
        expect(user.laptop.model).toBe('Mega laptop')
    }
)