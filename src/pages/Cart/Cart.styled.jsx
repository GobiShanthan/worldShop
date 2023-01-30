import styled from "styled-components";

//MAIN MENU CONTAINER
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  height: 100%;
`;

export const CartTitleContainer = styled.div`
  display: flex;
  flex: 0.5;
`;
export const CartTitle = styled.h1`
  font-size: 30px;
`;

//CART ITEMS START
export const CartItemsContainer = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  gap: 2px;
  padding: 40px;
  margin: 20px;
  border-radius: 20px;
  border: solid 2px black;
`;

export const CartItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 170px;
  border-bottom: 2px solid grey;
  padding: 10px;
`;

export const CartPic = styled.img`
  display: flex;
  flex: 1;
  height: 100%;
  border-radius:10px;
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 5;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const CartItemTitle = styled.div`
  font-size: 30px;
  width: 100%;
`;

export const CartItemCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Label = styled.h2`
  font-size: 24px;
  margin: 10px;
`;

export const CartItemSelect = styled.select`
  padding: 10px;
  font-size: 20px;
  max-width: 75px;
  border-radius: 10px;
  border: solid 2px black;
  background: black;
  color: white;
`;

export const RemoveButton = styled.button`
  padding: 10px;
  width: 100px;
  color: white;
  border: none;
  font-size: 20px;
  border-radius: 10px;
  background: red;
`;
export const CartPrice = styled.div`
  display: flex;
  height: 100%;
`;

//CART ITEMS END

export const CartSubTotal = styled.div`
  display: flex;
  background: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  flex: 0.5;
`;
