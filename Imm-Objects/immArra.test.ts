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

