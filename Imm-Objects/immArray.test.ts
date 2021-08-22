import {UserWithLapTopType} from "./instance";
import {addBook, addBooksArray, changeBook, userWithBooks} from "./immArray";

test('increase number of books', () => {
        let user: UserWithLapTopType & userWithBooks = {
            name: 'Diamond',
            hair: 34,
            address: {title: 'Minsk'},
            laptop: {model: 'Mega laptop'},
            books: ['Refactoring', 'React in action', 'Virtual insanity']
        }

        const extendedUserWithBooks = addBook(user, `Async and performance`);

        expect(extendedUserWithBooks.books.length).toBe(4)
        expect(extendedUserWithBooks.books[3]).toBe('Async and performance')
        expect(extendedUserWithBooks.books).not.toBe(user.books)
        expect(extendedUserWithBooks.laptop.model).toBe('Mega laptop')
    }
)

test('extend number of books via adding books array', () => {
        let user: UserWithLapTopType & userWithBooks = {
            name: 'Diamond',
            hair: 34,
            address: {title: 'Minsk'},
            laptop: {model: 'Mega laptop'},
            books: ['Refactoring', 'React in action', 'Virtual insanity']
        }

        const userWithBooksArray = addBooksArray(user, ['SCSS', 'Type Script', 'Web performance'])

        expect(userWithBooksArray.books.length).toBe(6)
        expect(userWithBooksArray.books[3]).toBe('SCSS')
        expect(userWithBooksArray.books).not.toBe(user.books)
        expect(userWithBooksArray.laptop.model).toBe('Mega laptop')
        expect(userWithBooksArray.books).toStrictEqual(['Refactoring', 'React in action', 'Virtual insanity',
            'SCSS', 'Type Script', 'Web performance'])
        expect(userWithBooksArray.books).not.toBe(user.books)
        expect(userWithBooksArray.name).toBe(user.name)
    }
)

test('change book', () => {
        let user: UserWithLapTopType & userWithBooks = {
            name: 'Diamond',
            hair: 34,
            address: {title: 'Minsk'},
            laptop: {model: 'Mega laptop'},
            books: ['Refactoring', 'React in action', 'Virtual insanity']
        }

        const userWithChangedBook = changeBook(user, `Virtual insanity`, 'How to use virtual DOM');

        expect(userWithChangedBook.books[2]).toBe('How to use virtual DOM')
        expect(userWithChangedBook.books[2]).not.toBe(user.books[2])
    }
)

test('remove book', () => {
        let user: UserWithLapTopType & userWithBooks = {
            name: 'Diamond',
            hair: 34,
            address: {title: 'Minsk'},
            laptop: {model: 'Mega laptop'},
            books: ['Refactoring', 'React in action', 'Virtual insanity']
        }

        const userWithRemovedBook = removeBook(user, `Virtual insanity`,);

        expect(userWithRemovedBook.books.length).toBe(2)
        expect(userWithRemovedBook.books.length).not.toBe(user.books.length)
    }
)

test('add company name test', () => {
        let user: UserWithLapTopType & userCompaniesType = {
            name: 'Diamond',
            hair: 34,
            address: {title: 'Minsk'},
            laptop: {model: 'Mega laptop'},
            companies: [{id: 1, title: 'Regular soft'}, {id: 2, title: 'Majestic solutions'},]
        }

        const userWithUpdatedCompanies = addCompany(user, {id: 3, title: 'Deep space soft'})

        expect(userWithUpdatedCompanies.companies.length).toBe(3)
        expect(userWithUpdatedCompanies.companies[2].title).toBe('Deep space soft')
    }
)

test('update company name test', () => {
        let user: UserWithLapTopType & userCompaniesType = {
            name: 'Diamond',
            hair: 34,
            address: {title: 'Minsk'},
            laptop: {model: 'Mega laptop'},
            companies: [{id: 1, title: 'Regular soft'}, {id: 2, title: 'Majestic solutions'},]
        }

        const userWithUpdatedCompanyName = updateCompanyTitle(user, 1, 'Stunning software')

        expect(userWithUpdatedCompanyName.companies[0].title).toBe('Stunning software')
        expect(userWithUpdatedCompanyName.companies[1].title).toBe('Majestic solutions')
    }
)
