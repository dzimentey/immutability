import {UserWithLapTopType} from "./instance";

export type userWithBooks = {
    books: string[] // ~ Array<sting>
}

export const addBook = (user: userWithBooks & UserWithLapTopType, book: string) => {
    return {...user, books: [...user.books, book]}
}

export const addBooksArray = (user:userWithBooks & UserWithLapTopType, booksArray: Array<string>) => (
    {...user, books: [...user.books, ...booksArray]}
)

export const changeBook = (user:userWithBooks & UserWithLapTopType, oldBook: string, newBook: string) => {
    return { user, books: user.books.map(b => b === oldBook ? newBook : b) }
}

export const changeBook = (user: userWithBooks & UserWithLapTopType, oldBook: string, newBook: string) => {
    return {user, books: user.books.map(b => b === oldBook ? newBook : b)}
}

export const removeBook = (user: userWithBooks & UserWithLapTopType, boringBook: string) => {
    return {...user, books: user.books.filter(b => b !== boringBook)}
}

export const addCompany = (user: UserWithLapTopType & userCompaniesType, company: { id: number, title: string }) => {
    return {...user, companies: [...user.companies, company]}
}
