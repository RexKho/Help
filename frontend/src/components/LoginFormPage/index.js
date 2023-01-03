import React, { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';


function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/"/>;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({credential, password}))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });

    }
    
    const setDemo = () => {
        setCredential(`Demo-lition`);
        setPassword(`password`);

    }

    const handleDemo = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({credential, password}))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });

    }


    return (
        <>
            <form onSubmit={handleSubmit} id="form">
                <ul>
                    {errors.map(error => <li key ={error}>{error}</li>)}
                </ul>
                
                    <input type="text" value = {credential} onChange ={(e) => setCredential(e.target.value)} required placeholder="Email"></input>
                
                <br></br>
                
                    <input type="password" value = {password} onChange={(e)=> setPassword(e.target.value)} required placeholder="Password"></input>
                
                <br></br>
                <button type="submit" className ="button">Log In</button>
            </form>

            <form onSubmit={handleDemo} id="form2">
                <button onClick={()=> setDemo()} className ="button" >Demo User</button>
            </form>
        </>
    )
}

export default LoginFormPage;