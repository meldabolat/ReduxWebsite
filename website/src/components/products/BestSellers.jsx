import React from 'react'
import Products from './Products'
import './Products.css'
import { bestsellers } from '../../data'

const BestSellers = () => {
  return (
    <Products items ={ bestsellers} heading = "Best Sellers"></Products>
  )
}

export default BestSellers