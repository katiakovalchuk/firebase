import {ADD_BOOK, DELETE_BOOK, EDIT_BOOK, SET_USER, REMOVE_USER} from '../types';

export const addBook = book => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export const deleteBook = id => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

export const editBook = book => {
    return {
        type: EDIT_BOOK,
        payload: book
    }
}

export const setUser = user => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const removeUser = id => {
    return {
        type: REMOVE_USER,
        payload: id
    }
}
