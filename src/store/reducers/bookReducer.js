import {ADD_BOOK, DELETE_BOOK, EDIT_BOOK} from '../types';
import BOOK_LIST from '../books.json';
import {db} from '../../firebase';

import {collection} from 'firebase/firestore';

const initialState = {
    bookList: [...BOOK_LIST]
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                bookList: [...state.bookList, action.payload]
            }

        case DELETE_BOOK:
            return {
                ...state,
                bookList: state.bookList.filter(book => book.id !== action.payload)
            }

        case EDIT_BOOK:
            const editedBookList = state.bookList.map(book => book.id === action.payload.id ? (
                {
                    ...book,
                    title: action.payload.title,
                    description: action.payload.description,
                    isRead: action.payload.isRead
                }
            ) : book)

            return {
                ...state,
                bookList: editedBookList
            }

        default:
            return state;
    }
}

export default bookReducer;
