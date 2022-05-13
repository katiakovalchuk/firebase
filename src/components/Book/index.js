import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteDoc, doc, updateDoc} from 'firebase/firestore';

import {deleteBook, editBook} from '../../store/actions/actions';
import {db} from '../../firebase';

import './style.scss';

const Book = ({book, idx}) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [{title, description, isRead}, setData] = useState({
        title: book.title,
        description: book.description,
        isRead: book.isRead
    });

    const handleEdit = async e => {
        e.preventDefault();
        try{
            const docRef = await doc(db, 'bookList', (book.id).toString());
            await updateDoc(docRef, {title, description});
        } catch (err){
            console.log(err);
        }
        dispatch(editBook({
            ...book,
            title,
            description
        }))
        setEdit(false);
    }

    const handleDelete = async () => {

        try {
            const docRef = doc(db, 'bookList', (book.id).toString());
            await deleteDoc(docRef);
            dispatch(deleteBook(book.id));
        }catch (err){
            console.log(err);
        }
    }

    const handleIsRead = async () => {
        setData(prev => ({...prev, isRead: !isRead}))
        dispatch(editBook({
            ...book,
            isRead
        }));
        try{
            const docRef = await doc(db, 'bookList', (book.id).toString());
            await updateDoc(docRef, {isRead});
        } catch (err){
            console.log(err);
        }
    }

    return (
        <li className='Book'>
            <div className='Book__inner'>
                <h3 className='Book__content'>
                    <span>{idx + 1}. </span>
                    <span>{book.title}</span>
                </h3>
                <span className='Book__modify-items'>
                    <input
                        className='Book__checkbox'
                        type='checkbox'
                        checked={book.isRead}
                        onChange={handleIsRead}
                    />
                    <span onClick={() => setEdit(prev => !prev)} className='Book__edit-icon'>&#x270E;</span>
                    <span onClick={handleDelete} className='Book__delete-icon'>&#128465;&#65039;</span>
                </span>
            </div>
            <div className='Book__description'>{book.description}</div>
            {
                edit ? (
                    <form onSubmit={handleEdit}>
                        <h3>Edit form</h3>
                        <input
                            type='text'
                            value={title}
                            onChange={e => setData({...book, title: e.target.value})}
                        />
                        <input
                            type='text'
                            value={description}
                            onChange={e => setData({...book, description: e.target.value})}
                        />
                        <button type='submit'>Save</button>
                    </form>
                ) : ''
            }
        </li>
    )
}

export default Book;
