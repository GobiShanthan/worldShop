import styled from 'styled-components'

export const LoaderContainer =styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
padding-top:-10%;
width: 100%;
height: 100%;
cursor: pointer;

`


export const LoaderImage =styled.img`
width:50%;
max-width:200px;
`


export const LoaderText =styled.h1`
 font-size: max(4vw, 20px);
`