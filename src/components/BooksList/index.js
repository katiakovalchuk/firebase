import {useSelector} from 'react-redux';
import './style.scss';

import Book from '../Book';

const BooksList = () => {
    const bookList = useSelector(state => state.bookReducer.bookList);

    return(
        <div className='BooksList'>
            <h2 className='BooksList__heading'>Books available:</h2>
            <ul>
                {
                    bookList.map((book, idx) => <Book key={book.id} idx={idx} book={book} />)
                }
            </ul>
        </div>
    )
}

export default BooksList;
