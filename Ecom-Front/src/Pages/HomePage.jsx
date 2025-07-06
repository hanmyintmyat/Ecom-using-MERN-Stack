import React, { useState, useEffect } from 'react'; 
import '../index.css';
import TopBar from '../Component/Layout/TopBar';
import NavBar from '../Component/Layout/NavBar';
import Footer from '../Component/Layout/Footer';
import FlashSale from '../Component/Products/FlashSaleItem/FlashSale';
import CategoryList from '../Component/Products/CategoryList';
import SaleItem from '../Component/Products/OurSaleItem/SaleItem';
import ExploreOurProduct from '../Component/Products/ExploreOurProduct/ExploreOurProduct';
export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
 
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;
 
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);
 
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <TopBar />
      <NavBar />
      <div className="container my-4">
     
      {/* Categories + Hero */}
      <div className="row">
        <div className="col-md-3">
          <ul className="list-group">
            <li className="list-group-item">Women's Fashion</li>
            <li className="list-group-item">Men's Fashion</li>
            <li className="list-group-item">Electronics</li>
            <li className="list-group-item">Home & Garden</li>
            <li className="list-group-item">Sports & Outdoors</li>
            <li className="list-group-item">Automotive</li>
            <li className="list-group-item">Health & Beauty</li>
          </ul>
        </div>
        <div className="col-md-9">
          <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/Frame560.png" className="d-block w-100" alt="Hero" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
 
                  <div className="mt-5">
              {/* Top Section */}
              <div className="text-left">
                <h1 className="fw-bold mb-3">Today's Flash Sales</h1>
                <div
                  className="d-flex mb-3"
                  style={{ marginRight: '0px' }} // Removed negative margin
                >
                  {['days', 'hours', 'minutes', 'seconds'].map((key, index) => (
                    <React.Fragment key={key}>
                      <div className="mx-2 text-center">
                        <div className="text-muted small text-uppercase">{key}</div>
                        <div className="fw-bold fs-5">{timeLeft[key]}</div>
                      </div>
                      {index < 3 && <div className="fw-bold fs-5">:</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
 
      {/* Product Carousel */}
      <FlashSale />
      {/* View All */}
 
      {/* Categories + Best Selling */}
      <CategoryList />
      <SaleItem />    
      {/* Flash Sales */}
                                               <div className="mt-5">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h3 className="text-danger">This Month</h3>
                              <h4 className="fw-bold mb-0">Explore Our Products</h4>
                            </div>
                          </div>
                        </div>
 
      {/* Explore Our Product*/}
      <ExploreOurProduct />
      </div>
      <Footer/>
    </>
  );
}
