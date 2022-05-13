import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {addBook} from '../../store/actions/actions';
import {db} from '../../firebase';

import './style.scss';
import {addDoc, collection} from "firebase/firestore";

const AddForm = () => {
    const dispatch = useDispatch();
    const initialState = {title: '', description: ''};
    const [{title, description}, setBook] = useState(initialState);

    const handleTitleChange = e => {
        setBook(prev => ({...prev, title: e.target.value}))
    }
    const handleDescriptionChange = e => {
        setBook(prev => ({...prev, description: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const colRef = collection(db, 'bookList');
            await addDoc(colRef, {title, description, id: Date.now(), isRead: false});
            dispatch(addBook({title, description, id: Date.now(), isRead: false}));
            setBook(initialState);
        }catch (err){
            console.log(err);
        }
    }

    return(
        <form className='Form' onSubmit={handleSubmit}>
            <h2 className='Form__heading'>Please enter book title and description to add a new book</h2>
            <input
                className='Form__input'
                type='text'
                placeholder='Book title'
                required
                value={title}
                onChange={handleTitleChange}
            />
            <input
                className='Form__input'
                type='text'
                placeholder='Book description'
                required
                value={description}
                onChange={handleDescriptionChange}
            />
            <button className='Form__btn' type='submit'>Add book</button>
        </form>
    )
}

export default AddForm;
