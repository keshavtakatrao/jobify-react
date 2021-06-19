import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/login.component';
import SignUp from './component/signup.component';
import Home from './component/home';
import CandidateHome from './component/candidateHome';
import RecruiterHome from './component/recruiterHome';
import PostedJobs from './component/postedjobs';
import RecruiterJob from './component/recruiterJob';
import CandidateJob from './component/candidatejob';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact={true} />
          <Route path='/sign-in' component={Login} exact={true} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/candidate-home' component={CandidateHome} />
          <Route path='/recruiter-home' component={RecruiterHome} />
          <Route path='/postedjobs' component={PostedJobs} />
          <Route path='/recruiterjob/:jobID' component={RecruiterJob} />
         <Route path='/candidatejob/:jobID' component={CandidateJob} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
