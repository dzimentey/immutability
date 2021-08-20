export type UserType = {
    name: string
    hair: number
    address: { title: string }
}
export type LaptopType = {
    model: string
}
export type UserWithLapTopType = UserType & {
    laptop: LaptopType
}

export function barber(u: UserType, intensity: number) {
    const userCopy = {...u, hair: u.hair / intensity}

    return userCopy
}

export function moveUser(u: UserWithLapTopType, city: string) {
    return {...u, address: {title: city}}

}

export const upgradeLaptop = (user: UserWithLapTopType, model: string) => (
    {...user, laptop: {model: model}}
)