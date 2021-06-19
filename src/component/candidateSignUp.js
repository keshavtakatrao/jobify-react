import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'
const CandidateSignUp = () => {
    let history = useHistory();
    let [fullName, setFullName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [edutype,setEduType]= useState("selectEducation");
    let [course,setCourse]= useState("");
    let [institute, steInstitute] = useState('');
    let [passYear,setPassYear] = useState("");
    let [cgpa,setcgpa] = useState("");
    let [warrning, setWarning] = useState('');

    let handlleSignup = async () => {

        let data = {
            userType: "candidate",
           fullName,
            educationDetail:{
                edutype,
                course,
                institute,
                cgpa,
                passYear
            },
            email,
            password
        }



       if(edutype=='selectEducation'){
            setWarning("Select Highest Education");
       }
       else{
        await axios.post('http://localhost:3030/signup', data)
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
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="First name" value={fullName} onChange={(e) => { setFullName(e.target.value) }} required />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                </div>

                <hr style={{ borderTop: "2px solid black" }} />
                <h2>Educational Details</h2>

                <div className="form-group">
                    <label>Select Highest Education</label>
                    <select className="custom-select" aria-label="Default select example" onChange={(e) => {
                        setEduType(e.target.value);
                    }}>
                        <option selected value="selectEducation">Select Education</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Diploma">Diploma</option>
                        <option value="School">School</option>
                    </select>

                </div>

                <div className="form-group">
                    <label>Institute Name</label>
                    <input type="text" className="form-control" placeholder="Institute Name" value={institute} onChange={(e) => { steInstitute(e.target.value) }} required />
                </div>

                <div className="form-group">
                    <label>Course</label>
                    <input type="text" className="form-control" placeholder="Course" value={course} onChange={(e) => { setCourse(e.target.value) }} required />
                </div>

                <div className="form-group">
                    <label>CGPA</label>
                    <input type="text" className="form-control" placeholder="CGPA" value={cgpa} onChange={(e) => { setcgpa(e.target.value) }} required />
                </div>

                <div className="form-group">
                    <label>Passing Year</label>
                    <input type="number" className="form-control" placeholder="Passing Year" value={passYear} onChange={(e) => { setPassYear(e.target.value) }} required />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block col-8 offset-2 col-md-4 offset-md-8">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={'/sign-in'}> log in?</Link>
                </p>


            </form>
        </>
    )
}

export default CandidateSignUp
