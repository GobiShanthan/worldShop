import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  aspect-ratio: 3 / 2;
  width: 100%;
  max-width: 350px;
  max-height:225px;
  font-family: arial;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    margin:0px;
    padding:0px;
`;


export const ProductInfoContainer = styled.div`
opacity:0;
    height:100%;
    width:100vw;
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    background-color: rgba(0, 0, 0, 0.8);
    width:100%;
    height:100% ;
    text-align:center;
    color:white;
    transition: all .5s ease-in-out ;
    &:hover{
      opacity:1;
    }
`





export const ProductButton = styled.button`
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  background-color: white;
  color: black;
`;

export const ProductTitle = styled.h1`
  font-size: 20px;
  font-weight: 500px;
`;
