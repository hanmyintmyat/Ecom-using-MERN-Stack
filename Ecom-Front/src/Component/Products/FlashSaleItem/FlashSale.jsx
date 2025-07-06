import React from 'react';
import { Link } from 'react-router-dom';
import FlashProduct from './FlashSales'; // Import the product array

export function FlashSale() {
  return (
    <div className="container mt-4">
      {/* Inline style */}
      <style>{`
        .product-card {
          transition: box-shadow 0.3s;
        }
        .product-card:hover {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="row g-3">
        {FlashProduct.map((product) => (
          <div className="col-6 col-md-3" key={product.id}>
            <div className="border rounded p-3 position-relative h-100 product-card">
              {/* Icons top-right */}
              <div className="position-absolute top-0 end-0 p-2">
                <i className="bi bi-heart me-1"></i>
                <i className="bi bi-eye"></i>
              </div>

              {/* Product image */}
              <div className="d-flex justify-content-center align-items-center h-80">
                <img
                  src={product.images || 'placeholder.jpg'} // Fallback image
                  alt={product.name}
                  className="img-fluid"
                  style={{ width: '90%', height: '90%', objectFit: 'cover' }} // Ensures the image fills the card box
                />
              </div>

              {/* Centered Product name */}
              <p className="fw-bold mb-1 text-center">{product.name}</p>

              {/* Centered Price + old price */}
              <div className="mb-1 text-center">
                <span className="text-danger">${product.price}</span>{' '}
                {product.oldPrice && (
                  <small className="text-muted text-decoration-line-through">
                    ${product.oldPrice}
                  </small>
                )}
              </div>

              {/* Centered Stars */}
              <div className="text-warning mb-2 text-center">
                {'★'.repeat(product.stars)}{'☆'.repeat(5 - product.stars)}
          
              </div>

              {/* Make card clickable */}
              <Link to={`/FlashProduct/${product.id}`} className="stretched-link"></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSale;