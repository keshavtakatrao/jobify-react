import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HashLoader } from 'react-spinners'

import MyNavbar from './navbar.component'
import { useHistory } from 'react-router'

const RecruiterJob = (props) => {
    let history = useHistory()
    let ID = props.match.params.jobID
    let [job, setJob] = useState('');
    let [applications, setApplications] = useState([])
    let [loading, setLoading] = useState(false)
    useEffect(async () => {
        await axios.get('https://jobify-node.herokuapp.com/recruiterjob/' + ID).
            then((response) => {
                setJob(response.data)
                setApplications(response.data.applications);
                setLoading(true);
                console.log(response.data);

            })

    }, [])



    return (
        <>
            <MyNavbar></MyNavbar>

            <div className="container" style={{ marginTop: "100px", paddingBottom: "200px" }}>
                {loading ? <>
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
                            </div>
                        </div>

                        <div className="row col-12">
                            <div className="container">
                                <div className="row" style={{marginTop:"100px"}}>
                                    <h1 className="col-12">Applicatios Recived</h1>

                                    <div className="container">
                                        {applications.map((data) => {
                                            return (
                                                <>
                                                    <div className="row" style={{ marginTop: "10px",padding:"50px", marginTop: "10px", backgroundColor: "#DFEEEA" }}>
                                                        <div className="container">
                                                            <div className="row">
                                                                <h2>Candidate Name : {data.candidate.fullName}</h2>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <h5>Educational Details</h5>
                                                                </div>
                                                                <div className="col-8">
                                                                    Education : {data.candidate.educationDetail.edutype}<br></br>
                                                                    Course : {data.candidate.educationDetail.course} <br></br>
                                                                    Grade : {data.candidate.educationDetail.cgpa} <br></br>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div>
                                                                    Email : {data.candidate.email}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </> : <><div className='col-10 offset-1' style={{ marginTop: "300px" }}><center><HashLoader loading /></center></div></>}
            </div>
        </>
    )
}

export default RecruiterJob
