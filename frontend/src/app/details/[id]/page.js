import React from 'react'
import { getProductById } from '../../home/HomeActions'
import Details from '../DetailsPage'

const page = async({ params }) => {
    const resolvedParams = await params
    const id = resolvedParams.id;
    const product = await getProductById(id)

  return (
    <Details product={product}/>
  )
}

export default page