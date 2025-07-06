import React from 'react'
import TopBar from '../Component/Layout/TopBar'
import NavBarIcon from '../Component/Layout/NavBarIcon'
import Footer from '../Component/Layout/Footer'
import SaleItemsDetail from '../Component/Products/OurSaleItem/ProductDetail'

function ProductDetailsPage() {
  return (
    <div>
        <TopBar />
        <NavBarIcon />
        <SaleItemsDetail />
        <Footer />
    </div>
  )
}

export default ProductDetailsPage