import React from 'react'
import {useLoaderData, useNavigation} from 'react-router-dom'
import {useGetAllProductsQuery} from '../../redux/slice/apiSlice'
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid'

//STYLED IMPORTS 
import { 
  ProductPageContainer,
  ProductsContainer
 } from './Products.styled'


export const Products = () => {
  const data = useGetAllProductsQuery()
  const {isLoading,currentData} = data

  return (
    <ProductPageContainer>
      <ProductsContainer>
       {isLoading?<p>loading be patient</p>:<ProductsGrid data={currentData}/>}
      </ProductsContainer>
    </ProductPageContainer>
  )
 
   

}



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': '5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262'
  }
};


export const apiLoader = async()=>{
  const res = await fetch('https://api.chimoney.io/v0.2/info/assets', options)
  const {data} = await res.json()
  return data.giftCardsRLD

}