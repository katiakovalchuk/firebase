import {useDispatch} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';

import Form from '../../components/AddForm';
import BooksList from '../../components/BooksList';
import {useAuth} from '../../hooks/useAuth';
import {removeUser} from '../../store/actions/actions';

import './style.scss';

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuth, id} = useAuth();

    const handleLogout = () => {
        dispatch(removeUser(id));
        navigate('/login');
    }

    return isAuth ? (
        <div>
            <button onClick={handleLogout}>Log out</button>
            <Form />
            <BooksList />
        </div>
    ) : (
        <Navigate to='/login' />
    )
}

export default HomePage;
