import React, { useEffect, useState } from 'react';
import MyNavbar from './navbar.component';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const CandidateJob = (props) => {
    let history = useHistory()
    let ID = props.match.params.jobID
    let [job, setJob] = useState('');
    let [applied,setApplied]= useState(false);
    useEffect(async () => {
        await axios.get('https://jobify-node.herokuapp.com/candidatejob/' + ID).
            then((response) => {
                setJob(response.data)
                response.data.applications.find(function(obj,index){
                    if(obj.employeeID==window.localStorage.getItem('curr_id')){
                        setApplied(true)
                    }
                })
            })

    }, [])

    let handleLogin = async () => {
        let data = {
            jobID: ID,
            employeeID: window.localStorage.getItem('curr_id'),
            employeeEmail: window.localStorage.getItem('curr_email')
        }

        await axios.post('https://jobify-node.herokuapp.com/apply', data)
            .then((response) => {
                if (response.data.message == 'application submitted') {
                    alert('appliction submitted')
                    history.push('/candidate-home');

                   

                }
            });

    }

    return (
        <>
            <MyNavbar></MyNavbar>

            <div className="container" style={{ marginTop: "100px", paddingBottom: "200px" }}>
                <div className="row col-12">
                    <div className="container" style={{ border: "0.5px solid black", color: "white", backgroundColor: "#125D98", padding: "3em" }}>
                        <div className="row">
                            <h1>{job.jobTitle}</h1>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <div className="col-12"><span>Company Name :</span>{job.companyName}</div>
                                <div className="col-12"><span> Location :</span>{job.location}</div>
                                <div className="col-12"><span> Salary :</span>{job.salary}</div>
                                <div className="col-12"><span>Vacancy :</span>{job.vacancy}</div>
                            </div>
                            <div className="col-5" style={{ paddingTop: "50px" }}>
                                {applied?<h2>You have already applied</h2>:<button className="btn btn-outline-info col-8" onClick={() => {
                                    handleLogin();
                                }}>Apply </button>}
                            </div>
                        </div>
                    </div>

                    <div className="row col-12">
                        <div className="container">
                            <div className="row" style={{ border: "1px solid black", marginTop: "50px", paddingBottom: "50px" }}>
                                <h1 className="col-12">Job Description</h1>
                                <div className="col-7">
                                    {job.jobDescription}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CandidateJob
