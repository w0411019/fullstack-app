import React from 'react';
import authService from '../services/authService';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/#" className="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          <strong>My Fullstack App</strong>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
            </li>
            {
              !authService.isAuthenticated() &&
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to={{pathname: '/signin'}}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={{pathname: '/register'}}>Register</Link>
                </li>
              </React.Fragment>
            }
            {
              authService.isAuthenticated() &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome {authService.getUser()}</a>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <a className="dropdown-item" href="/#" onClick={authService.logout}>Logout</a>
                </div>
              </li>
            }


          </ul>
        </div>
      </div>
    </nav>
    );
}
 
export default NavBar;