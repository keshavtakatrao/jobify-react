import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import MyNavbar from "./navbar.component";
import bgimg from './6671.svg'
import Typewriter from 'typewriter-effect';

const Home = () => {

    let history = useHistory();

    return (
       <>
          <MyNavbar></MyNavbar>
          <div className='container-fluid' style={{marginTop:"5em"}}> 
            <div className="row">
              <div className='col-12 col-md-7'>
                <img src={bgimg} width="110%"/>
              </div>

              <div className="col-12 col-md-5" style={{paddingLeft:"3em"}}>
                <h1 style={{color:"#126E82",fontSize:"2em",marginBottom:"-0.5em",marginTop:"3em"}}>
                  FIND YOUR
                </h1>

                <span style={{fontSize:"6em",color:"#D83A56",marginTop:"-50px",padding:"0"}}>
                <Typewriter
                   options={{
                    strings: ['CAREER', 'EMPLOYEE'],
                    autoStart: true,
                    loop: true,
                   }
                  }
                />

                </span>

                <h1 style={{color:"#126E82",fontSize:"2em",marginTop:"-10px",marginLeft:"2px"}}>
                 YOU DESERVE
                </h1>

                <button className="btn btn-primary" style={{marginLeft:"2em"}} onClick={()=>{
                  history.push('/sign-in');
                }} >
                  Login
                </button>

                <button className="btn btn-outline-primary" style={{marginLeft:"2em"}} onClick={()=>{
                  history.push('/sign-up');}}>
                  Sign Up
                </button>

              </div>

            </div>
          </div>
       </>
    )
}

export default Home
