import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

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

        await fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(data)
        });

        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to="/login"/>
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
