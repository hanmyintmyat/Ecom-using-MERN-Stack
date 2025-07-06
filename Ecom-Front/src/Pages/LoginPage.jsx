import React, { useState } from 'react';
import TopBar from '../Component/Layout/TopBar.jsx';
import NavBar from '../Component/Layout/NavBar.jsx';
import Footer from '../Component/Layout/Footer.jsx';
import HeroSectionLogIn from '../Component/Auth/HeroSectionLogIn.jsx'; // Importing the HeroSectionLogIn component
import '../index.css'; // Importing the CSS file for global styles


// Main App Component
const Login = () => {
  return (
    <div>
      < TopBar />
      < NavBar />
      < HeroSectionLogIn />
      < Footer /> 
    </div>
  );
};

// Export the App component
export default Login;