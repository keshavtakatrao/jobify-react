import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import logo from './job.png'
import './navbar.style.css'
const MyNavbar = () => {
    let history = useHistory();
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="md" bg="dark" variant="dark" className='animate-navbar nav-theme justify-content-between' >
                <Navbar.Brand>
                    <img src={logo} height='60px' width='60px' />
                   <span style={{fontSize:"2rem"}}>Jobify</span>
                </Navbar.Brand>
                {window.localStorage.getItem('curr_id') ?
                   <><Navbar.Toggle aria-controls="responsive-navbar-nav" bg='dark' />
                   <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="ml-auto">
                        <button className="btn btn-primary" onClick={()=>{
                            window.localStorage.clear();
                            history.push('/')
                        }}>Logout</button>
                  
                       </Nav>
                   </Navbar.Collapse></>
                  
                    : null}
                
            </Navbar>
        </>
    )
}

export default MyNavbar
