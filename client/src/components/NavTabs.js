import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='container header'>
      <header className='d-flex flex-wrap justify-content-sm-between py-3 mb-4 border-bottom'>
        <div  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <h1 className='fs-1'>Dibs</h1>
        </div>

        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <a href='#Home'
               onClick={() => handlePageChange('Home')}
               className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} aria-current="page"
            >
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#Login'
               onClick={() => handlePageChange('Login')}
               className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
            >
              Login
            </a>
          </li>
          <li className='nav-item'>
            <a href='#Profile'
               onClick={() => handlePageChange('Profile')}
               className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
            >
              Profile
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}
export default NavTabs;
