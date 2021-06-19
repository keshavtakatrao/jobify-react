import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import MyNavbar from "./navbar.component";
import { Form } from "react-bootstrap";
import './component.css'

export default function Login() {
    let history = useHistory();
    if (window.localStorage.getItem('curr_id')) {
        if(window.localStorage.getItem('curr_userType')=="candidate"){
            history.push('/candidate-home')
        }
        else{
            history.push('/recruiter-home')
        }
    }
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [userType, setUserType] = useState('candidate');

    let handelLogin = async () => {
        let data = {
            userType,
            email,
            password
        }
        await axios.post('https://jobify-node.herokuapp.com/login', data)
            .then((response) => {
                if (response.data.message == 'allow') {
                    window.localStorage.setItem('curr_userType', response.data.userType);
                    window.localStorage.setItem('curr_id', response.data.id);
                    window.localStorage.setItem('curr_email',response.data.email);
                    if(response.data.userType=='candidate'){
                        history.push('/candidate-home');
                    }
                    else{
                        history.push('/recruiter-home')
                    }
                }
            });

    }

    return (
        <>
            <MyNavbar></MyNavbar>
            <form onSubmit={(e) => {
                e.preventDefault();
                handelLogin();
            }}>

                <div className='container col-10 offset-1 col-lg-4 offset-lg-4' style={{ marginTop: "10em" }}>

                    <h3>Log in</h3>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>

                                <div className="form-group">
                                    <label>Select Usertype</label>
                                    <select className="custom-select" aria-label="Default select example" onChange={(e) => {
                                        setUserType(e.target.value);
                                    }}>
                                        <option selected value="candidate">Candidate</option>
                                        <option value="recruiter">Recruiter</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email" value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                </div>

                                <div className="form-group">

                                </div>

                                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                                <p className="forgot-password text-right">
                                    don't have account ? <Link to={'/sign-up'}>Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    );
}