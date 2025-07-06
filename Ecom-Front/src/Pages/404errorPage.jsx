import React from 'react'
import TopBar from '../Component/Layout/TopBar.jsx';
import NavBar from '../Component/Layout/NavBar.jsx';
import Footer from '../Component/Layout/Footer.jsx';
import '../index.css'; // Importing the CSS file for global styles
import NotFoundPage from '../Component/Error/404error.jsx';
import NavBarIcon from '../Component/Layout/NavBarIcon.jsx';

function ErrorPage() {
  return (
    <div>
        <TopBar/>
        <NavBarIcon/>
        <NotFoundPage />
        < Footer />

    </div>
  )
}

export default ErrorPage