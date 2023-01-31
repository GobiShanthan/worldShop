import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid'
import {fetchProducts} from '../../redux/slice/productsSlice'
import Loader from '../../components/Loader/Loader'

//STYLED IMPORTS 
import { 
  ProductPageContainer,
  ProductsContainer
 } from './Products.styled'


export const Products = () => {
  const dispatch = useDispatch()
  const productsData = useSelector((state)=>state.productsData)
  const {status,products} = productsData
  console.log(products)
  useEffect(()=>{
    if(products.length < 1){
          dispatch(fetchProducts())
    }

  },[dispatch,products])


  return (
    <ProductPageContainer>
      <ProductsContainer>
       {status ==='loading'?<Loader/>: status === 'success'?<ProductsGrid data={products}/>:<p>failed</p>}
      </ProductsContainer>
    </ProductPageContainer>
  )
 
   

}
