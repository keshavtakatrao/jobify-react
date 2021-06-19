import React from 'react'
import { HashRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import MyNavbar from './navbar.component';
import img from './jobportal.svg'
import Viewjob from './viewjob';
import AppliedJob from './appliedjobs';

const CandidateHome = () => {
    let history = useHistory()
    return (
        <>
            <Router>
                <MyNavbar></MyNavbar>

                <Switch>
                    <Route path="/candidate-home" exact={true}>
                        <div className="container-fluid" style={{ marginTop: "5em" }}>
                            <div className="row">
                                <div className="col-12 col-md-7">
                                    <img src={img} />
                                </div>
                                <div className='col-12 col-md-5' style={{ marginTop: "5em", paddingLeft: "5em" }}>
                                    <h1 style={{ fontSize: "5em" }}>👋Welcome</h1>
                                    <h4 style={{ paddingLeft: "5em" }}>Start finding Jobs</h4>

                                    <button className="btn btn-primary" style={{ marginLeft: "2em" }} onClick={() => {
                                        history.push('/candidate-home/jobs');
                                    }} >
                                        View Jobs
                                    </button>

                                    <button className="btn btn-outline-primary" style={{ marginLeft: "2em" }} onClick={() => {
                                        history.push('/candidate-home/applied-jobs');
                                    }}>
                                        View Applied Jobs
                                    </button>

                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path='/candidate-home/jobs'  component={Viewjob} exact={true}/>
                    <Route path='/candidate-home/applied-jobs' component={AppliedJob} exact={true}/>
                </Switch>

            </Router>
        </>
    )
}

export default CandidateHome
