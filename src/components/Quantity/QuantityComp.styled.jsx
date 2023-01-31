import styled from 'styled-components'
import {Mobile} from '../../responsive'

export const QuantityContainer =styled.div`
display:flex;
justify-content: center;
align-items: center;
border: solid 2px black;
cursor: pointer;
`

export const QuantityButton =styled.button`
width:2vw;
height:2vw;
max-width:70px;
max-height:70px;
display:flex;
justify-content: center;
align-items: center;
background:black;
color:white;
padding:10px;
border:none;
font-size:20px;
font-weight:700;
cursor:pointer;
${Mobile({height:'8vw',width:'8vw'})};
`

export const QuantityNumber =styled.h1`
width:2vw;
height:2vw;
max-width:70px;
max-height:70px;
display:flex;
justify-content: center;
align-items: center;
padding:10px;
border:none;
font-size:20px;
font-weight:700;
${Mobile({height:'8vw',width:'8vw'})};
`
