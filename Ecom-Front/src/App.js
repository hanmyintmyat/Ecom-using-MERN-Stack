import React from 'react';// Corrected casing
import LoginPage from './Pages/LoginPage'; // Importing the LoginPage component
import SignUp from './Pages/SignupPage';
import Login from './Pages/LoginPage';
import HomePage from './Pages/HomePage'; // Importing the HomePage component
import ErrorPage from './Pages/404errorPage'; // Importing the ErrorPage component
import AboutPage from './Pages/AboutPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ExploreOurProductDetailsPage from './Pages/ExploreOurProductDetailsPage'; // Importing the ExploreOurProductDetailsPage component
import FlashSaleProductDetailsPage from './Pages/FlashSaleProductDetailsPage'; // Importing the FlashSaleProductDetailsPage component
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignupPage" element={<SignUp />} />
      <Route path="/404errorPage" element={<ErrorPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/FlashProduct/:id" element={<FlashSaleProductDetailsPage />} />
      <Route path="/ExploreProduct/:id" element={<ExploreOurProductDetailsPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App; // Exporting the App component