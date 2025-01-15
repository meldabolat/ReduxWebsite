import React from 'react'
import Products from './Products'
import { newArrivals } from '../../data'
import './Products.css'

const NewArrivals = () => {
  return (
<Products items={newArrivals} heading="New Ariivals" />
  )
}

export default NewArrivals