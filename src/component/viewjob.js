import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import MyNavbar from './navbar.component'

const Viewjob = () => {
    let history = useHistory();
    let [jobs, setJobs] = useState([]);
    let [loading, setLoading] = useState(false);

    useEffect(async () => {
        await axios.get('https://jobify-node.herokuapp.com/viewjob').
            then((response) => {
                setJobs(response.data)
                setLoading(true)
            })

    }, [])


    return (
        <>
            <MyNavbar></MyNavbar>
            {loading ? jobs.length == 0 ? <><center><h1>No previous jobs found </h1></center></>
                : <>
                    <div className="container" style={{ marginTop: "200px" }}>
                        {jobs.map((data) => {
                            return (
                                <>
                                    <div className="row" style={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "#EAE2B6", padding: "2em" ,cursor:"pointer",marginTop:"10px"}} onClick={()=>{
                                        history.push(`/candidatejob/${data._id}`)
                                    }}>
                                       <div className="container">
                                       <div className="row">
                                            <h2>{data.jobTitle}</h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">Company Name : {data.companyName}</div>
                                            <div className="col-4">Location : {data.location}</div>
                                            <div className="col-4"> Salary : {data.salary}</div>

                                        </div>
                                       </div>


                                    </div>
                                </>
                            )
                        })}
                    </div>
                </>
                : <>
                    <div className='col-10 offset-1' style={{ marginTop: "50px" }}><center><HashLoader loading /></center></div>
                </>}
        </>
    )
}

export default Viewjob
