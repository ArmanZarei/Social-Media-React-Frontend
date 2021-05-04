import React, {useState} from 'react';
import axios from "axios";
import {Redirect} from 'react-router-dom';

const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const data = {
            first_name: firstname,
            last_name: lastname,
            email,
            password,
            password_confirm: passwordConfirm,
        };

        axios.post('http://localhost:8000/register', data).then(
            res => {
                setRedirect(true);
            }
        ).catch(err  => {console.log(err)})
    };

    if (redirect) {
        return <Redirect to="/login"/>
    }

    return (
        <form className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
            <input type="text" className="form-control" placeholder="First name" required onChange={e => setFirstname(e.target.value)} />
            <input type="text" className="form-control" placeholder="Last name" required onChange={e => setLastname(e.target.value)} />
            <input type="email" className="form-control" placeholder="Email address" required onChange={e => setEmail(e.target.value)} />
            <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            <input type="password" className="form-control" placeholder="Password repeat" required onChange={e => setPasswordConfirm(e.target.value)} />
            <button className="btn btn-primary btn-block" type="submit">Submit</button>
        </form>
    );
};

export default Register;
