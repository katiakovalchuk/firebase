import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

import Form from '../AuthForm';
import {setUser} from '../../store/actions/actions';

import './style.scss';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <Form title='Login' handleSubmit={handleLogin} />
    )
}

export default Login;
