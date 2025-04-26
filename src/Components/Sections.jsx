import React from 'react'
import Banner from './Banner'
import Products from './Products'
import ShopByCategory from './ShopByCategory'
import Deal from './Deal'
import ShopByBrands from './ShopByBrands'
import Banner2 from './Banner2'
import Favourites from './Favourites'

function Sections() {
  return (
    <div>
        <Banner />
        <Products />
        <ShopByCategory/>
        <Deal/>
        <ShopByBrands/>
        <Banner2/>
        <Favourites/>
    </div>
  )
}

export default Sections