import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUpForm.css';

function SignupFormPage (){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if(sessionUser) return <Redirect to="/" />

    const handleSubmit= (e) =>{
        e.preventDefault();
        if(password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password}))
            .catch(async (res) => {
                let data;
                try{
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
        }
        return setErrors(['Passwords do not match']);
    }

    return (
        <>
            <form onSubmit={handleSubmit} id ="form">
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <input type="text" value = {email} onChange = {(e)=> setEmail(e.target.value)} placeholder="Email"></input>
                <br></br>
                <input type="text" value = {username} onChange ={(e)=>setUsername(e.target.value)} placeholder="Username"></input>
                <br></br>
                <input type="password" value = {password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"></input>
                <br></br>
                <input type="password" value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password"></input>
                <br></br>
                <button type="submit" id="button">Sign Up</button>
            </form>
        </>
    )
}

export default SignupFormPage;