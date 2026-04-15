import React from 'react'
import { getProducts } from './HomeActions'
import HomeComponent from './HomeComponent.js'

const Home = async() => {
    const productdetails = await getProducts()

  return (
    <>
        <HomeComponent products={productdetails}/>
    </>
  )
}

export default Home