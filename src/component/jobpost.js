import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';


const Jobpost = () => {
    let history = useHistory();

    let [jobTitle, setTitle] = useState('');
    let [salary, setSalary] = useState('');
    let [vacancy, setVacancy] = useState('');
    let [location, setLocation] = useState('');
    let [jobDescription, setJobDescription] = useState('');

    let handleSubmit = async () => {
        let data={
            companyID : window.localStorage.getItem('curr_id'),
            jobTitle,
            salary,
            vacancy,
            location,
            jobDescription
        }

        await axios.post('http://localhost:3030/postjob',data)
        .then((response)=>{
            if(response.data.message=='job posted'){
                alert('Job posted sucessfully');
                history.push('/recruiter-home');
            }
        })
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <div className='container col-10 offset-1 col-lg-6 offset-lg-3' style={{ marginTop: "6em", paddingBottom: "10em" }}>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input type="text" className="form-control" placeholder="Job Title" value={jobTitle} onChange={(e) => { setTitle(e.target.value) }} required />
                    </div>

                    <div className="form-group">
                        <label>Salary</label>
                        <input type="numbaer" className="form-control" placeholder="Salary" value={salary} onChange={(e) => { setSalary(e.target.value) }} required />
                    </div>

                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" placeholder="Location" value={location} onChange={(e) => { setLocation(e.target.value) }} required />
                    </div>

                    <div className="form-group">
                        <label>Vacancy</label>
                        <input type="number" className="form-control" placeholder="First name" value={vacancy} onChange={(e) => { setVacancy(e.target.value) }} required />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Job Description</label>
                        <textarea className="form-control" placeholder="Job Description" value={jobDescription} rows="6" onChange={(e) => { setJobDescription(e.target.value) }} required />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block col-8 offset-2 col-md-4 offset-md-8">Post Job</button>
                </div>
            </form>
        </>
    )
}

export default Jobpost
