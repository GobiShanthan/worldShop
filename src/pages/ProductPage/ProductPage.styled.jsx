import styled from "styled-components";

export const ProductPageWrapper = styled.div`
background:	#3b444b;
  display: flex;
  justify-content:center ;
  height: 100%;
  width: 100%;
  padding:4%;
  gap:5%;
`;

export const ProductPageContainer = styled.div`
    display:flex;
    max-width:800px;
    flex-direction: column;
    align-items: center;
    background:white; 
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    flex:1;
`;

export const PagePic = styled.img`
    width:80%;
    max-width:600px;
    border-radius:30px;
    margin:5%;
`;

export const PageInfo =styled.div`
display:flex;
flex-direction: column;
align-items: center;
gap:10px;

`
export const PagePrice = styled.div`
font-size:20px;
font-weight:bold;
`

export const AddToCartButton = styled.button`
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
border-radius:10px; 
`

export const PageTitle = styled.h1`
font-size:30px;
`

export const PageTotalPrice =styled.div`
display:flex;
justify-content: center;
align-items: center;
padding:10px;
border:none;
font-size:20px;
font-weight:700;
display:flex;

`