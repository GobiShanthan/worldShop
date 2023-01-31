import styled from "styled-components";
import {Mobile} from '../../responsive'

//MAIN MENU CONTAINER
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:	#3b444b;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  height: 100%;
  color:black;
`;

export const CartTitleContainer = styled.div`
  display: flex;
  flex: 0.5;
  color:white;
  width: 100%;
`;
export const CartTitle = styled.h1`
  font-size: 30px;
  margin:1%;
  ${Mobile({padding:'20px'})};

`;

//CART ITEMS START
export const CartItemsContainer = styled.div`
  display: flex;
  flex: 5;
  height:100%;
  flex-direction: column;
  gap: 2px;
  padding: 40px;
  margin: 20px;
  border-radius: 20px;
  border: solid 2px black;
  background:	white;
  overflow-y: auto;
/* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
  display: none;

};

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ${Mobile({padding:'5px',height:'100%'})};


`;

export const CartItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 150px;
  border-bottom: 2px solid grey;
  padding: 10px;
${Mobile({alignItems: 'center',justifyContent: 'center',position:'relative',maxHeight:'225px'})};
`;

export const CartPic = styled.img`
  display: flex;
  flex: 1;
  height: 100%;
  border-radius:10px;
  ${Mobile({height:'15vw'})};
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex: 5;
  height: 100%;
  width: 100%;
  padding: 20px;
  ${Mobile({flext:1,flexDirection:'column',gap:'40px'})};
`;

export const CartItemTitle = styled.div`
  font-size: 30px;
  width: 100%;
  color:black;
  
  ${Mobile({fontSize:'12px',position:'absolute',top:'0px',left:'15px'})};
  
`;

export const CartItemCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${Mobile({width:'75px',fontSize:'10px'})};

`;

export const Label = styled.h2`
  font-size: 24px;
  margin: 10px;
  ${Mobile({fontSize:'10px'})};
`;

export const CartItemSelect = styled.select`
  padding: 10px;
  font-size: 20px;
  max-width: 75px;
  border-radius: 10px;
  border: solid 2px black;
  background: black;
  color: white;
  ${Mobile({position:'absolute',width:'75px',fontSize:'10px'})};
`;

export const RemoveButton = styled.button`
  padding: 10px;
  width: 100px;
  color: white;
  border: none;
  font-size: 20px;
  border-radius: 10px;
  background: red;
  ${Mobile({position:'absolute',width:'75px',fontSize:'10px'})};
`;

export const CartPrice = styled.div`
  display: flex;
  justify-self:center;
  align-self:center;
  font-size:30px;
  ${Mobile({color:'black',fontSize:'20px'})};
  
`;

//CART ITEMS END

export const CartSubTotal = styled.div`
  display: flex;
  flex-direction:column;

  justify-content:space-around;
  align-items:center;
  background: white;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  font-size:30px;
  border: solid 2px black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  flex: 0.5;
  width:100%;
  max-width:375px;
`;


export const  GoBack =styled.div`
font-size:25px;
`

export const  CartSubWrapper =styled.div`
display:flex;
width:100%;
justify-content: space-around;

`
export const CheckoutButton = styled.button`
  padding: 10px;
  margin:15px;
  width: 150px;
  color: white;
  border: none;
  font-size: 20px;
  border-radius: 10px;
  background: black;
`;