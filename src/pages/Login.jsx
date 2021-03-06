import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        axios.post('login', data).then(res => {
            localStorage.setItem('token', res.data.token);
            setRedirect(true);
        }).catch(err => {
            console.log(err)
        });
    };

    if (redirect) {
        return <Redirect to="/"/>
    }

    return (
        <form className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="Email address" required onChange={e => setEmail(e.target.value)} />
            <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            <button className="btn btn-primary btn-block" type="submit">Sign in</button>
        </form>
    );
};

export default Login;
