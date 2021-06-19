import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'

const RecruiterSignUp = () => {
    let history = useHistory();

    let [warrning, setWarning] = useState('');

    let[companyName,setCompanyName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');



    let handlleSignup = async () => {

        let data = {
            userType: "recruiter",
            companyName,
            email,
            password
        }

        await axios.post('https://jobify-node.herokuapp.com/signup', data)
        .then((response) => {
            if (response.data.message == 'user registered') {
                alert("User Registered")
                history.push('/sign-in');
            }
            else if (response.data.message == 'email exist') {
                setWarning('email exist')
            }
            else {
                alert('Error')
            }
        })
       
    }

    return (
        <>
            
            <form onSubmit={(e) => {
                e.preventDefault();
                handlleSignup();
            }}>
                {warrning ? <div class="alert alert-danger" role="alert" style={{ marginTop: "1em" }} >
                    {warrning}
                </div> : null}

                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" className="form-control" placeholder="Company name" value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block col-8 offset-2 col-md-4 offset-md-8">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={'/sign-in'}> log in?</Link>
                </p>

            </form>
        </>
    )
}

export default RecruiterSignUp
