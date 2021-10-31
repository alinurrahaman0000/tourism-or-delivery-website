import React from 'react';
import './login.css'
import login from '../../Login/login.jpg'
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const {singInUsingGoogle} = useAuth();
    return (
        <div className="row">
            <div className="col-md-6 login">
                   <h2>Please Login</h2>
                   <br />
                   <button onClick={singInUsingGoogle} >Google Sing In</button>
            </div>
            <div className="col-md-6">
            <img src={login} alt="" />
            </div>
        </div>
    );
};

export default Login;