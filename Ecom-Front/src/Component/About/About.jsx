import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importing Bootstrap JS
import { Truck, Headset, ShieldCheck, ShoppingBag, Users, DollarSign } from 'lucide-react'; // Importing icons
// Main App component
const About = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar Section */}
      <nav className="flex justify-between items-center px-4 py-4 md:px-16 border-b border-gray-200">
          <div className="text-gray-600 text-sm md:text-base">
            <a href="/" className="text-blue-600 hover:underline">Home</a>
              <span className="mx-2 text-gray-400">/</span>
            <a href="/about" className="text-blue-600 hover:underline">About</a>
          </div>
      {/* You can add more nav links here if needed */}
      </nav>

    {/* Our Story Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <h1 className="display-5 fw-bold mb-4 text-dark">Our Story</h1>
            <p className="text-secondary mb-3">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide array of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 2 millions customers across the region.
            </p>
            <p className="text-secondary">
              Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive also attaches importance on categories ranging from consumer.
            </p>
          </div>
          <div className="col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
            <img
              src="https://placehold.co/600x400/FF007F/FFFFFF?text=Shopping"
              alt="Two women shopping"
              className="img-fluid rounded shadow"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/FF007F/FFFFFF?text=Image+Unavailable'; }}
            />
          </div>
        </div>
      </section>
       
      {/* Statistics Section */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Stat Card 1 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-white p-4 rounded shadow border text-center d-flex flex-column align-items-center">
              <div className="p-3 bg-light rounded-circle mb-3">
                <ShoppingBag className="text-secondary" style={{ width: 32, height: 32 }} />
              </div>
              <p className="fs-2 fw-bold text-dark mb-1">10.5k</p>
              <p className="text-secondary small">Sellers active on our site</p>
            </div>
          </div>
          {/* Stat Card 2 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-danger p-4 rounded shadow text-white text-center d-flex flex-column align-items-center">
              <div className="p-3 bg-danger-subtle rounded-circle mb-3">
                <DollarSign className="text-danger" style={{ width: 32, height: 32 }} />
              </div>
              <p className="fs-2 fw-bold mb-1">33k</p>
              <p className="text-danger-emphasis small">Monthly Product Sales</p>
            </div>
          </div>
          {/* Stat Card 3 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-white p-4 rounded shadow border text-center d-flex flex-column align-items-center">
              <div className="p-3 bg-light rounded-circle mb-3">
                <Users className="text-secondary" style={{ width: 32, height: 32 }} />
              </div>
              <p className="fs-2 fw-bold text-dark mb-1">45.5k</p>
              <p className="text-secondary small">Customer active in our site</p>
            </div>
          </div>
          {/* Stat Card 4 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="bg-white p-4 rounded shadow border text-center d-flex flex-column align-items-center">
              <div className="p-3 bg-light rounded-circle mb-3">
                <DollarSign className="text-secondary" style={{ width: 32, height: 32 }} />
              </div>
              <p className="fs-2 fw-bold text-dark mb-1">25k</p>
              <p className="text-secondary small">Annual gross sale in our site</p>
            </div>
          </div>
        </div>
      </section>

        
      {/* Team Section */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Team Member 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded overflow-hidden shadow">
              <img
                src="https://placehold.co/400x400/cccccc/000000?text=Tom+Cruise"
                alt="Tom Cruise"
                className="w-100 object-fit-cover"
                style={{ height: 300, objectFit: 'cover' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/cccccc/000000?text=Image+Unavailable'; }}
              />
              <div className="p-4 text-center">
                <h3 className="h5 fw-semibold text-dark mb-1">Tom Cruise</h3>
                <p className="text-secondary small mb-3">Founder & Chairman</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a href="#" className="text-secondary hover-link-primary">
                    {/* Twitter SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-17 11.6 2.2.1 4.4-.6 6-2 1.2 1.4 1.8 2.5 3.1 2.5h-5c2c.2 1.3 3 2 5 2 7 0 10-6 10-10.2V14c-.6.2-1.2.4-1.8.6z"/></svg>
                  </a>
                  <a href="#" className="text-secondary hover-link-danger">
                    {/* Instagram SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="text-secondary hover-link-primary">
                    {/* LinkedIn SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded overflow-hidden shadow">
              <img
                src="https://placehold.co/400x400/cccccc/000000?text=Emma+Watson"
                alt="Emma Watson"
                className="w-100 object-fit-cover"
                style={{ height: 300, objectFit: 'cover' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/cccccc/000000?text=Image+Unavailable'; }}
              />
              <div className="p-4 text-center">
                <h3 className="h5 fw-semibold text-dark mb-1">Emma Watson</h3>
                <p className="text-secondary small mb-3">Managing Director</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a href="#" className="text-secondary hover-link-primary">
                    {/* Twitter SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-17 11.6 2.2.1 4.4-.6 6-2 1.2 1.4 1.8 2.5 3.1 2.5h-5c2c.2 1.3 3 2 5 2 7 0 10-6 10-10.2V14c-.6.2-1.2.4-1.8.6z"/></svg>
                  </a>
                  <a href="#" className="text-secondary hover-link-danger">
                    {/* Instagram SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="text-secondary hover-link-primary">
                    {/* LinkedIn SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded overflow-hidden shadow">
              <img
                src="https://placehold.co/400x400/cccccc/000000?text=Will+Smith"
                alt="Will Smith"
                className="w-100 object-fit-cover"
                style={{ height: 300, objectFit: 'cover' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/cccccc/000000?text=Image+Unavailable'; }}
              />
              <div className="p-4 text-center">
                <h3 className="h5 fw-semibold text-dark mb-1">Will Smith</h3>
                <p className="text-secondary small mb-3">Product Designer</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a href="#" className="text-secondary hover-link-primary">
                    {/* Twitter SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-17 11.6 2.2.1 4.4-.6 6-2 1.2 1.4 1.8 2.5 3.1 2.5h-5c2c.2 1.3 3 2 5 2 7 0 10-6 10-10.2V14c-.6.2-1.2.4-1.8.6z"/></svg>
                  </a>
                  <a href="#" className="text-secondary hover-link-danger">
                    {/* Instagram SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="text-secondary hover-link-primary">
                    {/* LinkedIn SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Services/Guarantees Section */}
      <section className="container py-5 mb-4">
        <div className="row g-4 text-center">
          {/* Service 1: Free and Fast Delivery */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column align-items-center h-100">
              <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                <Truck className="text-white" style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="h6 fw-semibold text-dark mb-2 mt-2">FREE AND FAST DELIVERY</h3>
              <p className="text-secondary small">Free delivery for all orders over $140</p>
            </div>
          </div>
          {/* Service 2: 24/7 Customer Service */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column align-items-center h-100">
              <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                <Headset className="text-white" style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="h6 fw-semibold text-dark mb-2 mt-2">24/7 CUSTOMER SERVICE</h3>
              <p className="text-secondary small">Friendly 24/7 customer support</p>
            </div>
          </div>
          {/* Service 3: Money Back Guarantee */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column align-items-center h-100">
              <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64 }}>
                <ShieldCheck className="text-white" style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="h6 fw-semibold text-dark mb-2 mt-2">MONEY BACK GUARANTEE</h3>
              <p className="text-secondary small">We return money within 30 days</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default About;