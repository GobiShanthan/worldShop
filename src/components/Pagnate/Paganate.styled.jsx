import styled from 'styled-components'
import {Mobile} from '../../responsive'

export const PaganateWrapper = styled.div`
    width:100%;
    height:100%;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
    margin:2vw;
    
    ${Mobile({flexDirection: 'column'})};
`   
export const PaganateContainer = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
`   

export const NumbButton =styled.button`
    background-color:${props => props.val === props.count?'green':'white'};
    color:${props => props.val === props.count?'white':'black'};
    width:50px;
    height:50px;
    border:none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    ${Mobile({width:'20px'})};
`

export const ArrowButton =styled.button`
    background-color:black;
    color:white;
    width:50px;
    height:50px;
    border:none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

`


export const PagnateSelect = styled.select`
  padding: 10px;
  font-size: 20px;
  max-width: 75px;
  border-radius: 10px;
  border: solid 2px black;
  background: black;
  color: white;
  margin-left:2vw;
  ${Mobile({width:'75px',fontSize:'10px'})};
`;