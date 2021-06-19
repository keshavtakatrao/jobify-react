import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import MyNavbar from "./navbar.component";
import CandidateSignUp from "./candidateSignUp";
import RecruiterSignUp from "./recruiterSignUp";
import './component.css'



function SignUp() {
    let history = useHistory();
    let [signUpType, setType] = useState('candidate');





    return (
        <>
            <MyNavbar></MyNavbar>
            <div className='container col-10 offset-1 col-lg-6 offset-lg-3' style={{ marginTop: "6em",paddingBottom:"10em" }}>
                <div className="form-group">
                <h3 style={{ textAlign: "center" }}>Register</h3>

                    <label>Select Usertype</label>
                    <select className="custom-select" aria-label="Default select example" onChange={(e) => {
                        setType(e.target.value);
                    }}>
                        <option selected value="candidate">Candidate</option>
                        <option value="recruiter">Recruiter</option>
                    </select>
                    {signUpType=='candidate'?<CandidateSignUp></CandidateSignUp> : <RecruiterSignUp></RecruiterSignUp>}
                </div>
            </div>
            


        </>
    );

}

export default SignUp