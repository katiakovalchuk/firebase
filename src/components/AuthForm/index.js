import {useState} from 'react';

import './style.scss';

const AuthForm = ({title, handleSubmit}) => {
    const [{email, password}, setData] = useState({
        email: '',
        password: ''
    });

    const handleEmailChange = e => {
        setData(prev => ({...prev, email: e.target.value}));
    }
    const handlePasswordChange = e => {
        setData(prev => ({...prev, password: e.target.value}));
    }

    return(
        <form onSubmit={e => {
            e.preventDefault();
            handleSubmit(email, password)
        }}>
            <input
                type='email'
                placeholder='Email'
                required
                value={email}
                onChange={handleEmailChange}
            />
            <input
                type='password'
                placeholder='Password'
                required
                value={password}
                onChange={handlePasswordChange}
            />
            <button type='submit'>{title}</button>
        </form>
    )
}

export default AuthForm;
