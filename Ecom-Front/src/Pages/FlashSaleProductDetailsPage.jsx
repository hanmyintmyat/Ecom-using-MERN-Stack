import React from 'react'
import TopBar from '../Component/Layout/TopBar'
import NavBarIcon from '../Component/Layout/NavBarIcon'
import Footer from '../Component/Layout/Footer'
import FlashSaleDetail from '../Component/Products/FlashSaleItem/FlashSaleProductDetail'

function FlashSaleDetailsPage() {
  return (
    <div>
        <TopBar />
        <NavBarIcon />
        <FlashSaleDetail />
        <Footer />
    </div>
  )
}

export default FlashSaleDetailsPage