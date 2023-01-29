import React from 'react'

//STYLED COMPONENTS
import {
  NumbButton,
  PaganateWrapper
} from './Paganate.styled'

const Pagnate = ({pages,count,pagnateFunc, perPageFunc}) => {
 
  
  return (
    <PaganateWrapper>
      <button onClick={()=>pagnateFunc('-')}>before</button>
      {[...Array(pages)].map((x, i)=>(<NumbButton key={i} val={i+1} count={count}>{i + 1}</NumbButton>))}
      <button onClick={()=>pagnateFunc('+')} >next</button>
      <select onChange={(e)=>perPageFunc(e)}>
      {[...Array(5)].map((x, i)=>(<option value={(i+1) * 10} key={i}>{(i+1) * 10}</option>))}
        
      </select>
      {count}
    </PaganateWrapper>
  )
}

export default Pagnate