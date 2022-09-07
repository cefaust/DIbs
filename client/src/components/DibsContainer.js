import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from  './pages/Home';
import Login from './pages/Login'
import Profile from './pages/Profile'

export default function DibsContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Login') {
      return <Login />
    } if (currentPage === 'Profile') {
      return <Profile />
    }
    return <Home />

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};
