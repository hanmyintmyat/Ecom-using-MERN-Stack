import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FlashProduct from './FlashSales';

export default function FlashSaleDetail () {
  const { id } = useParams();
  const product = FlashProduct.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const adjustQuantity = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (!product) return <p className="text-center mt-5">Product not found!</p>;

  return (
    <>
      <style>{`
        .product-page {
          font-family: sans-serif;
          padding: 20px;
          max-width: 1000px;
          margin: auto;
          color: #333;
        }

        .breadcrumb a {
          text-decoration: none;
          color: #888;
          margin-right: 5px;
        }

        .product-content {
          display: flex;
          gap: 40px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .images {
          flex: 1;
        }

        .main-image {
          width: 100%;
          max-width: 400px;
          border-radius: 10px;
        }

        .thumbnails {
          display: flex;
          margin-top: 10px;
          gap: 10px;
        }

        .thumbnails img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
        }

        .info {
          flex: 1;
        }

        .rating-stock {
          margin: 10px 0;
        }

        .in-stock {
          color: green;
          margin-left: 10px;
        }

        .price {
          font-size: 24px;
          color: #e91e63;
          margin: 10px 0;
        }

        .description {
          margin-bottom: 20px;
        }

        .selectors {
          margin-bottom: 20px;
        }

        .colors .swatch {
          display: inline-block;
          background: #fff;
          border: 1px solid #000;
          width: 20px;
          height: 20px;
          margin-left: 10px;
        }

        .sizes {
          margin-top: 10px;
        }

        .size-btn {
          margin: 5px;
          padding: 8px 12px;
          border: 1px solid #999;
          background: #f9f9f9;
          cursor: pointer;
        }

        .quantity {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 20px 0;
        }

        .quantity button {
          width: 30px;
          height: 30px;
        }

        .actions button {
          padding: 10px 20px;
          margin-right: 10px;
          cursor: pointer;
        }

        .buy-now {
          background-color: #2196f3;
          color: white;
          border: none;
        }

        .wishlist {
          border: 1px solid #ccc;
          background: white;
        }

        .delivery-details {
          margin-top: 30px;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }

        .delivery-details h3 {
          margin-bottom: 5px;
        }
      `}</style>

      <div className="product-page">
        <div className="breadcrumb">
          <a href="/account">Account</a> / <a href="/gaming">Gaming</a> / {product.name}
        </div>

        <div className="product-content">
          <div className="images">
            {/* Main Image */}
            <img
              src={product.images || 'placeholder.jpg'} // Fallback image
              alt={product.name}
              className="main-image"
            />

            {/* Thumbnails */}
              <div className="thumbnails">
              {product.thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail || 'placeholder.jpg'} // Correctly accessing the thumbnail
                  alt={`Thumbnail ${index + 1}`}
                  className="img-thumbnail"
                />
              ))}
            </div>
          </div>

          <div className="info">
            <h1>{product.name}</h1>
            <div className="rating-stock">
              <span className="stars">⭐⭐⭐⭐⭐</span> (150 Reviews)
              <span className="in-stock">In Stock</span>
            </div>
            <div className="price">Price: ${product.price}</div>
            <p className="description">{product.description}</p>

            <div className="selectors">
              <div className="colors">
                <label>Color:</label> <span className="swatch" />
              </div>
              <div className="sizes">
                <label>Size:</label>
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className="size-btn">{size}</button>
                ))}
              </div>
            </div>

            <div className="quantity">
              <button onClick={() => adjustQuantity(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => adjustQuantity(1)}>+</button>
            </div>

            <div className="actions">
              <button className="buy-now">Buy Now</button>
              <button className="wishlist">❤️</button>
            </div>

            <div className="delivery-details">
              <div>
                <h3>Free Delivery</h3>
                <p>Enter your postal code for delivery availability.</p>
              </div>
              <div>
                <h3>Return Delivery</h3>
                <p>Free 30 Days Delivery returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}