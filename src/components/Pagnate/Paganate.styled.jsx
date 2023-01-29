import styled from 'styled-components'

export const PaganateWrapper = styled.div`
    width:100%;
    height:100%;
    background-color:black;
    color:white;
    display:flex;
    justify-content:center;

`   

export const NumbButton =styled.button`
    background-color:${props => props.val === props.count?'green':'white'};
    color:${props => props.val === props.count?'white':'black'};
    width:20px;
    height:20px;
    border:none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`