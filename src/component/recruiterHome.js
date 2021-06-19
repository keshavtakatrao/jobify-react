import React from 'react'
import { HashRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import MyNavbar from './navbar.component';
import img from './jobportal.svg'
import Jobpost from './jobpost';
import PostedJobs from './postedjobs';

const RecruiterHome = () => {
    let history = useHistory()
    return (
        <>
            <Router>
                <MyNavbar></MyNavbar>

                <Switch>
                    <Route path="/recruiter-home" exact={true}>
                        <div className="container-fluid" style={{ marginTop: "5rem",paddingBottom:"10rem" }}>
                            <div className="row">
                                <div className="col-12 col-md-7">
                                    <img src={img} />
                                </div>
                                <div className='col-12 col-md-5' style={{ marginTop: "5rem", paddingLeft: "5rem" }}>
                                    <h1 style={{ fontSize: "5rem" }}>👋Welcome</h1>
                                    <h4 style={{ paddingLeft: "5rem" }}>Start finding Employee</h4>

                                    <button className="btn btn-primary" style={{ marginLeft: "5rem" }} onClick={() => {
                                        history.push('/recruiter-home/jobpost');
                                    }} >
                                        Post Job
                                    </button>

                                    <button className="btn btn-outline-primary" style={{ marginLeft: "2em" }} onClick={() => {
                                        history.push('/recruiter-home/jobsposted');
                                    }}>
                                       View Jobs Posted
                                    </button>

                                </div>
                            </div>
                        </div>
                    </Route>

                    <Route path='/recruiter-home/jobpost' exact={true}>
                        <Jobpost></Jobpost>
                    </Route>

                    <Route path='/recruiter-home/jobsposted'>
                        <PostedJobs></PostedJobs>
                    </Route>
                    
                </Switch>

            </Router>
        </>
    )
}

export default RecruiterHome
