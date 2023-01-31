import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//STYLED COMPONENTS
import {
  NumbButton,
  PaganateWrapper,
  ArrowButton,
  PagnateSelect,
  PaganateContainer
} from './Paganate.styled'

const Pagnate = ({pages,count,pagnateFunc, perPageFunc}) => {
 
  
  return (
    <PaganateWrapper>

      <PaganateContainer>
      <ArrowButton onClick={()=>pagnateFunc('-')}><ArrowBackIosNewIcon/></ArrowButton>
      {[...Array(pages)].map((x, i)=>(<NumbButton key={i} val={i+1} count={count}>{i + 1}</NumbButton>))}
      <ArrowButton onClick={()=>pagnateFunc('+')} ><ArrowForwardIosIcon/></ArrowButton>
      </PaganateContainer>

      <PagnateSelect onChange={(e)=>perPageFunc(e)}>
      {[...Array(5)].map((x, i)=>(<option value={(i+1) * 10} key={i}>{(i+1) * 10}</option>))}
      </PagnateSelect>

    </PaganateWrapper>
  )
}

export default Pagnate