import styled from 'styled-components'


export const CheckoutWrapper = styled.div`
background:	#3b444b;
  display: flex;
  justify-content:center ;
  height: 100%;
  width: 100%;
  padding:4%;
  gap:5%;

`;

export const Desc = styled.p`
margin:20px;
font-weight:700;
color:green;
`

export const Image = styled.img`
margin:20px;
width:90%;
font-weight:700;
color:green;
`

export const CheckoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    max-height:600px;

    background:white; 
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border-radius:20px;
`;