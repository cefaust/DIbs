import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Auth from "../utils/auth";


function NavTabs() {
  const currentPage = useLocation().pathname


  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className='nav nav-pills'>
          <li className='nav-item '>
            <Link
              to='/'
              id='textColor'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
           <Link
             to='/'
             id='textColor'
             className={'nav-link'}
             onClick={() => Auth.logout()}
            >
             Logout
           </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Profile'
              id='textColor'
              className={currentPage === '/Profile' ? 'nav-link active' : 'nav-link'}>
              Profile
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Add-item'
              id='textColor'
              className={currentPage === '/Add-item' ? 'nav-link active' : 'nav-link'}>
              Add Item
            </Link>
          </li>
        </ul>
      )
    } else {

      return (
        <ul className='nav nav-pills'>
          <li className='nav-item '>
            <Link
              to='/'
              id='textColor'
              className={currentPage === '/Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Login'
              id='textColor'
              className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/signup'
              id='textColor'
              className={currentPage === '/SignUp' ? 'nav-link active' : 'nav-link'}>
              Sign Up
            </Link>
          </li>
        </ul>

      )
    }
  }

  return (
    <div className='container'>
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



