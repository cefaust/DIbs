import React from 'react';
import {Link} from 'react-router-dom';
import Auth from "../utils/auth";

function NavTabs() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link to='/Home'>
              Home
            </Link>
          </li>
          <li className="nav-item">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className='nav-item'>
            <Link to='/SignUp'>
              Sign Up
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Profile'>
              Profile
            </Link>
          </li>
        </ul>
      )
    } else {

      return (
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link to='/Home'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Login'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/SignUp'>
              Sign Up
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Profile'>
              Profile
            </Link>
          </li>
        </ul>

      )
    }
  }

  return (
    <div>
      <header className='d-flex flex-wrap justify-content-sm-between py-3 mb-4 border-bottom'>
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <h1 className='fs-1'>Dibs</h1>
        </div>
        {showNavigation()}
      </header>
    </div>
  );

}
export default NavTabs;
