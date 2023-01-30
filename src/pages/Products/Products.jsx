import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useLoaderData, useNavigation} from 'react-router-dom'
import {useGetAllProductsQuery} from '../../redux/slice/apiSlice'
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid'
import {fetchProducts} from '../../redux/slice/productsSlice'

//STYLED IMPORTS 
import { 
  ProductPageContainer,
  ProductsContainer
 } from './Products.styled'


export const Products = () => {
  const dispatch = useDispatch()
  const productsData = useSelector((state)=>state.productsData)
  const {status,error,products} = productsData

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  

  // const data = useGetAllProductsQuery()
  // const {isLoading,currentData} = data

  return (
    <ProductPageContainer>
      <ProductsContainer>
       {status ==='loading'?<p>loading be patient</p>: status === 'success'?<ProductsGrid data={products}/>:<p>failed</p>}
      </ProductsContainer>
    </ProductPageContainer>
  )
 
   

}



// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     'X-API-KEY': '5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262'
//   }
// };


// export const apiLoader = async()=>{
//   const res = await fetch('https://api.chimoney.io/v0.2/info/assets', options)
//   const {data} = await res.json()
//   return data.giftCardsRLD

// }