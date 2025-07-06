import React, { useState } from 'react';
function TopBar (){
  return (
    <div className="bg-dark text-white py-2 px-4 d-flex justify-content-between align-items-center" style={{ fontSize: '0.95rem' }}>
      <p className="mb-0 text-center w-100">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a href="#" className="text-white text-decoration-underline ms-1">ShopNow</a>
      </p>
      <div className="dropdown ms-3" style={{ minWidth: 110 }}>
        <select className="form-select form-select-sm bg-dark text-white border-0 py-1 pe-4" aria-label="Language selection">
          <option>English</option>
          <option>Spanish</option>
        <option>French</option>
    </select>
  </div>
</div>
  );
};


export default TopBar;